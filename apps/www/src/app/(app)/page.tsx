import Link from "next/link"
import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Container } from "@/components/container"

export default function IndexPage() {
  return (
    <Container className="flex flex-col items-start gap-4 py-20">
      <h1 className="text-4xl/[1.1] font-bold leading-tight tracking-tight md:text-5xl/[1.1]">
        Just copy and paste
      </h1>
      <p className="max-w-2xl text-balance text-lg font-light text-foreground">
        Beautifully designed components that you can copy and paste into your
        apps. Made with Tailwind CSS. Open source.
      </p>
      <div className="flex w-full items-center justify-start gap-2 py-2">
        <Link
          href="/docs/installation"
          className={buttonVariants({ size: "sm" })}
        >
          Get Started
        </Link>
        <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.github}
          className={buttonVariants({ variant: "ghost", size: "sm" })}
        >
          GitHub
        </Link>
      </div>
    </Container>
  )
}
