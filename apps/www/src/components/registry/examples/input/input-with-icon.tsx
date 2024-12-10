import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AtSignIcon, MailIcon } from "lucide-react"

export default function InputDemo() {
  return (
    <div className="grid gap-4 w-full max-w-xs">
      <div className="space-y-2">
        <Label htmlFor="input-with-start-icon">Input with start icon</Label>
        <div className="relative">
          <Input
            id="input-with-start-icon"
            type="email"
            placeholder="Email"
            className="ps-9"
          />
          <span className="pointer-events-none absolute inset-y-0 start-0 flex h-full w-9 items-center justify-center rounded-e-lg text-muted-foreground peer-disabled:opacity-50">
            <AtSignIcon size={16} aria-hidden="true" />
          </span>
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="input-with-end-icon">Input with end icon</Label>
        <div className="relative">
          <Input
            id="input-with-end-icon"
            type="email"
            placeholder="Email"
            className="pe-9"
          />
          <span className="pointer-events-none absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-lg text-muted-foreground peer-disabled:opacity-50">
            <MailIcon size={16} aria-hidden="true" />
          </span>
        </div>
      </div>
    </div>
  )
}
