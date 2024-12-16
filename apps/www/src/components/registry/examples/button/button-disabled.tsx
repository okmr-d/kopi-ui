import { Button } from "@/components/ui/button"
import { Loader2Icon } from "lucide-react"

export default function ButtonDemo() {
  return (
    <div className="grid gap-4">
      <div>
        <Button disabled>Disabled</Button>
      </div>
      <div>
        <Button disabled>
          <Loader2Icon className="w-4 h-4 animate-spin" />
          <span className="ml-2">Loading</span>
        </Button>
      </div>
    </div>
  )
}
