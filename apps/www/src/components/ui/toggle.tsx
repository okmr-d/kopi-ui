"use client"

import * as React from "react"
import { Toggle as TogglePrimitive } from "@base-ui-components/react/toggle"
import { ToggleGroup as ToggleGroupPrimitive } from "@base-ui-components/react/toggle-group"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const toggleVariants = cva(
  "inline-flex items-center justify-center font-medium outline-offset-2 transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50 data-[pressed]:bg-accent data-[pressed]:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline:
          "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        sm: "h-8 min-w-8 gap-1.5 rounded-sm px-2 text-xs",
        md: "h-9 min-w-9 gap-2 rounded-md px-2.5 text-sm",
        lg: "h-10 min-w-10 gap-2.5 rounded-lg px-3 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  },
)

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive> &
    VariantProps<typeof toggleVariants>
>(({ className, variant, size, ...props }, ref) => (
  <TogglePrimitive
    ref={ref}
    className={cn(toggleVariants({ variant, size, className }))}
    {...props}
  />
))
Toggle.displayName = TogglePrimitive.displayName

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

export { Toggle, toggleVariants, ToggleGroup }
