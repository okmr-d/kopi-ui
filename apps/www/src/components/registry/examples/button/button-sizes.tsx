import { Button } from "@/components/ui/button"

export default function ButtonDemo() {
  return (
    <div className="grid gap-4">
      <div>
        <Button size="sm">Small</Button>
      </div>
      <div>
        <Button size="md">Medium (Default)</Button>
      </div>
      <div>
        <Button size="lg">Large</Button>
      </div>
    </div>
  )
}
