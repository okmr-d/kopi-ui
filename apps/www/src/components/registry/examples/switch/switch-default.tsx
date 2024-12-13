import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export default function SwitchDemo() {
  return (
    <div className="inline-flex items-center gap-2">
      <Switch id="switch-1" />
      <Label htmlFor="switch-1" className="sr-only">
        Switch 1
      </Label>
    </div>
  )
}
