import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export default function SwitchDemo() {
  return (
    <div className="w-full max-w-sm">
      <div className="relative flex w-full items-start gap-2 rounded-lg border border-input p-4 shadow-sm has-[[data-state=checked]]:border-ring has-[[data-state=checked]]:ring-[1px] has-[[data-state=checked]]:ring-ring has-[:focus-visible]:outline has-[:focus-visible]:outline-ring has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2">
        <Switch
          id="switch-card-1"
          className="order-1 focus-visible:ring-transparent after:absolute after:inset-0"
          aria-describedby="switch-card-1-description"
        />
        <div className="grid grow gap-2">
          <Label htmlFor="switch-card-1">Label</Label>
          <p
            id="switch-card-1-description"
            className="text-xs text-muted-foreground"
          >
            A short description of the switch
          </p>
        </div>
      </div>
    </div>
  )
}
