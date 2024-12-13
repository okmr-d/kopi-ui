import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export default function SwitchDemo() {
  return (
    <div className="grid gap-2">
      <div>
        <Switch id="disabled-1" disabled />
        <Label htmlFor="disabled-1" className="sr-only">
          Disabled
        </Label>
      </div>
      <div>
        <Switch id="disabled-1" checked disabled />
        <Label htmlFor="disabled-1" className="sr-only">
          Disabled
        </Label>
      </div>
    </div>
  )
}
