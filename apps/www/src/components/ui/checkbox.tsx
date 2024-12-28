"use client"

import * as React from "react"
import { CheckboxGroup as CheckboxGroupPrimitive } from "@base-ui-components/react/checkbox-group"
import { Checkbox as CheckboxPrimitive } from "@base-ui-components/react/checkbox"

import { cn } from "@/lib/utils"

const CheckboxGroup = React.forwardRef<
  React.ElementRef<typeof CheckboxGroupPrimitive>,
  React.ComponentPropsWithoutRef<typeof CheckboxGroupPrimitive>
>(({ className, ...props }, ref) => {
  return (
    <CheckboxGroupPrimitive
      className={cn("flex flex-col items-start gap-2", className)}
      {...props}
      ref={ref}
    />
  )
})
CheckboxGroup.displayName = CheckboxGroupPrimitive.displayName

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "rounded-xs peer inline-flex size-4 shrink-0 items-center justify-center border border-input outline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring data-[disabled]:cursor-not-allowed data-[checked]:border-primary data-[invalid]:border-destructive data-[checked]:bg-primary data-[invalid]:data-[checked]:bg-destructive data-[disabled]:opacity-50 data-[invalid]:focus-visible:outline-destructive",
      props.indeterminate && "border-primary bg-primary",
      className,
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn(
        "flex data-[checked]:text-primary-foreground data-[invalid]:data-[checked]:text-destructive-foreground",
        props.indeterminate && "text-primary-foreground",
      )}
    >
      {props.indeterminate ? (
        <svg
          width="9"
          height="9"
          viewBox="0 0 9 9"
          fill="currentcolor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.75 4.5C0.75 4.08579 1.08579 3.75 1.5 3.75H7.5C7.91421 3.75 8.25 4.08579 8.25 4.5C8.25 4.91421 7.91421 5.25 7.5 5.25H1.5C1.08579 5.25 0.75 4.91421 0.75 4.5Z"
          />
        </svg>
      ) : (
        <svg
          width="9"
          height="9"
          viewBox="0 0 9 9"
          fill="currentcolor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.53547 0.62293C8.88226 0.849446 8.97976 1.3142 8.75325 1.66099L4.5083 8.1599C4.38833 8.34356 4.19397 8.4655 3.9764 8.49358C3.75883 8.52167 3.53987 8.45309 3.3772 8.30591L0.616113 5.80777C0.308959 5.52987 0.285246 5.05559 0.563148 4.74844C0.84105 4.44128 1.31533 4.41757 1.62249 4.69547L3.73256 6.60459L7.49741 0.840706C7.72393 0.493916 8.18868 0.396414 8.53547 0.62293Z"
          />
        </svg>
      )}
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { CheckboxGroup, Checkbox }
