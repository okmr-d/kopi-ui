"use client"

import * as React from "react"
import { CheckIcon, CopyIcon } from "lucide-react"
import { NpmCommands } from "@/types/unist"

import { cn } from "@/lib/utils"
import { Button, ButtonProps } from "@/components/ui/button"
import {
  Menu,
  MenuPopup,
  MenuItem,
  MenuTrigger,
  MenuPortal,
  MenuPositioner,
} from "@/components/ui/menu"

interface CopyButtonProps extends ButtonProps {
  value: string
}

export async function copyToClipboardWithMeta(value: string) {
  navigator.clipboard.writeText(value)
}

export function CopyButton({
  value,
  className,
  variant = "ghost",
  ...props
}: CopyButtonProps) {
  const [hasCopied, setHasCopied] = React.useState(false)

  React.useEffect(() => {
    setTimeout(() => {
      setHasCopied(false)
    }, 2000)
  }, [hasCopied])

  return (
    <Button
      size="icon-sm"
      variant={variant}
      className={cn(
        "relative z-10 h-6 w-6 text-neutral-50 hover:bg-neutral-700 hover:text-neutral-50",
        className,
      )}
      onClick={() => {
        copyToClipboardWithMeta(value)
        setHasCopied(true)
      }}
      {...props}
    >
      <span className="sr-only">Copy</span>
      {hasCopied ? (
        <CheckIcon className="h-3 w-3" />
      ) : (
        <CopyIcon className="h-3 w-3" />
      )}
    </Button>
  )
}

export function CopyNpmCommandButton({
  commands,
  className,
}: {
  commands: Required<NpmCommands>
  className?: string
}) {
  const [hasCopied, setHasCopied] = React.useState(false)

  React.useEffect(() => {
    setTimeout(() => {
      setHasCopied(false)
    }, 2000)
  }, [hasCopied])

  const copyCommand = React.useCallback((value: string) => {
    copyToClipboardWithMeta(value)
    setHasCopied(true)
  }, [])

  return (
    <Menu>
      <MenuTrigger
        render={(props) => (
          <Button
            size="icon-sm"
            variant="ghost"
            className={cn(
              "relative z-10 h-6 w-6 text-neutral-50 hover:bg-neutral-700 hover:text-neutral-50",
              className,
            )}
            {...props}
          >
            {hasCopied ? (
              <CheckIcon className="h-3 w-3" />
            ) : (
              <CopyIcon className="h-3 w-3" />
            )}
            <span className="sr-only">Copy</span>
          </Button>
        )}
      />
      <MenuPortal>
        <MenuPositioner align="end">
          <MenuPopup>
            <MenuItem onClick={() => copyCommand(commands.__npmCommand__)}>
              npm
            </MenuItem>
            <MenuItem onClick={() => copyCommand(commands.__yarnCommand__)}>
              yarn
            </MenuItem>
            <MenuItem onClick={() => copyCommand(commands.__pnpmCommand__)}>
              pnpm
            </MenuItem>
            <MenuItem onClick={() => copyCommand(commands.__bunCommand__)}>
              bun
            </MenuItem>
          </MenuPopup>
        </MenuPositioner>
      </MenuPortal>
    </Menu>
  )
}
