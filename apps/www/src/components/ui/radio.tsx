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
        "peer h-5 w-5 rounded-full inline-flex items-center justify-center shrink-0 border border-input bg-background data-[checked]:border-primary data-[checked]:bg-primary outline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring disabled:cursor-not-allowed disabled:opacity-50 data-[invalid]:border-destructive data-[invalid]:focus-visible:border-destructive data-[invalid]:data-[checked]:border-destructive data-[invalid]:focus-visible:ring-destructive data-[invalid]:data-[checked]:bg-destructive",
        className,
      )}
      {...props}
    >
      <RadioPrimitive.Indicator className="flex h-2 w-2 rounded-full bg-primary-foreground data-[unchecked]:hidden data-[invalid]:bg-destructive-foreground" />
    </RadioPrimitive.Root>
  )
})
Radio.displayName = RadioPrimitive.Root.displayName

export { RadioGroup, Radio }
