import { Label } from "@/components/ui/label"
import { RadioGroup, Radio } from "@/components/ui/radio"

export default function RadioGroupDemo() {
  return (
    <RadioGroup defaultValue="comfortable">
      <Label className="inline-flex items-center gap-2">
        <Radio value="default" />
        Default
      </Label>
      <Label className="inline-flex items-center gap-2">
        <Radio value="comfortable" />
        Comfortable
      </Label>
      <Label className="inline-flex items-center gap-2">
        <Radio value="compact" />
        Compact
      </Label>
    </RadioGroup>
  )
}
