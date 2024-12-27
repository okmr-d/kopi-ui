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
      href: "/docs/components/accordion",
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
          title: "Accordion",
          href: "/docs/components/accordion",
          items: [],
        },
        {
          title: "Alert Dialog",
          href: "/docs/components/alert-dialog",
          items: [],
        },
        {
          title: "Button",
          href: "/docs/components/button",
          items: [],
        },
        {
          title: "Checkbox",
          href: "/docs/components/checkbox",
          items: [],
        },
        {
          title: "Collapsible 🚧",
          href: "/docs/components/collapsible",
          items: [],
        },
        {
          title: "Dialog",
          href: "/docs/components/dialog",
          items: [],
        },
        {
          title: "Field 🚧",
          href: "/docs/components/field",
          items: [],
          label: "Coming Soon",
        },
        {
          title: "Fieldset 🚧",
          href: "/docs/components/fieldset",
          items: [],
          label: "Coming Soon",
        },
        {
          title: "Form 🚧",
          href: "/docs/components/form",
          items: [],
          label: "Coming Soon",
        },
        {
          title: "Input 🚧",
          href: "/docs/components/input",
          items: [],
        },
        {
          title: "Label",
          href: "/docs/components/label",
          items: [],
        },
        {
          title: "Menu 🚧",
          href: "/docs/components/menu",
          items: [],
        },
        {
          title: "Number Field 🚧",
          href: "/docs/components/number-field",
          items: [],
          label: "Coming Soon",
        },
        {
          title: "Popover 🚧",
          href: "/docs/components/popover",
          items: [],
        },
        {
          title: "Preview Card 🚧",
          href: "/docs/components/preview-card",
          items: [],
        },
        {
          title: "Progress 🚧",
          href: "/docs/components/progress",
          items: [],
        },
        {
          title: "Radio",
          href: "/docs/components/radio",
          items: [],
        },
        {
          title: "Scroll Area 🚧",
          href: "/docs/components/scroll-area",
          items: [],
        },
        {
          title: "Select 🚧",
          href: "/docs/components/select",
          items: [],
        },
        {
          title: "Separator",
          href: "/docs/components/separator",
          items: [],
        },
        {
          title: "Slider 🚧",
          href: "/docs/components/slider",
          items: [],
        },
        {
          title: "Switch 🚧",
          href: "/docs/components/switch",
          items: [],
        },
        {
          title: "Tabs 🚧",
          href: "/docs/components/tabs",
          items: [],
        },
        {
          title: "Toggle 🚧",
          href: "/docs/components/toggle",
          items: [],
        },
        {
          title: "Tooltip 🚧",
          href: "/docs/components/tooltip",
          items: [],
        },
      ],
    },
  ],
}
