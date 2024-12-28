"use client"

import * as React from "react"
import { Popover as PopoverPrimitive } from "@base-ui-components/react/popover"

import { cn } from "@/lib/utils"

const Popover = PopoverPrimitive.Root

const PopoverTrigger = PopoverPrimitive.Trigger

const PopoverPortal = PopoverPrimitive.Portal

const PopoverBackdrop = PopoverPrimitive.Backdrop

const PopoverPositioner = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Positioner>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Positioner>
>(({ className, sideOffset = 8, ...props }, ref) => (
  <PopoverPrimitive.Positioner
    ref={ref}
    sideOffset={sideOffset}
    className={cn("outline-0", className)}
    {...props}
  />
))
PopoverPositioner.displayName = PopoverPrimitive.Positioner.displayName

const PopoverPopup = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Popup>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Popup>
>(({ className, ...props }, ref) => (
  <PopoverPrimitive.Popup
    ref={ref}
    className={cn(
      "w-72 max-w-[calc(100vw-3rem)] origin-[var(--transform-origin)] rounded-lg border bg-popover p-4 text-popover-foreground shadow-md outline-none transition data-[ending-style]:scale-95 data-[starting-style]:scale-95 data-[ending-style]:opacity-0 data-[starting-style]:opacity-0",
      className,
    )}
    {...props}
  />
))
PopoverPopup.displayName = PopoverPrimitive.Popup.displayName

const PopoverArrow = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Arrow>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Arrow>
>(({ className, ...props }, ref) => (
  <PopoverPrimitive.Arrow
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
        className="fill-popover"
      />
      <path
        d="M8.99542 1.85876C9.75604 1.17425 10.9106 1.17422 11.6713 1.85878L16.5281 6.22989C17.0789 6.72568 17.7938 7.00001 18.5349 7.00001L15.89 7L11.0023 2.60207C10.622 2.2598 10.0447 2.2598 9.66436 2.60207L4.77734 7L2.13171 7.00001C2.87284 7.00001 3.58774 6.72568 4.13861 6.22989L8.99542 1.85876Z"
        className="fill-border"
      />
    </svg>
  </PopoverPrimitive.Arrow>
))
PopoverArrow.displayName = PopoverPrimitive.Arrow.displayName

const PopoverTitle = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Title>
>(({ className, ...props }, ref) => (
  <PopoverPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold leading-none", className)}
    {...props}
  />
))
PopoverTitle.displayName = PopoverPrimitive.Title.displayName

const PopoverDescription = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Description>
>(({ className, ...props }, ref) => (
  <PopoverPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
PopoverDescription.displayName = PopoverPrimitive.Description.displayName

const PopoverClose = PopoverPrimitive.Close

export {
  Popover,
  PopoverTrigger,
  PopoverPortal,
  PopoverBackdrop,
  PopoverPositioner,
  PopoverPopup,
  PopoverArrow,
  PopoverTitle,
  PopoverDescription,
  PopoverClose,
}
