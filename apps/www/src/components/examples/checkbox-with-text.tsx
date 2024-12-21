import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export default function CheckboxWithText() {
  return (
    <div className="items-top flex space-x-2">
      <Checkbox id="checkbox-with-text" />
      <div className="grid gap-1.5 leading-none">
        <Label htmlFor="checkbox-with-text">Accept terms and conditions</Label>
        <p className="text-sm text-muted-foreground">
          You agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </div>
  )
}
