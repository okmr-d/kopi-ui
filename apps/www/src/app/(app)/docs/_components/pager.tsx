import Link from "next/link"
import { Doc } from "contentlayer/generated"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { NavItem, NavItemWithChildren } from "@/types/nav"

import { docsConfig } from "@/config/docs"
import { buttonVariants } from "@/components/ui/button"

interface DocsPagerProps {
  doc: Doc
}

export function DocsPager({ doc }: DocsPagerProps) {
  const pager = getPagerForDoc(doc)

  if (!pager) {
    return null
  }

  return (
    <div className="flex flex-row items-center justify-between">
      {pager?.prev?.href && (
        <Link
          href={pager.prev.href}
          className={buttonVariants({ variant: "ghost" })}
        >
          <ChevronLeft className="size-4" />
          {pager.prev.title}
        </Link>
      )}
      {pager?.next?.href && (
        <Link
          href={pager.next.href}
          className={buttonVariants({ variant: "ghost", className: "ml-auto" })}
        >
          {pager.next.title}
          <ChevronRight className="size-4" />
        </Link>
      )}
    </div>
  )
}

export function getPagerForDoc(doc: Doc) {
  const nav = docsConfig.sidebarNav
  const flattenedLinks = [null, ...flatten(nav), null]
  const activeIndex = flattenedLinks.findIndex(
    (link) => doc.slug === link?.href,
  )
  const prev = activeIndex !== 0 ? flattenedLinks[activeIndex - 1] : null
  const next =
    activeIndex !== flattenedLinks.length - 1
      ? flattenedLinks[activeIndex + 1]
      : null
  return {
    prev,
    next,
  }
}

export function flatten(links: NavItemWithChildren[]): NavItem[] {
  return links
    .reduce<NavItem[]>((flat, link) => {
      return flat.concat(link.items?.length ? flatten(link.items) : link)
    }, [])
    .filter((link) => !link?.disabled)
}
