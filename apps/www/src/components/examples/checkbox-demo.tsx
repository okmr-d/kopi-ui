"use client"

import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export default function CheckboxDemo() {
  return (
    <Label className="inline-flex items-center gap-2">
      <Checkbox />
      <span className="text-sm font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-50">
        Accept terms and conditions
      </span>
    </Label>
  )
}
