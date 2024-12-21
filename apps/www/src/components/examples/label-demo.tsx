import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export default function LabelDemo() {
  return (
    <div>
      <Label className="flex items-center gap-2">
        <Checkbox id="terms" />
        Accept terms and conditions
      </Label>
    </div>
  )
}
