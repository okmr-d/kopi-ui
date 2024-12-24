import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Icons } from "@/components/icons"
import { buttonVariants } from "@/components/ui/button"
import { Container } from "@/components/container"
import { MainNav } from "./main-nav"
import { MobileNav } from "./mobile-nav"
import { ModeSwitcher } from "./mode-switcher"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/50 bg-background/95 backdrop-blur backdrop-saturate-200 supports-[backdrop-filter]:bg-background/60 dark:border-border">
      <Container className="flex h-14 items-center">
        <MainNav />
        <MobileNav />
        <div className="flex flex-1 items-center justify-end gap-2">
          <nav className="flex items-center gap-0.5">
            <Link
              href={siteConfig.links.github}
              className={buttonVariants({ variant: "ghost", size: "icon-sm" })}
              target="_blank"
              rel="noreferrer"
            >
              <Icons.gitHub className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </Link>
            <ModeSwitcher />
          </nav>
        </div>
      </Container>
    </header>
  )
}
