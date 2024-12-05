import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export default function CheckboxDemo() {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="checkbox-1" />
      <Label htmlFor="checkbox-1">Accept terms and conditions</Label>
    </div>
  )
}
