import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

export default function RadioGroupDemo() {
  return (
    <RadioGroup>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="disabled-1" id="disabled-1" disabled />
        <Label htmlFor="disabled-1">Option 1</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="disabled-2" id="disabled-2" />
        <Label htmlFor="disabled-2">Option 2</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="disabled-3" id="disabled-3" />
        <Label htmlFor="disabled-3">Option 3</Label>
      </div>
    </RadioGroup>
  )
}
