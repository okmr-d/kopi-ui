import { Mail } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function ButtonWithIcon() {
  return (
    <Button>
      <Mail className="h-4 w-4" /> Login with Email
    </Button>
  )
}
