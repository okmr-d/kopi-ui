import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

export default function LabelDemo() {
  return (
    <div className="space-y-1">
      <Label htmlFor="email">Your email address</Label>
      <Input id="email" placeholder="Email" />
    </div>
  )
}
