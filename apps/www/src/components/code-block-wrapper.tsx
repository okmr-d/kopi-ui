"use client"

import * as React from "react"
import * as Collapsible from "@radix-ui/react-collapsible"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface CodeBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  expandButtonTitle?: string
  hasTitle?: boolean
}

export function CodeBlockWrapper({
  expandButtonTitle = "View Code",
  className,
  children,
  hasTitle = false,
  ...props
}: CodeBlockProps) {
  const [isOpened, setIsOpened] = React.useState(false)

  return (
    <Collapsible.Root open={isOpened} onOpenChange={setIsOpened}>
      <div className={cn("relative overflow-hidden", className)} {...props}>
        <Collapsible.Content
          forceMount
          className={cn(
            "overflow-hidden",
            !isOpened && (hasTitle ? "max-h-[164px]" : "max-h-32"),
          )}
        >
          <div
            className={cn(
              "[&_pre]:my-0 [&_pre]:max-h-[650px] [&_pre]:pb-[100px]",
              !isOpened ? "[&_pre]:overflow-hidden" : "[&_pre]:overflow-auto]",
            )}
          >
            {children}
          </div>
        </Collapsible.Content>
        <div
          className={cn(
            "absolute flex items-center justify-center rounded-lg bg-gradient-to-b from-neutral-700/30 to-neutral-950/90 p-2",
            isOpened
              ? "inset-x-0 bottom-0 h-12"
              : ["inset-0", hasTitle && "top-[36px]"],
          )}
        >
          <Collapsible.Trigger asChild>
            <Button variant="secondary" size="sm">
              {isOpened ? "Collapse" : expandButtonTitle}
            </Button>
          </Collapsible.Trigger>
        </div>
      </div>
    </Collapsible.Root>
  )
}
