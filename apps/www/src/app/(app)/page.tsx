import Link from "next/link"
import { siteConfig } from "@/config/site"
import { Button } from "@/components/shadcn-ui/button"
import { ArrowRight } from "lucide-react"
import { Container } from "@/components/container"

export default function IndexPage() {
  return (
    <Container className="flex flex-col items-start gap-4 py-20">
      <Link
        href="/docs/components/input"
        className="group inline-flex items-center px-0.5 text-sm font-medium"
      >
        <span className="underline-offset-4 group-hover:underline">
          New input components
        </span>
        <ArrowRight className="ml-1 h-4 w-4" />
      </Link>
      <h1 className="text-4xl/[1.1] font-bold leading-tight tracking-tight md:text-5xl/[1.1]">
        Just copy and paste
      </h1>
      <p className="max-w-2xl text-balance text-lg font-light text-foreground">
        Beautifully designed components that you can copy and paste into your
        apps. Made with Tailwind CSS. Open source.
      </p>
      <div className="flex w-full items-center justify-start gap-2 py-2">
        <Button asChild size="sm">
          <Link href="/docs/installation">Get Started</Link>
        </Button>
        <Button asChild size="sm" variant="ghost">
          <Link target="_blank" rel="noreferrer" href={siteConfig.links.github}>
            GitHub
          </Link>
        </Button>
      </div>
    </Container>
  )
}
