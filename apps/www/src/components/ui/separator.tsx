"use client"

import * as React from "react"
import { Separator as SeparatorPrimitive } from "@base-ui-components/react/separator"
import { cn } from "@/lib/utils"

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive> & {
    orientation?: "horizontal" | "vertical"
  }
>(({ className, orientation = "horizontal", ...props }, ref) => (
  <SeparatorPrimitive
    ref={ref}
    className={cn(
      "shrink-0 bg-border",
      orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
      className,
    )}
    {...props}
  />
))
Separator.displayName = SeparatorPrimitive.displayName

export { Separator }
