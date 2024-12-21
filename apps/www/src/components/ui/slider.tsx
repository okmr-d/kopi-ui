"use client"

import * as React from "react"
import { Slider as SliderPrimitive } from "@base-ui-components/react/slider"

import { cn } from "@/lib/utils"

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "flex w-full touch-none select-none items-center data-[orientation=vertical]:h-full data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col data-[disabled]:opacity-50",
      className,
    )}
    {...props}
  >
    <SliderPrimitive.Control className="flex w-full h-full data-[orientation=horizontal]:py-3 data-[orientation=vertical]:px-3">
      <SliderPrimitive.Track className="grow rounded-full bg-secondary data-[orientation=horizontal]:h-2 data-[orientation=vertical]:h-full data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-2">
        <SliderPrimitive.Indicator className="bg-primary rounded-full data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full" />
        <SliderPrimitive.Thumb className="block h-5 w-5 rounded-full border-2 border-primary bg-background transition-colors focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-ring/40 data-[disabled]:cursor-not-allowed" />
      </SliderPrimitive.Track>
    </SliderPrimitive.Control>
  </SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
