// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import * as React from "react"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Index: Record<string, any> = {
  input: {
    name: "input",
    files: [
      {
        fileName: "input",
        path: "src/components/ui/input.tsx",
      },
    ],
    component: React.lazy(() => import("@/components/ui/input")),
  },
  "input-default": {
    name: "input-default",
    files: [
      {
        path: "src/components/registry/examples/input/input-default.tsx",
      },
    ],
    component: React.lazy(
      () => import("@/components/registry/examples/input/input-default"),
    ),
  },
  "input-error": {
    name: "input-error",
    files: [
      {
        path: "src/components/registry/examples/input/input-error.tsx",
      },
    ],
    component: React.lazy(
      () => import("@/components/registry/examples/input/input-error"),
    ),
  },
  "input-disabled": {
    name: "input-disabled",
    files: [
      {
        path: "src/components/registry/examples/input/input-disabled.tsx",
      },
    ],
    component: React.lazy(
      () => import("@/components/registry/examples/input/input-disabled"),
    ),
  },
  "input-variants": {
    name: "input-variants",
    files: [
      {
        path: "src/components/registry/examples/input/input-variants.tsx",
      },
    ],
    component: React.lazy(
      () => import("@/components/registry/examples/input/input-variants"),
    ),
  },
  "input-sizes": {
    name: "input-sizes",
    files: [
      {
        path: "src/components/registry/examples/input/input-sizes.tsx",
      },
    ],
    component: React.lazy(
      () => import("@/components/registry/examples/input/input-sizes"),
    ),
  },
  "file-input": {
    name: "file-input",
    files: [
      {
        fileName: "file-input",
        path: "src/components/ui/file-input.tsx",
      },
    ],
    component: React.lazy(() => import("@/components/ui/file-input")),
  },
  "file-input-default": {
    name: "file-input-default",
    files: [
      {
        path: "src/components/registry/examples/file-input/file-input-default.tsx",
      },
    ],
    component: React.lazy(
      () =>
        import("@/components/registry/examples/file-input/file-input-default"),
    ),
  },
  "file-input-error": {
    name: "file-input-error",
    files: [
      {
        path: "src/components/registry/examples/file-input/file-input-error.tsx",
      },
    ],
    component: React.lazy(
      () =>
        import("@/components/registry/examples/file-input/file-input-error"),
    ),
  },
  "file-input-disabled": {
    name: "file-input-disabled",
    files: [
      {
        path: "src/components/registry/examples/file-input/file-input-disabled.tsx",
      },
    ],
    component: React.lazy(
      () =>
        import("@/components/registry/examples/file-input/file-input-disabled"),
    ),
  },
  "file-input-variants": {
    name: "file-input-variants",
    files: [
      {
        path: "src/components/registry/examples/file-input/file-input-variants.tsx",
      },
    ],
    component: React.lazy(
      () =>
        import("@/components/registry/examples/file-input/file-input-variants"),
    ),
  },
  "file-input-sizes": {
    name: "file-input-sizes",
    files: [
      {
        path: "src/components/registry/examples/file-input/file-input-sizes.tsx",
      },
    ],
    component: React.lazy(
      () =>
        import("@/components/registry/examples/file-input/file-input-sizes"),
    ),
  },
  "native-select": {
    name: "native-select",
    files: [
      {
        fileName: "native-select",
        path: "src/components/ui/native-select.tsx",
      },
    ],
    component: React.lazy(() => import("@/components/ui/native-select")),
  },
  "native-select-default": {
    name: "native-select-default",
    files: [
      {
        path: "src/components/registry/examples/native-select/native-select-default.tsx",
      },
    ],
    component: React.lazy(
      () =>
        import(
          "@/components/registry/examples/native-select/native-select-default"
        ),
    ),
  },
  "native-select-placeholder": {
    name: "native-select-placeholder",
    files: [
      {
        path: "src/components/registry/examples/native-select/native-select-placeholder.tsx",
      },
    ],
    component: React.lazy(
      () =>
        import(
          "@/components/registry/examples/native-select/native-select-placeholder"
        ),
    ),
  },
  "native-select-auto-width": {
    name: "native-select-auto-width",
    files: [
      {
        path: "src/components/registry/examples/native-select/native-select-auto-width.tsx",
      },
    ],
    component: React.lazy(
      () =>
        import(
          "@/components/registry/examples/native-select/native-select-auto-width"
        ),
    ),
  },
  "native-select-error": {
    name: "native-select-error",
    files: [
      {
        path: "src/components/registry/examples/native-select/native-select-error.tsx",
      },
    ],
    component: React.lazy(
      () =>
        import(
          "@/components/registry/examples/native-select/native-select-error"
        ),
    ),
  },
  "native-select-disabled": {
    name: "native-select-disabled",
    files: [
      {
        path: "src/components/registry/examples/native-select/native-select-disabled.tsx",
      },
    ],
    component: React.lazy(
      () =>
        import(
          "@/components/registry/examples/native-select/native-select-disabled"
        ),
    ),
  },
  "native-select-variants": {
    name: "native-select-variants",
    files: [
      {
        path: "src/components/registry/examples/native-select/native-select-variants.tsx",
      },
    ],
    component: React.lazy(
      () =>
        import(
          "@/components/registry/examples/native-select/native-select-variants"
        ),
    ),
  },
  "native-select-sizes": {
    name: "native-select-sizes",
    files: [
      {
        path: "src/components/registry/examples/native-select/native-select-sizes.tsx",
      },
    ],
    component: React.lazy(
      () =>
        import(
          "@/components/registry/examples/native-select/native-select-sizes"
        ),
    ),
  },
  "native-select-with-icon": {
    name: "native-select-with-icon",
    files: [
      {
        path: "src/components/registry/examples/native-select/native-select-with-icon.tsx",
      },
    ],
    component: React.lazy(
      () =>
        import(
          "@/components/registry/examples/native-select/native-select-with-icon"
        ),
    ),
  },
  "native-select-multiple": {
    name: "native-select-multiple",
    files: [
      {
        path: "src/components/registry/examples/native-select/native-select-multiple.tsx",
      },
    ],
    component: React.lazy(
      () =>
        import(
          "@/components/registry/examples/native-select/native-select-multiple"
        ),
    ),
  },
  checkbox: {
    name: "checkbox",
    files: [
      {
        fileName: "checkbox",
        path: "src/components/ui/checkbox.tsx",
      },
    ],
    component: React.lazy(() => import("@/components/ui/checkbox")),
  },
  "checkbox-default": {
    name: "checkbox-default",
    files: [
      {
        path: "src/components/registry/examples/checkbox/checkbox-default.tsx",
      },
    ],
    component: React.lazy(
      () => import("@/components/registry/examples/checkbox/checkbox-default"),
    ),
  },
  "checkbox-error": {
    name: "checkbox-error",
    files: [
      {
        path: "src/components/registry/examples/checkbox/checkbox-error.tsx",
      },
    ],
    component: React.lazy(
      () => import("@/components/registry/examples/checkbox/checkbox-error"),
    ),
  },
  "checkbox-disabled": {
    name: "checkbox-disabled",
    files: [
      {
        path: "src/components/registry/examples/checkbox/checkbox-disabled.tsx",
      },
    ],
    component: React.lazy(
      () => import("@/components/registry/examples/checkbox/checkbox-disabled"),
    ),
  },
  "checkbox-variants": {
    name: "checkbox-variants",
    files: [
      {
        path: "src/components/registry/examples/checkbox/checkbox-variants.tsx",
      },
    ],
    component: React.lazy(
      () => import("@/components/registry/examples/checkbox/checkbox-variants"),
    ),
  },
  "checkbox-sizes": {
    name: "checkbox-sizes",
    files: [
      {
        path: "src/components/registry/examples/checkbox/checkbox-sizes.tsx",
      },
    ],
    component: React.lazy(
      () => import("@/components/registry/examples/checkbox/checkbox-sizes"),
    ),
  },
  "checkbox-indeterminate": {
    name: "checkbox-indeterminate",
    files: [
      {
        path: "src/components/registry/examples/checkbox/checkbox-indeterminate.tsx",
      },
    ],
    component: React.lazy(
      () =>
        import(
          "@/components/registry/examples/checkbox/checkbox-indeterminate"
        ),
    ),
  },
  "checkbox-card": {
    name: "checkbox-card",
    files: [
      {
        path: "src/components/registry/examples/checkbox/checkbox-card.tsx",
      },
    ],
    component: React.lazy(
      () => import("@/components/registry/examples/checkbox/checkbox-card"),
    ),
  },
  label: {
    name: "label",
    files: [
      {
        fileName: "label",
        path: "src/components/ui/label.tsx",
      },
    ],
    component: React.lazy(() => import("@/components/ui/label")),
  },
  "label-default": {
    name: "label-default",
    files: [
      {
        path: "src/components/registry/examples/label/label-default.tsx",
      },
    ],
    component: React.lazy(
      () => import("@/components/registry/examples/label/label-default"),
    ),
  },
  "radio-group": {
    name: "radio-group",
    files: [
      {
        fileName: "radio-group",
        path: "src/components/ui/radio-group.tsx",
      },
    ],
    component: React.lazy(() => import("@/components/ui/radio-group")),
  },
  "radio-group-default": {
    name: "radio-group-default",
    files: [
      {
        path: "src/components/registry/examples/radio-group/radio-group-default.tsx",
      },
    ],
    component: React.lazy(
      () =>
        import(
          "@/components/registry/examples/radio-group/radio-group-default"
        ),
    ),
  },
  "radio-group-disabled": {
    name: "radio-group-disabled",
    files: [
      {
        path: "src/components/registry/examples/radio-group/radio-group-disabled.tsx",
      },
    ],
    component: React.lazy(
      () =>
        import(
          "@/components/registry/examples/radio-group/radio-group-disabled"
        ),
    ),
  },
  "radio-group-variants": {
    name: "radio-group-variants",
    files: [
      {
        path: "src/components/registry/examples/radio-group/radio-group-variants.tsx",
      },
    ],
    component: React.lazy(
      () =>
        import(
          "@/components/registry/examples/radio-group/radio-group-variants"
        ),
    ),
  },
  "radio-group-sizes": {
    name: "radio-group-sizes",
    files: [
      {
        path: "src/components/registry/examples/radio-group/radio-group-sizes.tsx",
      },
    ],
    component: React.lazy(
      () =>
        import("@/components/registry/examples/radio-group/radio-group-sizes"),
    ),
  },
  "radio-group-card": {
    name: "radio-group-card",
    files: [
      {
        path: "src/components/registry/examples/radio-group/radio-group-card.tsx",
      },
    ],
    component: React.lazy(
      () =>
        import("@/components/registry/examples/radio-group/radio-group-card"),
    ),
  },
}
