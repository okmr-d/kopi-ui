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
}
