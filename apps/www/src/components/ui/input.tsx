import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import * as React from "react"

export const inputVariants = cva(
  [
    "inline-flex w-full border text-foreground placeholder:text-muted-foreground",
    "focus-visible:border-ring focus-visible:outline-none focus-visible:ring-[1px] focus-visible:ring-ring",
    "disabled:cursor-not-allowed disabled:opacity-50",
    "data-[invalid]:border-destructive data-[invalid]:focus-visible:border-destructive data-[invalid]:focus-visible:ring-destructive",
  ],
  {
    variants: {
      variant: {
        outline: "border-input bg-background",
        filled: "border-transparent bg-accent",
      },
      size: {
        xs: "h-7 px-2 py-0.5 text-xs rounded-[6px]",
        sm: "h-8 px-2.5 py-1 text-xs rounded-[7px]",
        md: "h-9 px-3 py-2 text-sm rounded-[8px]",
        lg: "h-10 px-3.5 py-2 text-base rounded-[9px]",
      },
    },
    defaultVariants: {
      variant: "outline",
      size: "md",
    },
  },
)

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "type">,
    VariantProps<typeof inputVariants> {
  type?:
    | "text"
    | "email"
    | "password"
    | "number"
    | "hidden"
    | "search"
    | "tel"
    | "url"
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <input
        className={cn(
          inputVariants({
            variant,
            size,
          }),
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)
Input.displayName = "Input"

export { Input }
