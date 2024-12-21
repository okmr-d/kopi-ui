"use client"

import * as React from "react"
import { ChevronRightIcon } from "lucide-react"

import {
  Collapsible,
  CollapsiblePanel,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

export default function CollapsibleDemo() {
  return (
    <Collapsible className="flex w-[400px] flex-col justify-center border rounded-lg">
      <CollapsibleTrigger className="group inline-flex items-center whitespace-nowrap font-medium transition-colors outline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 h-9 px-4 text-sm rounded-lg gap-2">
        <ChevronRightIcon className="size-4 transition-all ease-out group-data-[panel-open]:rotate-90" />
        Recovery keys
      </CollapsibleTrigger>
      <CollapsiblePanel className="flex h-[var(--collapsible-panel-height)] flex-col justify-end overflow-hidden text-sm transition-all ease-out data-[starting-style]:h-0 data-[ending-style]:h-0">
        <div className="flex flex-col gap-2 p-4 pl-10">
          <div>alien-bean-pasta</div>
          <div>wild-irish-burrito</div>
          <div>horse-battery-staple</div>
        </div>
      </CollapsiblePanel>
    </Collapsible>
  )
}
