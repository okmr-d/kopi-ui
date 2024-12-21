"use client"

import { useState } from "react"
import { CheckboxGroup, Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export default function CheckboxWithText() {
  const [value, setValue] = useState(["item-1"])

  return (
    <div className="w-60">
      <CheckboxGroup value={value} onValueChange={setValue}>
        <Label className="inline-flex items-center gap-2">
          <Checkbox name="item-1" />
          <span className="text-sm font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-50">
            Item 1
          </span>
        </Label>
        <Label className="inline-flex items-center gap-2">
          <Checkbox name="item-2" />
          <span className="text-sm font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-50">
            Item 2
          </span>
        </Label>
        <Label className="inline-flex items-center gap-2">
          <Checkbox name="item-3" />
          <span className="text-sm font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-50">
            Item 3
          </span>
        </Label>
      </CheckboxGroup>

      <div className="mt-4 text-xs">Selected: {value.join(", ")}</div>
    </div>
  )
}
