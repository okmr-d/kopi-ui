import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import * as React from "react"
import { Input as InputPrimitive } from "@base-ui-components/react/input"

export const inputVariants = cva(
  "inline-flex h-9 w-full rounded-md border border-input bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[invalid]:border-destructive data-[invalid]:focus-visible:border-destructive data-[invalid]:focus-visible:ring-destructive",
  {
    variants: {
      file: {
        true: "p-0 pr-3 file:mr-3 file:h-full file:border-0 file:border-r file:border-solid file:border-input file:bg-transparent file:px-3 file:text-sm file:font-medium file:not-italic file:text-foreground",
      },
    },
  },
)

interface InputProps
  extends React.ComponentPropsWithoutRef<typeof InputPrimitive>,
    Omit<VariantProps<typeof inputVariants>, "type"> {}

const Input = React.forwardRef<
  React.ElementRef<typeof InputPrimitive>,
  InputProps
>(({ className, ...props }, ref) => {
  return (
    <InputPrimitive
      className={cn(inputVariants({ file: props.type === "file" }), className)}
      ref={ref}
      {...props}
    />
  )
})
Input.displayName = InputPrimitive.displayName

export { Input }
