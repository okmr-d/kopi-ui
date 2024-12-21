import { ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function ButtonIcon() {
  return (
    <Button variant="outline" size="icon-md">
      <ChevronRight className="h-4 w-4" />
    </Button>
  )
}