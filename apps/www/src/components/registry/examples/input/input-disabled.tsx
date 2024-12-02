import { Input } from "@/components/registry/ui/input"

export default function InputDemo() {
  return (
    <div className="grid w-full max-w-xs items-center gap-4">
      <Input placeholder="Disabled" variant="outline" disabled />
      <Input placeholder="Disabled" variant="filled" disabled />
    </div>
  )
}
