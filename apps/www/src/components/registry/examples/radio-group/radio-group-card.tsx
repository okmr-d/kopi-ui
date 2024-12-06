import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

export default function RadioGroupDemo() {
  return (
    <div className="w-full max-w-sm">
      <RadioGroup defaultValue="radio-card-1">
        <div className="relative flex w-full items-start gap-2 rounded-lg border border-input p-4 shadow-sm has-[[data-state=checked]]:border-ring has-[[data-state=checked]]:ring-[1px] has-[[data-state=checked]]:ring-ring has-[:focus-visible]:outline has-[:focus-visible]:outline-ring has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2">
          <RadioGroupItem
            id="radio-card-1"
            value="radio-card-1"
            className="order-1 focus-visible:outline-0 after:absolute after:inset-0"
            aria-describedby="radio-card-1-description"
          />
          <div className="grid grow gap-2">
            <Label htmlFor="radio-card-1">Option 1</Label>
            <p
              id="radio-card-1-description"
              className="text-xs text-muted-foreground"
            >
              A short description of this radio card
            </p>
          </div>
        </div>
        <div className="relative flex w-full items-start gap-2 rounded-lg border border-input p-4 shadow-sm has-[[data-state=checked]]:border-ring has-[[data-state=checked]]:ring-[1px] has-[[data-state=checked]]:ring-ring has-[:focus-visible]:outline has-[:focus-visible]:outline-ring has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2">
          <RadioGroupItem
            id="radio-card-2"
            value="radio-card-2"
            className="order-1 focus-visible:outline-0 after:absolute after:inset-0"
            aria-describedby="radio-card-2-description"
          />
          <div className="grid grow gap-2">
            <Label htmlFor="radio-card-2">Option 2</Label>
            <p
              id="radio-card-2-description"
              className="text-xs text-muted-foreground"
            >
              A short description of this radio card
            </p>
          </div>
        </div>
      </RadioGroup>
    </div>
  )
}
