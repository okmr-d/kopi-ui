"use client"

import * as React from "react"
import { Toggle as TogglePrimitive } from "@base-ui-components/react/toggle"
import { ToggleGroup as ToggleGroupPrimitive } from "@base-ui-components/react/toggle-group"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const toggleVariants = cva(
  "inline-flex items-center justify-center font-medium transition-colors hover:bg-muted hover:text-muted-foreground outline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50 data-[pressed]:bg-accent data-[pressed]:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline:
          "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        sm: "h-8 px-2 min-w-8 text-xs rounded-[6px] gap-1.5",
        md: "h-9 px-2.5 min-w-9 text-sm rounded-[8px] gap-2",
        lg: "h-10 px-3 min-w-10 text-base rounded-[10px] gap-2.5",
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
