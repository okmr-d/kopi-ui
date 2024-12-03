import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import * as React from "react"

export const fileInputVariants = cva(
  [
    "flex w-full border italic text-muted-foreground file:h-full file:border-0 file:border-r file:border-solid file:border-input file:bg-transparent file:font-medium file:not-italic file:text-foreground",
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
        xs: "h-7 pr-2 text-xs rounded-[6px] file:me-2 file:px-2 file:text-xs",
        sm: "h-8 pr-2.5 text-xs rounded-[7px] file:me-2.5 file:px-2.5 file:text-xs",
        md: "h-9 pr-3 text-sm rounded-[8px] file:me-3 file:px-3 file:text-sm",
        lg: "h-10 pr-3.5 text-base rounded-[9px] file:me-3.5 file:px-3.5 file:text-base",
      },
    },
    defaultVariants: {
      variant: "outline",
      size: "md",
    },
  },
)

export interface FileInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "type">,
    VariantProps<typeof fileInputVariants> {}

const FileInput = React.forwardRef<HTMLInputElement, FileInputProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <input
        type="file"
        className={cn(
          fileInputVariants({
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
FileInput.displayName = "FileInput"

export { FileInput }
