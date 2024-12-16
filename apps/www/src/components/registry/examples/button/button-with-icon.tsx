import { Button } from "@/components/ui/button"
import { SendIcon } from "lucide-react"

export default function ButtonDemo() {
  return (
    <Button>
      <SendIcon className="w-4 h-4" />
      <span className="ml-2">Send</span>
    </Button>
  )
}
