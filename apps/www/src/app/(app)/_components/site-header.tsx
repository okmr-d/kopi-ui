import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Icons } from "@/components/icons"
import { Button } from "@/components/shadcn-ui/button"
import { Container } from "@/components/container"
import { MainNav } from "./main-nav"
import { MobileNav } from "./mobile-nav"
import { ModeSwitcher } from "./mode-switcher"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur backdrop-saturate-200 supports-[backdrop-filter]:bg-background/60 dark:border-border">
      <Container className="flex h-14 items-center">
        <MainNav />
        <MobileNav />
        <div className="flex flex-1 items-center gap-2 justify-end">
          <nav className="flex items-center gap-0.5">
            <Button
              asChild
              variant="ghost"
              size="icon"
              className="h-8 w-8 px-0"
            >
              <Link
                href={siteConfig.links.github}
                target="_blank"
                rel="noreferrer"
              >
                <Icons.gitHub className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <ModeSwitcher />
          </nav>
        </div>
      </Container>
    </header>
  )
}
