import { Input } from "@/components/ui/input"

export default function InputDemo() {
  return (
    <div className="grid w-full max-w-xs items-center gap-4">
      <Input placeholder="Extra Small" size="xs" />
      <Input placeholder="Small" size="sm" />
      <Input placeholder="Medium (Default)" size="md" />
      <Input placeholder="Large" size="lg" />
    </div>
  )
}
