"use client"

import * as React from "react"
import { RadioGroup as RadioGroupPrimitive } from "@base-ui-components/react/radio-group"
import { Radio as RadioPrimitive } from "@base-ui-components/react/radio"

import { cn } from "@/lib/utils"

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive
      className={cn("flex flex-col items-start gap-2", className)}
      {...props}
      ref={ref}
    />
  )
})
RadioGroup.displayName = RadioGroupPrimitive.displayName

const Radio = React.forwardRef<
  React.ElementRef<typeof RadioPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <RadioPrimitive.Root
      ref={ref}
      className={cn(
        "peer inline-flex size-4 shrink-0 items-center justify-center rounded-full border border-input bg-background outline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring disabled:cursor-not-allowed disabled:opacity-50 data-[checked]:border-primary data-[invalid]:border-destructive data-[invalid]:data-[checked]:border-destructive data-[checked]:bg-primary data-[invalid]:data-[checked]:bg-destructive data-[invalid]:focus-visible:border-destructive data-[invalid]:focus-visible:ring-destructive",
        className,
      )}
      {...props}
    >
      <RadioPrimitive.Indicator className="flex size-1.5 items-center justify-center rounded-full bg-primary-foreground data-[unchecked]:hidden data-[invalid]:bg-destructive-foreground" />
    </RadioPrimitive.Root>
  )
})
Radio.displayName = RadioPrimitive.Root.displayName

export { RadioGroup, Radio }
