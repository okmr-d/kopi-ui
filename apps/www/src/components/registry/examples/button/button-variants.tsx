import { Button } from "@/components/ui/button"

export default function ButtonDemo() {
  return (
    <div className="grid gap-4">
      <div>
        <Button variant="primary">Primary (Default)</Button>
      </div>
      <div>
        <Button variant="secondary">Secondary</Button>
      </div>
      <div>
        <Button variant="outline">Outline</Button>
      </div>
      <div>
        <Button variant="destructive">Destructive</Button>
      </div>
      <div>
        <Button variant="ghost">Ghost</Button>
      </div>
      <div>
        <Button variant="link">Link</Button>
      </div>
    </div>
  )
}
