import { Separator } from "@/components/ui/separator"

export default function SeparatorDemo() {
  return (
    <div>
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">Base UI</h4>
        <p className="text-sm text-muted-foreground">
          Unstyled UI components for building accessible web apps and design
          systems.
        </p>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <a href="#">Overview</a>
        <Separator orientation="vertical" />
        <a href="#">Handbook</a>
        <Separator orientation="vertical" />
        <a href="#">Components</a>
      </div>
    </div>
  )
}
