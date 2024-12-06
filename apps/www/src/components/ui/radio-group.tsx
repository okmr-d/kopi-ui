"use client"

import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import * as React from "react"
import { cn } from "@/lib/utils"
import { cva } from "class-variance-authority"

// Context for RadioGroup
const RadioGroupContext = React.createContext<{
  variant: "solid" | "filled"
  size: "sm" | "md" | "lg"
}>({ variant: "solid", size: "md" })

const useRadioGroupContext = () => {
  const context = React.useContext(RadioGroupContext)
  if (context === undefined) {
    throw new Error(
      "RadioGroup compound components cannot be rendered outside the RadioGroup component",
    )
  }
  return context
}

export interface RadioGroupProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> {
  variant?: "solid" | "filled"
  size?: "sm" | "md" | "lg"
}

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  RadioGroupProps
>(({ className, children, variant = "solid", size = "md", ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn("grid gap-3", className)}
      {...props}
      ref={ref}
    >
      <RadioGroupContext.Provider value={{ size, variant }}>
        {children}
      </RadioGroupContext.Provider>
    </RadioGroupPrimitive.Root>
  )
})
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName

export const radioGroupItemVariants = cva(
  [
    "peer rounded-full inline-flex items-center justify-center shrink-0 appearance-none border",
    "outline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring",
    "disabled:cursor-not-allowed disabled:opacity-50",
    "data-[invalid]:border-destructive data-[invalid]:focus-visible:border-destructive data-[invalid]:data-[state=checked]:border-destructive data-[invalid]:focus-visible:ring-destructive data-[invalid]:data-[state=checked]:bg-destructive data-[invalid]:data-[state=checked]:text-destructive-foreground",
  ],
  {
    variants: {
      variant: {
        solid:
          "border-input bg-background data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=indeterminate]:border-primary data-[state=indeterminate]:bg-primary data-[state=indeterminate]:text-primary-foreground",
        filled:
          "border-transparent bg-accent data-[state=checked]:text-accent-foreground data-[state=indeterminate]:text-accent-foreground",
      },
      size: {
        sm: "size-4",
        md: "size-5",
        lg: "size-6",
      },
    },
    defaultVariants: {
      variant: "solid",
      size: "md",
    },
  },
)

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => {
  const { variant, size } = useRadioGroupContext()

  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        radioGroupItemVariants({
          variant,
          size,
        }),
        className,
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="bg-current rounded-full size-2/5" />
    </RadioGroupPrimitive.Item>
  )
})
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName

export { RadioGroup, RadioGroupItem }
