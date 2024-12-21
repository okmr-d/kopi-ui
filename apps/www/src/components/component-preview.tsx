"use client"

import * as React from "react"
import Image from "next/image"
import { Index } from "@/__registry__"

import { cn } from "@/lib/utils"
import { CopyButton } from "@/components/copy-button"
import { Icons } from "@/components/icons"
import { Tabs, TabsPanel, TabsList, TabsTab } from "@/components/ui/tabs"

interface ComponentPreviewProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string
  extractClassname?: boolean
  extractedClassNames?: string
  align?: "center" | "start" | "end"
  description?: string
  hideCode?: boolean
  type?: "block" | "component" | "example"
}

export function ComponentPreview({
  name,
  type,
  children,
  className,
  extractClassname,
  extractedClassNames,
  align = "center",
  description,
  hideCode = false,
  ...props
}: ComponentPreviewProps) {
  const Codes = React.Children.toArray(children) as React.ReactElement[]
  const Code = Codes[0]

  const Preview = React.useMemo(() => {
    const Component = Index["default"][name]?.component

    if (!Component) {
      return (
        <p className="text-sm text-muted-foreground">
          Component{" "}
          <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
            {name}
          </code>{" "}
          not found in registry.
        </p>
      )
    }

    return <Component />
  }, [name])

  const codeString = React.useMemo(() => {
    if (
      typeof Code?.props["data-rehype-pretty-code-fragment"] !== "undefined"
    ) {
      const [Button] = React.Children.toArray(
        Code.props.children,
      ) as React.ReactElement[]
      return Button?.props?.value || Button?.props?.__rawString__ || null
    }
  }, [Code])

  if (type === "block") {
    return (
      <div className="relative aspect-[4/2.5] w-full overflow-hidden rounded-md border">
        <Image
          src={`/images/blocks/${name}.png`}
          alt={name}
          width={1440}
          height={900}
          className="absolute left-0 top-0 z-20 w-[970px] max-w-none bg-background dark:hidden sm:w-[1280px] md:hidden md:dark:hidden"
        />
        <Image
          src={`/images/blocks/${name}-dark.png`}
          alt={name}
          width={1440}
          height={900}
          className="absolute left-0 top-0 z-20 hidden w-[970px] max-w-none bg-background dark:block sm:w-[1280px] md:hidden md:dark:hidden"
        />
        <div className="absolute inset-0 hidden w-[1600px] bg-background md:block">
          <iframe src={`/blocks/new-york/${name}`} className="size-full" />
        </div>
      </div>
    )
  }

  return (
    <div
      className={cn("group relative my-4 flex flex-col space-y-2", className)}
      {...props}
    >
      <Tabs defaultValue="preview">
        {!hideCode && (
          <TabsList className="w-full justify-start rounded-none border-b border-border bg-transparent p-0">
            <TabsTab
              value="preview"
              className="relative rounded-none pb-2.5 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 data-[selected]:bg-transparent data-[selected]:shadow-none data-[selected]:after:bg-primary"
            >
              Preview
            </TabsTab>
            <TabsTab
              value="code"
              className="relative rounded-none pb-2.5 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 data-[selected]:bg-transparent data-[selected]:shadow-none data-[selected]:after:bg-primary"
            >
              Code
            </TabsTab>
          </TabsList>
        )}
        <TabsPanel value="preview" className="relative rounded-md border">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-2">
              <CopyButton
                value={codeString}
                variant="outline"
                className="h-7 w-7 text-foreground opacity-100 hover:bg-muted hover:text-foreground [&_svg]:h-3.5 [&_svg]:w-3.5"
              />
            </div>
          </div>
          <div
            className={cn(
              "preview flex min-h-[350px] w-full justify-center p-10",
              {
                "items-center": align === "center",
                "items-start": align === "start",
                "items-end": align === "end",
              },
            )}
          >
            <React.Suspense
              fallback={
                <div className="flex w-full items-center justify-center text-sm text-muted-foreground">
                  <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                  Loading...
                </div>
              }
            >
              {Preview}
            </React.Suspense>
          </div>
        </TabsPanel>
        <TabsPanel value="code" className="relative rounded-md border">
          <div className="flex flex-col space-y-4">
            <div className="w-full rounded-md [&_pre]:my-0 [&_pre]:max-h-[350px] [&_pre]:overflow-auto">
              {Code}
            </div>
          </div>
        </TabsPanel>
      </Tabs>
    </div>
  )
}
