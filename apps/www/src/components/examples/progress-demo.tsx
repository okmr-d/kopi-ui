"use client"

import * as React from "react"

import {
  Progress,
  ProgressTrack,
  ProgressIndicator,
} from "@/components/ui/progress"

export default function ProgressDemo() {
  const [value, setValue] = React.useState(13)

  React.useEffect(() => {
    const timer = setTimeout(() => setValue(66), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <Progress value={value} className="w-[60%]">
      <ProgressTrack>
        <ProgressIndicator />
      </ProgressTrack>
    </Progress>
  )
}
