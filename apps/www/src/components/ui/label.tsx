import { cn } from "@/lib/utils"
import { cva, VariantProps } from "class-variance-authority"
import * as React from "react"

export const labelVariants = cva(
  "select-none text-sm font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
)

export interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement>,
    VariantProps<typeof labelVariants> {}

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, ...props }, ref) => {
    return (
      <label className={cn(labelVariants(), className)} ref={ref} {...props} />
    )
  },
)
Label.displayName = "Label"

export { Label }
