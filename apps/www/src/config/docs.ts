import { MainNavItem, SidebarNavItem } from "@/types/nav"

export interface DocsConfig {
  mainNav: MainNavItem[]
  sidebarNav: SidebarNavItem[]
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Documentation",
      href: "/docs/installation",
    },
    {
      title: "Components",
      href: "/docs/components/input",
    },
  ],
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Installation",
          href: "/docs/installation",
          items: [],
        },
      ],
    },
    {
      title: "Components",
      items: [
        {
          title: "Checkbox",
          href: "/docs/components/checkbox",
          items: [],
        },
        {
          title: "File Input",
          href: "/docs/components/file-input",
          items: [],
        },
        {
          title: "Input",
          href: "/docs/components/input",
          items: [],
        },
        {
          title: "Label",
          href: "/docs/components/label",
          items: [],
        },
        {
          title: "Radio Group",
          href: "/docs/components/radio-group",
          items: [],
        },
        {
          title: "Select",
          href: "/docs/components/select",
          items: [],
        },
        {
          title: "Select (Native)",
          href: "/docs/components/native-select",
          items: [],
        },
        {
          title: "Switch",
          href: "/docs/components/switch",
          items: [],
        },
        {
          title: "Textarea",
          href: "/docs/components/textarea",
          items: [],
        },
      ],
    },
  ],
}
