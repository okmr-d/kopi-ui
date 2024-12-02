"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { CodeBlockWrapper } from "@/components/code-block-wrapper"

interface ComponentSourceProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string
}

export function ComponentSource({
  children,
  className,
  ...props
}: ComponentSourceProps) {
  return (
    <CodeBlockWrapper
      expandButtonTitle="Expand"
      className={cn("mb-6 overflow-hidden rounded-lg", className)}
      hasTitle={!!props.title}
    >
      {children}
    </CodeBlockWrapper>
  )
}
