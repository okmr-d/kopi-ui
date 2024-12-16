import { Button } from "@/components/ui/button"
import { ChevronRightIcon } from "lucide-react"

export default function ButtonDemo() {
  return (
    <div className="grid gap-4">
      <div>
        <Button variant="outline" size="icon-sm">
          <ChevronRightIcon className="w-3.5 h-3.5" />
        </Button>
      </div>
      <div>
        <Button variant="outline" size="icon">
          <ChevronRightIcon className="w-4 h-4" />
        </Button>
      </div>
      <div>
        <Button variant="outline" size="icon-lg">
          <ChevronRightIcon className="w-5 h-5" />
        </Button>
      </div>
    </div>
  )
}
