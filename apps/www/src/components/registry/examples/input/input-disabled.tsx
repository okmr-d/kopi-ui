import { Input } from "@/components/ui/input"

export default function InputDemo() {
  return (
    <div className="grid w-full max-w-xs gap-4">
      <Input placeholder="Disabled" variant="outline" disabled />
      <Input placeholder="Disabled" variant="filled" disabled />
    </div>
  )
}
