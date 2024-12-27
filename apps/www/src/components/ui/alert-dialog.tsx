"use client"

import * as React from "react"
import { AlertDialog as AlertDialogPrimitive } from "@base-ui-components/react/alert-dialog"

import { cn } from "@/lib/utils"

const AlertDialog = AlertDialogPrimitive.Root

const AlertDialogTrigger = AlertDialogPrimitive.Trigger

const AlertDialogPortal = AlertDialogPrimitive.Portal

const AlertDialogClose = AlertDialogPrimitive.Close

const AlertDialogBackdrop = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Backdrop>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Backdrop>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Backdrop
    className={cn(
      "fixed inset-0 bg-black/20 transition-all duration-150 data-[ending-style]:opacity-0 data-[starting-style]:opacity-0 dark:bg-black/80",
      className,
    )}
    {...props}
    ref={ref}
  />
))
AlertDialogBackdrop.displayName = AlertDialogPrimitive.Backdrop.displayName

const AlertDialogPopup = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Popup>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Popup>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Popup
    ref={ref}
    className={cn(
      "fixed left-1/2 top-[calc(50%+1.25rem*var(--nested-dialogs))] grid w-96 max-w-[calc(100vw-3rem)] -translate-x-1/2 -translate-y-1/2 scale-[calc(1-0.1*var(--nested-dialogs))] gap-4 rounded-lg border bg-background p-6 text-foreground shadow-lg transition-all duration-150 data-[ending-style]:scale-95 data-[starting-style]:scale-95 data-[ending-style]:opacity-0 data-[starting-style]:opacity-0 data-[has-nested-dialogs]:after:absolute data-[has-nested-dialogs]:after:inset-0 data-[has-nested-dialogs]:after:rounded-[inherit] data-[has-nested-dialogs]:after:bg-black/5",
      className,
    )}
    {...props}
  />
))
AlertDialogPopup.displayName = AlertDialogPrimitive.Popup.displayName

const AlertDialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("grid gap-1.5 text-center sm:text-left", className)}
    {...props}
  />
)
AlertDialogHeader.displayName = "AlertDialogHeader"

const AlertDialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
      className,
    )}
    {...props}
  />
)
AlertDialogFooter.displayName = "AlertDialogFooter"

const AlertDialogTitle = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold leading-none", className)}
    {...props}
  />
))
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName

const AlertDialogDescription = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
AlertDialogDescription.displayName =
  AlertDialogPrimitive.Description.displayName

export {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogBackdrop,
  AlertDialogTrigger,
  AlertDialogPopup,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogClose,
}
