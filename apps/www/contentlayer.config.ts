import { getHighlighter } from "@shikijs/compat"
import {
  defineDocumentType,
  defineNestedType,
  makeSource,
} from "contentlayer2/source-files"
import rehypeSlug from "rehype-slug"
import { visit } from "unist-util-visit"
import rehypePrettyCode, { LineElement } from "rehype-pretty-code"
import { rehypeNpmCommand } from "@/lib/rehype-npm-command"
import { codeImport } from "remark-code-import"
import remarkGfm from "remark-gfm"
import { rehypeComponent } from "@/lib/rehype-component"

const LinksProperties = defineNestedType(() => ({
  name: "LinksProperties",
  fields: {
    doc: {
      type: "string",
    },
    api: {
      type: "string",
    },
  },
}))

export const Doc = defineDocumentType(() => ({
  name: "Doc",
  filePathPattern: `docs/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
      required: true,
    },
    published: {
      type: "boolean",
      default: true,
    },
    links: {
      type: "nested",
      of: LinksProperties,
    },
    featured: {
      type: "boolean",
      default: false,
      required: false,
    },
    component: {
      type: "boolean",
      default: false,
      required: false,
    },
    toc: {
      type: "boolean",
      default: true,
      required: false,
    },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => `/${doc._raw.flattenedPath}`,
    },
    slugAsParams: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
    },
  },
}))

export default makeSource({
  contentDirPath: "./src/contents",
  documentTypes: [Doc],
  mdx: {
    remarkPlugins: [remarkGfm, codeImport],
    rehypePlugins: [
      rehypeSlug,
      rehypeComponent,
      () => (tree) => {
        visit(tree, (node) => {
          if (node?.type === "element" && node?.tagName === "pre") {
            const [codeEl] = node.children

            if (codeEl.tagName !== "code") return

            node.__rawString__ = codeEl.children?.[0].value
          }
        })
      },
      [
        rehypePrettyCode,
        {
          theme: "github-dark",
          keepBackground: false,
          getHighlighter,
          onVisitLine(node: LineElement) {
            // Prevent lines from collapsing in `display: grid` mode, and allow empty
            // lines to be copy/pasted
            if (node.children.length === 0) {
              node.children = [{ type: "text", value: " " }]
            }
          },
        },
      ],
      () => (tree) => {
        visit(tree, (node) => {
          if (node?.type === "element" && node?.tagName === "figure") {
            if (!("data-rehype-pretty-code-figure" in node.properties)) {
              return
            }

            const preElement = node.children.at(-1)
            if (preElement.tagName !== "pre") {
              return
            }

            preElement.properties["__rawString__"] = node.__rawString__
            preElement.properties["__withMeta__"] =
              node.children.at(0).tagName === "figcaption"
          }
        })
      },
      rehypeNpmCommand,
    ],
  },
})
