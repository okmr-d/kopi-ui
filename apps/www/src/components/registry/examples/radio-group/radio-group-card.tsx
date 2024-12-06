import { RadioGroup } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

export default function RadioGroupDemo() {
  return (
    <div className="w-full max-w-sm">
      <div className="relative flex w-full items-start gap-2 rounded-lg border border-input p-4 shadow-sm has-[[data-state=checked]]:border-ring has-[[data-state=checked]]:ring-[1px] has-[[data-state=checked]]:ring-ring has-[:focus-visible]:outline has-[:focus-visible]:outline-ring has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2">
        <RadioGroup
          id="checkbox-card-1"
          className="order-1 focus-visible:ring-transparent after:absolute after:inset-0"
          aria-describedby="checkbox-card-1-description"
        />
        <div className="grid grow gap-2">
          <Label htmlFor="checkbox-card-1">Label</Label>
          <p
            id="checkbox-card-1-description"
            className="text-xs text-muted-foreground"
          >
            A short description of the checkbox
          </p>
        </div>
      </div>
    </div>
  )
}
