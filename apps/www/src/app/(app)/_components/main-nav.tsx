"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { CopyIcon } from "lucide-react"

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="mr-4 hidden gap-6 md:flex">
      <Link href="/" className="flex items-center gap-2">
        <CopyIcon className="h-4 w-4" />
        <span className="hidden font-bold md:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      <nav className="flex items-center gap-4 text-sm">
        <Link
          href="/docs/installation"
          className={cn(
            "transition-colors",
            pathname === "/docs/installation"
              ? "text-foreground"
              : "text-foreground/70 hover:text-foreground",
          )}
        >
          Docs
        </Link>
        <Link
          href="/docs/components/input"
          className={cn(
            "transition-colors",
            pathname?.startsWith("/docs/components")
              ? "text-foreground"
              : "text-foreground/70 hover:text-foreground",
          )}
        >
          Components
        </Link>
      </nav>
    </div>
  )
}
