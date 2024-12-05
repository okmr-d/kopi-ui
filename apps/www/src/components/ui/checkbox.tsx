"use client"

import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import * as React from "react"
import { cn } from "@/lib/utils"
import { cva, VariantProps } from "class-variance-authority"
import { CheckIcon, MinusIcon } from "lucide-react"

export const checkboxVariants = cva(
  [
    "peer group relative inline-flex shrink-0 appearance-none border",
    "focus-visible:outline-none focus-visible:ring-offset-1 focus-visible:ring-[2px] focus-visible:ring-ring",
    "disabled:cursor-not-allowed disabled:opacity-50",
    "data-[invalid]:border-destructive data-[invalid]:focus-visible:border-destructive data-[invalid]:data-[state=checked]:border-destructive data-[invalid]:focus-visible:ring-destructive data-[invalid]:data-[state=checked]:bg-destructive data-[invalid]:data-[state=checked]:text-destructive-foreground",
  ],
  {
    variants: {
      variant: {
        outline:
          "border-input bg-background data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=indeterminate]:border-primary data-[state=indeterminate]:bg-primary data-[state=indeterminate]:text-primary-foreground",
        filled:
          "border-transparent bg-accent data-[state=checked]:text-accent-foreground data-[state=indeterminate]:text-accent-foreground",
      },
      size: {
        sm: "size-4 rounded-sm",
        md: "size-5 rounded-sm",
        lg: "size-6 rounded-sm",
      },
    },
    defaultVariants: {
      variant: "outline",
      size: "md",
    },
  },
)

export const checkboxIconVariants = cva("stroke-[3px]", {
  variants: {
    size: {
      sm: "size-3",
      md: "size-4",
      lg: "size-5",
    },
  },
  defaultVariants: {
    size: "md",
  },
})

export interface NativeSelectProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>,
    VariantProps<typeof checkboxVariants> {
  invalid?: boolean
}

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  NativeSelectProps
>(({ className, variant, size, invalid, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      checkboxVariants({
        variant,
        size,
      }),
      className,
    )}
    aria-invalid={invalid ?? undefined}
    data-invalid={invalid ?? undefined}
    {...props}
  >
    <CheckboxPrimitive.Indicator className="absolute inset-0 flex items-center justify-center">
      {props.checked === "indeterminate" ? (
        <MinusIcon className={checkboxIconVariants({ size })} />
      ) : (
        <CheckIcon className={checkboxIconVariants({ size })} />
      )}
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
Checkbox.displayName = "Checkbox"

export { Checkbox }
