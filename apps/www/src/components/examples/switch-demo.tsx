import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export default function SwitchDemo() {
  return (
    <Label className="flex items-center gap-2">
      <Switch />
      Airplane Mode
    </Label>
  )
}
