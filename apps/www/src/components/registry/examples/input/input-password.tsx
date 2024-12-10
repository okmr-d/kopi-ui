"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { EyeIcon, EyeOffIcon } from "lucide-react"
import { useState } from "react"

export default function InputDemo() {
  const [isVisible, setIsVisible] = useState<boolean>(false)

  return (
    <div className="space-y-2 w-full max-w-xs">
      <Label htmlFor="input-password">Show/hide password input</Label>
      <div className="relative">
        <Input
          id="input-password"
          type={isVisible ? "text" : "password"}
          placeholder={isVisible ? "Password" : "●●●●●●●●"}
          className="pe-9"
        />
        <button
          className="absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-lg text-muted-foreground/80 hover:text-foreground focus:z-10 outline-none border border-transparent focus-visible:border-ring focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
          type="button"
          onClick={() => setIsVisible((prevState) => !prevState)}
          aria-label={isVisible ? "Hide password" : "Show password"}
          aria-pressed={isVisible}
          aria-controls="password"
        >
          {isVisible ? (
            <EyeOffIcon size={16} aria-hidden="true" />
          ) : (
            <EyeIcon size={16} aria-hidden="true" />
          )}
        </button>
      </div>
    </div>
  )
}
