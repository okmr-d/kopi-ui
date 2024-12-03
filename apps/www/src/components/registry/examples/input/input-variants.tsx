import { Input } from "@/components/ui/input"

export default function InputDemo() {
  return (
    <div className="grid w-full max-w-xs gap-4">
      <Input placeholder="Outline (Default)" variant="outline" />
      <Input placeholder="Filled" variant="filled" />
    </div>
  )
}
