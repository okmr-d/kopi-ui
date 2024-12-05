"use client"

import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { useState } from "react"

export default function CheckboxDemo() {
  const [checked, setChecked] = useState<boolean | "indeterminate">(
    "indeterminate",
  )

  return (
    <div className="flex items-center space-x-2.5">
      <Checkbox
        id="indeterminate-1"
        checked={checked}
        onCheckedChange={setChecked}
      />
      <Label htmlFor="indeterminate-1">Indeterminate</Label>
    </div>
  )
}
