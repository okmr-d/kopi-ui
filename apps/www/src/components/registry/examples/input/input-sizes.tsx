import { Input } from "@/components/ui/input"

export default function InputDemo() {
  return (
    <div className="grid w-full max-w-xs gap-4">
      <Input placeholder="Small" size="sm" />
      <Input placeholder="Medium (Default)" size="md" />
      <Input placeholder="Large" size="lg" />
    </div>
  )
}
