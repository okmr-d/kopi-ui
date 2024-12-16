import { Textarea } from "@/components/ui/textarea"

export default function TextareaDemo() {
  return (
    <div className="grid w-full max-w-xs gap-4">
      <Textarea placeholder="Small" size="sm" />
      <Textarea placeholder="Medium (Default)" size="md" />
      <Textarea placeholder="Large" size="lg" />
    </div>
  )
}
