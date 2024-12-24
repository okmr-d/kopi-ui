import * as React from "react"

import { cn } from "@/lib/utils"
import { cva, VariantProps } from "class-variance-authority"

export const textareaVariants = cva(
  [
    "flex min-h-[80px] w-full border text-foreground placeholder:text-muted-foreground",
    "focus-visible:border-ring focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
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
        sm: "h-8 rounded-sm px-2.5 py-1 text-xs",
        md: "h-9 rounded-md px-3 py-2 text-sm",
        lg: "h-10 rounded-lg px-3.5 py-2 text-base",
      },
    },
    defaultVariants: {
      variant: "outline",
      size: "md",
    },
  },
)

export interface TextAreaProps
  extends React.ComponentProps<"textarea">,
    VariantProps<typeof textareaVariants> {
  invalid?: boolean
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className, variant, size, invalid, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          textareaVariants({
            variant,
            size,
          }),
          className,
        )}
        aria-invalid={invalid || undefined}
        data-invalid={invalid || undefined}
        ref={ref}
        {...props}
      />
    )
  },
)
Textarea.displayName = "Textarea"

export { Textarea }
