"use client"

import * as React from "react"
import { Dialog as DialogPrimitive } from "@base-ui-components/react/dialog"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const Dialog = DialogPrimitive.Root

const DialogTrigger = DialogPrimitive.Trigger

const DialogPortal = DialogPrimitive.Portal

const DialogClose = DialogPrimitive.Close

const DialogBackdrop = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Backdrop>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Backdrop>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Backdrop
    ref={ref}
    className={cn(
      "fixed inset-0 bg-black/20 transition-all duration-150 data-[ending-style]:opacity-0 data-[starting-style]:opacity-0 dark:bg-black/80",
      className,
    )}
    {...props}
  />
))
DialogBackdrop.displayName = DialogPrimitive.Backdrop.displayName

const DialogPopup = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Popup>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Popup>
>(({ className, children, ...props }, ref) => (
  <DialogPrimitive.Popup
    ref={ref}
    className={cn(
      "fixed left-1/2 top-[calc(50%+1.25rem*var(--nested-dialogs))] grid w-96 max-w-[calc(100vw-3rem)] -translate-x-1/2 -translate-y-1/2 scale-[calc(1-0.1*var(--nested-dialogs))] gap-4 rounded-lg border bg-background p-6 text-foreground shadow-lg transition-all duration-150 data-[ending-style]:scale-95 data-[starting-style]:scale-95 data-[ending-style]:opacity-0 data-[starting-style]:opacity-0 data-[has-nested-dialogs]:after:absolute data-[has-nested-dialogs]:after:inset-0 data-[has-nested-dialogs]:after:rounded-[inherit] data-[has-nested-dialogs]:after:bg-black/5",
      className,
    )}
    {...props}
  >
    {children}
    <DialogClose
      className={cn(
        "absolute right-4 top-4 inline-flex h-4 w-4 select-none items-center justify-center rounded-sm font-medium opacity-70 outline-offset-2 transition hover:opacity-100 focus:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
      )}
    >
      <X className="h-4 w-4" />
      <span className="sr-only">Close</span>
    </DialogClose>
  </DialogPrimitive.Popup>
))
DialogPopup.displayName = DialogPrimitive.Popup.displayName

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("grid gap-1.5 text-center sm:text-left", className)}
    {...props}
  />
)
DialogHeader.displayName = "DialogHeader"

const DialogFooter = ({
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
DialogFooter.displayName = "DialogFooter"

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold leading-none", className)}
    {...props}
  />
))
DialogTitle.displayName = DialogPrimitive.Title.displayName

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
DialogDescription.displayName = DialogPrimitive.Description.displayName

export {
  Dialog,
  DialogBackdrop,
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogPopup,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
}
