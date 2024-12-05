import { cn } from "@/lib/utils"
import { cva, VariantProps } from "class-variance-authority"
import { ChevronDown } from "lucide-react"
import * as React from "react"

export const nativeSelectVariants = cva(
  [
    "peer inline-flex w-full cursor-pointer appearance-none border text-foreground placeholder:text-muted-foreground",
    "focus-visible:border-ring focus-visible:outline-none focus-visible:ring-[1px] focus-visible:ring-ring",
    "disabled:cursor-not-allowed disabled:opacity-50",
    "data-[invalid]:border-destructive data-[invalid]:focus-visible:border-destructive data-[invalid]:focus-visible:ring-destructive",
    "has-[option[disabled]:checked]:text-muted-foreground",
  ],
  {
    variants: {
      variant: {
        outline: "border-input bg-background",
        filled: "border-transparent bg-accent",
      },
      size: {
        xs: "h-7 pe-6 ps-2 text-xs rounded-[6px]",
        sm: "h-8 pe-7 ps-2.5 text-xs rounded-[7px]",
        md: "h-9 pe-8 ps-3 text-sm rounded-[8px]",
        lg: "h-10 pe-9 ps-3.5 text-base rounded-[9px]",
      },
      isMultiple: {
        true: "h-auto ps-0 pe-0 [&>*]:px-3 [&>*]:py-2",
      },
    },
    defaultVariants: {
      variant: "outline",
      size: "md",
      isMultiple: false,
    },
  },
)

export const nativeSelectIconVariants = cva("", {
  variants: {
    size: {
      xs: "size-3",
      sm: "size-3.5",
      md: "size-4",
      lg: "size-[1.25rem]",
    },
  },
  defaultVariants: {
    size: "md",
  },
})

export interface NativeSelectProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "size">,
    VariantProps<typeof nativeSelectVariants> {
  children: React.ReactNode
}

const NativeSelect = React.forwardRef<HTMLSelectElement, NativeSelectProps>(
  ({ className, variant, size, children, ...props }, ref) => {
    return (
      <div className="relative">
        <select
          className={cn(
            nativeSelectVariants({
              variant,
              size,
              isMultiple: props.multiple,
            }),
            className,
          )}
          ref={ref}
          {...props}
        >
          {children}
        </select>
        {!props.multiple && (
          <span className="pointer-events-none absolute inset-y-0 end-0 flex aspect-square items-center justify-center text-muted-foreground peer-disabled:opacity-50">
            <ChevronDown
              className={nativeSelectIconVariants({ size })}
              aria-hidden="true"
            />
          </span>
        )}
      </div>
    )
  },
)
NativeSelect.displayName = "NativeSelect"

export { NativeSelect }
