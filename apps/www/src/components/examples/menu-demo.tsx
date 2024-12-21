import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Menu,
  MenuPositioner,
  MenuPopup,
  MenuGroup,
  MenuItem,
  MenuGroupLabel,
  MenuPortal,
  MenuSeparator,
  MenuShortcut,
  MenuSubmenuTrigger,
  MenuTrigger,
} from "@/components/ui/menu"

export default function MenuDemo() {
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
              <MenuGroupLabel>My Account</MenuGroupLabel>
              <MenuItem>
                <User />
                <span>Profile</span>
                <MenuShortcut>⇧⌘P</MenuShortcut>
              </MenuItem>
              <MenuItem>
                <CreditCard />
                <span>Billing</span>
                <MenuShortcut>⌘B</MenuShortcut>
              </MenuItem>
              <MenuItem>
                <Settings />
                <span>Settings</span>
                <MenuShortcut>⌘S</MenuShortcut>
              </MenuItem>
              <MenuItem>
                <Keyboard />
                <span>Keyboard shortcuts</span>
                <MenuShortcut>⌘K</MenuShortcut>
              </MenuItem>
            </MenuGroup>
            <MenuSeparator />
            <MenuGroup>
              <MenuGroupLabel>My Team</MenuGroupLabel>
              <MenuItem>
                <Users />
                <span>Team</span>
              </MenuItem>
              <Menu>
                <MenuSubmenuTrigger>
                  <UserPlus />
                  <span>Invite users</span>
                </MenuSubmenuTrigger>
                <MenuPortal>
                  <MenuPositioner sideOffset={0}>
                    <MenuPopup>
                      <MenuItem>
                        <Mail />
                        <span>Email</span>
                      </MenuItem>
                      <MenuItem>
                        <MessageSquare />
                        <span>Message</span>
                      </MenuItem>
                      <MenuSeparator />
                      <MenuItem>
                        <PlusCircle />
                        <span>More...</span>
                      </MenuItem>
                    </MenuPopup>
                  </MenuPositioner>
                </MenuPortal>
              </Menu>
              <MenuItem>
                <Plus />
                <span>New Team</span>
                <MenuShortcut>⌘+T</MenuShortcut>
              </MenuItem>
            </MenuGroup>
            <MenuSeparator />
            <MenuItem>
              <Github />
              <span>GitHub</span>
            </MenuItem>
            <MenuItem>
              <LifeBuoy />
              <span>Support</span>
            </MenuItem>
            <MenuItem disabled>
              <Cloud />
              <span>API</span>
            </MenuItem>
            <MenuSeparator />
            <MenuItem>
              <LogOut />
              <span>Log out</span>
              <MenuShortcut>⇧⌘Q</MenuShortcut>
            </MenuItem>
          </MenuPopup>
        </MenuPositioner>
      </MenuPortal>
    </Menu>
  )
}
