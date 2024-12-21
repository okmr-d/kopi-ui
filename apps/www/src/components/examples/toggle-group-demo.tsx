import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  Bold,
  Italic,
  Underline,
} from "lucide-react"

import { ToggleGroup, Toggle } from "@/components/ui/toggle"
import { Label } from "@/components/ui/label"

export default function ToggleGroupDemo() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label>Single</Label>
        <ToggleGroup defaultValue={["left"]}>
          <Toggle value="left" aria-label="Toggle left">
            <AlignLeft className="h-4 w-4" />
          </Toggle>
          <Toggle value="center" aria-label="Toggle center">
            <AlignCenter className="h-4 w-4" />
          </Toggle>
          <Toggle value="right" aria-label="Toggle right">
            <AlignRight className="h-4 w-4" />
          </Toggle>
        </ToggleGroup>
      </div>
      <div className="space-y-2">
        <Label>Multiple</Label>
        <ToggleGroup toggleMultiple defaultValue={["bold", "italic"]}>
          <Toggle value="bold" aria-label="Toggle bold">
            <Bold className="h-4 w-4" />
          </Toggle>
          <Toggle value="italic" aria-label="Toggle italic">
            <Italic className="h-4 w-4" />
          </Toggle>
          <Toggle value="underline" aria-label="Toggle underline">
            <Underline className="h-4 w-4" />
          </Toggle>
        </ToggleGroup>
      </div>
    </div>
  )
}
