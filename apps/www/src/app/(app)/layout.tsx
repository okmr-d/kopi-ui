import { SiteHeader } from "./_components/site-header"
import { SiteFooter } from "./_components/site-footer"

interface AppLayoutProps {
  children: React.ReactNode
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="grow">{children}</main>
      <SiteFooter />
    </div>
  )
}
