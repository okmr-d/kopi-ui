import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export default function CheckboxDemo() {
  return (
    <div className="grid gap-4">
      <div className="flex items-center space-x-2">
        <Checkbox id="sizes-sm" size="sm" />
        <Label htmlFor="sizes-sm">Small</Label>
      </div>
      <div className="flex items-center space-x-2.5">
        <Checkbox id="sizes-md" size="md" />
        <Label htmlFor="sizes-md">Medium (Default)</Label>
      </div>
      <div className="flex items-center space-x-3">
        <Checkbox id="sizes-lg" size="lg" />
        <Label htmlFor="sizes-lg" className="text-base">
          Large
        </Label>
      </div>
    </div>
  )
}
