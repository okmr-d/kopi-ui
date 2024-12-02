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
        path: "src/components/registry/ui/input.tsx",
      },
    ],
    component: React.lazy(() => import("@/components/registry/ui/input")),
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
}
