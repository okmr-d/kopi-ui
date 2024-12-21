"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Menu,
  MenuPortal,
  MenuCheckboxItem,
  MenuPopup,
  MenuGroupLabel,
  MenuSeparator,
  MenuTrigger,
  MenuPositioner,
  MenuGroup,
} from "@/components/ui/menu"

export default function MenuCheckboxes() {
  const [showStatusBar, setShowStatusBar] = React.useState(true)
  const [showActivityBar, setShowActivityBar] = React.useState(false)
  const [showPanel, setShowPanel] = React.useState(false)

  return (
    <Menu>
      <MenuTrigger
        render={(props) => (
          <Button variant="outline" {...props}>
            Open
          </Button>
        )}
      />
      <MenuPortal>
        <MenuPositioner>
          <MenuPopup className="w-56">
            <MenuGroup>
              <MenuGroupLabel>Appearance</MenuGroupLabel>
              <MenuSeparator />
              <MenuCheckboxItem
                checked={showStatusBar}
                onCheckedChange={setShowStatusBar}
              >
                Status Bar
              </MenuCheckboxItem>
              <MenuCheckboxItem
                checked={showActivityBar}
                onCheckedChange={setShowActivityBar}
                disabled
              >
                Activity Bar
              </MenuCheckboxItem>
              <MenuCheckboxItem
                checked={showPanel}
                onCheckedChange={setShowPanel}
              >
                Panel
              </MenuCheckboxItem>
            </MenuGroup>
          </MenuPopup>
        </MenuPositioner>
      </MenuPortal>
    </Menu>
  )
}
