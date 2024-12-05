import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export default function CheckboxDemo() {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="error-1" invalid />
      <Label htmlFor="error-1">Invalid</Label>
    </div>
  )
}
