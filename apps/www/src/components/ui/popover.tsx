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
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Positioner
    ref={ref}
    align={align}
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
      "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 rounded-lg border bg-popover p-4 text-popover-foreground shadow-md outline-none",
      className,
    )}
    {...props}
  />
))
PopoverPopup.displayName = PopoverPrimitive.Popup.displayName

const PopoverArrow = PopoverPrimitive.Arrow
const PopoverTitle = PopoverPrimitive.Title
const PopoverDescription = PopoverPrimitive.Description
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
