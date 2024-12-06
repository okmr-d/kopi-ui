import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

export default function RadioGroupDemo() {
  return (
    <div className="grid items-center gap-6">
      <RadioGroup defaultValue="variants-1-1" variant="solid">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="variants-1-1" id="variants-1-1" />
          <Label htmlFor="variants-1-1">Solid (Default) 1</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="variants-1-2" id="variants-1-2" />
          <Label htmlFor="variants-1-2">Solid (Default) 2</Label>
        </div>
      </RadioGroup>
      <RadioGroup defaultValue="variants-2-1" variant="filled">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="variants-2-1" id="variants-2-1" />
          <Label htmlFor="variants-2-1">Filled 1</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="variants-2-2" id="variants-2-2" />
          <Label htmlFor="variants-2-2">Filled 2</Label>
        </div>
      </RadioGroup>
    </div>
  )
}
