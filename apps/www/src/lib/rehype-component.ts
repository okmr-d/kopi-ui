import fs from "fs"
import { UnistNode, UnistTree } from "@/types/unist"
import { u } from "unist-builder"
import { visit } from "unist-util-visit"
import { Index } from "../__registry__"

export function rehypeComponent() {
  return async (tree: UnistTree) => {
    visit(tree, (node: UnistNode) => {
      if (node.name === "ComponentSource" || node.name === "ComponentPreview") {
        const name = getNodeAttributeByName(node, "name")?.value as
          | string
          | undefined
        const title = getNodeAttributeByName(node, "title")?.value as
          | string
          | undefined

        if (!name) {
          return null
        }

        try {
          const component = Index["default"][name]

          const src = component.files[0]?.path

          // Read the source file.
          const filePath = src
          let source = fs.readFileSync(filePath, "utf8")

          // Replace imports.
          // TODO: Use @swc/core and a visitor to replace this.
          // For now a simple regex should do.
          // source = source.replaceAll(
          //   `@/registry/${style.name}/`,
          //   "@/components/",
          // )
          source = source.replaceAll("export default", "export")

          // Add code as children so that rehype can take over at build time.
          node.children?.push(
            u("element", {
              tagName: "pre",
              properties: {
                __src__: src,
              },
              children: [
                u("element", {
                  tagName: "code",
                  properties: {
                    className: ["language-tsx"],
                    metastring: title ? `title="${title}"` : undefined,
                  },
                  children: [
                    {
                      type: "text",
                      value: source,
                    },
                  ],
                }),
              ],
            }),
          )
        } catch (error) {
          console.error(error)
        }
      }
    })
  }
}

function getNodeAttributeByName(node: UnistNode, name: string) {
  return node.attributes?.find((attribute) => attribute.name === name)
}
