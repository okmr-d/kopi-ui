"use client"

import * as React from "react"
import { Tabs as TabsPrimitive } from "@base-ui-components/react/tabs"

import { cn } from "@/lib/utils"

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center rounded-lg bg-muted p-0.5 text-muted-foreground",
      className,
    )}
    {...props}
  />
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTab = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Tab>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Tab>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Tab
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium outline-offset-2 transition-all hover:text-muted-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50 data-[selected]:bg-background data-[selected]:text-foreground data-[selected]:shadow-sm",
      className,
    )}
    {...props}
  />
))
TabsTab.displayName = TabsPrimitive.Tab.displayName

const TabsPanel = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Panel>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Panel>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Panel
    ref={ref}
    className={cn(
      "mt-2 outline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring",
      className,
    )}
    {...props}
  />
))
TabsPanel.displayName = TabsPrimitive.Panel.displayName

export { Tabs, TabsList, TabsTab, TabsPanel }
