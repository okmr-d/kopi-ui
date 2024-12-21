"use client"

import * as React from "react"
import { ToggleGroup as ToggleGroupPrimitive } from "@base-ui-components/react/toggle-group"

import { cn } from "@/lib/utils"

const ToggleGroup = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive>
>(({ className, ...props }, ref) => (
  <ToggleGroupPrimitive
    ref={ref}
    className={cn("flex items-center justify-center gap-1", className)}
    {...props}
  />
))
ToggleGroup.displayName = ToggleGroupPrimitive.displayName

export { ToggleGroup }
