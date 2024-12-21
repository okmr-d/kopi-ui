import { Italic } from "lucide-react"

import { Toggle } from "@/components/ui/toggle"

export default function ToggleWithText() {
  return (
    <Toggle aria-label="Toggle italic">
      <Italic className="h-4 w-4" />
      Italic
    </Toggle>
  )
}
