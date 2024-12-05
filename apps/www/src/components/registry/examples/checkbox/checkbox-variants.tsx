import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export default function CheckboxDemo() {
  return (
    <div className="grid items-center gap-4">
      <div className="flex items-center space-x-2.5">
        <Checkbox id="variant-1" variant="outline" />
        <Label htmlFor="variant-1">Outline (Default)</Label>
      </div>
      <div className="flex items-center space-x-2.5">
        <Checkbox id="variant-2" variant="filled" />
        <Label htmlFor="variant-2">Filled</Label>
      </div>
    </div>
  )
}
