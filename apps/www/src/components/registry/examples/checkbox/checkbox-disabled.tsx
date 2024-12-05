import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export default function CheckboxDemo() {
  return (
    <div className="grid gap-4">
      <div className="flex items-center space-x-2.5">
        <Checkbox id="disabled-1" disabled />
        <Label htmlFor="disabled-1">Disabled</Label>
      </div>
      <div className="flex items-center space-x-2.5">
        <Checkbox id="disabled-2" defaultChecked disabled />
        <Label htmlFor="disabled-2">Disabled</Label>
      </div>
    </div>
  )
}
