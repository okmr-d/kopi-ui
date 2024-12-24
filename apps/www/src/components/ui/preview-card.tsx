"use client"

import * as React from "react"
import { PreviewCard as PreviewCardPrimitive } from "@base-ui-components/react/preview-card"

import { cn } from "@/lib/utils"

const PreviewCard = PreviewCardPrimitive.Root

const PreviewCardTrigger = PreviewCardPrimitive.Trigger

const PreviewCardPortal = PreviewCardPrimitive.Portal

const PreviewCardBackdrop = PreviewCardPrimitive.Backdrop

const PreviewCardPositioner = PreviewCardPrimitive.Positioner

const PreviewCardPopup = React.forwardRef<
  React.ElementRef<typeof PreviewCardPrimitive.Popup>,
  React.ComponentPropsWithoutRef<typeof PreviewCardPrimitive.Popup>
>(({ className, ...props }, ref) => (
  <PreviewCardPrimitive.Popup
    ref={ref}
    className={cn(
      "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-64 rounded-lg border bg-popover p-4 text-popover-foreground shadow-md outline-none",
      className,
    )}
    {...props}
  />
))
PreviewCardPopup.displayName = PreviewCardPrimitive.Popup.displayName

const PreviewCardArrow = React.forwardRef<
  React.ElementRef<typeof PreviewCardPrimitive.Arrow>,
  React.ComponentPropsWithoutRef<typeof PreviewCardPrimitive.Arrow>
>(({ className, ...props }, ref) => (
  <PreviewCardPrimitive.Arrow
    ref={ref}
    className={cn(
      "data-[side=bottom]:top-[-8px] data-[side=left]:right-[-13px] data-[side=right]:left-[-13px] data-[side=top]:bottom-[-8px] data-[side=left]:rotate-90 data-[side=right]:-rotate-90 data-[side=top]:rotate-180",
      className,
    )}
    {...props}
  >
    <svg width="20" height="10" viewBox="0 0 20 10" fill="none">
      <path
        d="M9.66437 2.60207L4.80758 6.97318C4.07308 7.63423 3.11989 8 2.13172 8H0V10H20V8H18.5349C17.5468 8 16.5936 7.63423 15.8591 6.97318L11.0023 2.60207C10.622 2.2598 10.0447 2.25979 9.66437 2.60207Z"
        className="fill-[canvas]"
      />
      <path
        d="M8.99542 1.85876C9.75604 1.17425 10.9106 1.17422 11.6713 1.85878L16.5281 6.22989C17.0789 6.72568 17.7938 7.00001 18.5349 7.00001L15.89 7L11.0023 2.60207C10.622 2.2598 10.0447 2.2598 9.66436 2.60207L4.77734 7L2.13171 7.00001C2.87284 7.00001 3.58774 6.72568 4.13861 6.22989L8.99542 1.85876Z"
        className="fill-gray-200 dark:fill-none"
      />
      <path
        d="M10.3333 3.34539L5.47654 7.71648C4.55842 8.54279 3.36693 9 2.13172 9H0V8H2.13172C3.11989 8 4.07308 7.63423 4.80758 6.97318L9.66437 2.60207C10.0447 2.25979 10.622 2.2598 11.0023 2.60207L15.8591 6.97318C16.5936 7.63423 17.5468 8 18.5349 8H20V9H18.5349C17.2998 9 16.1083 8.54278 15.1901 7.71648L10.3333 3.34539Z"
        className="dark:fill-gray-300"
      />
    </svg>
  </PreviewCardPrimitive.Arrow>
))
PreviewCardArrow.displayName = PreviewCardPrimitive.Arrow.displayName

export {
  PreviewCard,
  PreviewCardTrigger,
  PreviewCardPopup,
  PreviewCardPortal,
  PreviewCardBackdrop,
  PreviewCardPositioner,
  PreviewCardArrow,
}
