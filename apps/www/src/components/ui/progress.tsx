"use client"

import * as React from "react"
import { Progress as ProgressPrimitive } from "@base-ui-components/react/progress"

import { cn } from "@/lib/utils"

const Progress = ProgressPrimitive.Root

const ProgressTrack = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Track>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Track>
>(({ className, ...props }, ref) => (
  <ProgressPrimitive.Track
    ref={ref}
    className={cn("block h-2 w-full overflow-hidden rounded-full bg-secondary")}
    {...props}
  />
))
ProgressTrack.displayName = ProgressPrimitive.Track.displayName

const ProgressIndicator = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Indicator>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Indicator>
>(({ className, ...props }, ref) => (
  <ProgressPrimitive.Indicator
    ref={ref}
    className={cn("block bg-primary transition-all duration-500", className)}
    {...props}
  />
))

export { Progress, ProgressTrack, ProgressIndicator }
