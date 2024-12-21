"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Menu,
  MenuPopup,
  MenuGroup,
  MenuGroupLabel,
  MenuRadioGroup,
  MenuRadioItem,
  MenuSeparator,
  MenuTrigger,
  MenuPositioner,
  MenuPortal,
} from "@/components/ui/menu"

export default function MenuRadioGroupDemo() {
  const [position, setPosition] = React.useState("bottom")

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
              <MenuGroupLabel>Panel Position</MenuGroupLabel>
              <MenuSeparator />
              <MenuRadioGroup value={position} onValueChange={setPosition}>
                <MenuRadioItem value="top">Top</MenuRadioItem>
                <MenuRadioItem value="bottom">Bottom</MenuRadioItem>
                <MenuRadioItem value="right">Right</MenuRadioItem>
              </MenuRadioGroup>
            </MenuGroup>
          </MenuPopup>
        </MenuPositioner>
      </MenuPortal>
    </Menu>
  )
}
