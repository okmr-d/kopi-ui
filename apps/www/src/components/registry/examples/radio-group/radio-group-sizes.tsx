import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

export default function RadioGroupDemo() {
  return (
    <div className="grid gap-4">
      <RadioGroup size="sm">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="size-sm-1" id="size-sm-1" />
          <Label htmlFor="size-sm-1" className="text-xs">
            Small
          </Label>
        </div>
      </RadioGroup>
      <RadioGroup size="md">
        <div className="flex items-center space-x-2.5">
          <RadioGroupItem value="size-md-1" id="size-md-1" />
          <Label htmlFor="size-md-1">Medium (Default)</Label>
        </div>
      </RadioGroup>
      <RadioGroup size="lg">
        <div className="flex items-center space-x-3">
          <RadioGroupItem value="size-lg-1" id="size-lg-1" />
          <Label htmlFor="size-lg-1" className="text-base">
            Large
          </Label>
        </div>
      </RadioGroup>
    </div>
  )
}
