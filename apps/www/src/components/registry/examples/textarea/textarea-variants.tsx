import { Textarea } from "@/components/ui/textarea"

export default function TextareaDemo() {
  return (
    <div className="grid w-full max-w-xs gap-4">
      <Textarea placeholder="Outline (Default)" variant="outline" />
      <Textarea placeholder="Filled" variant="filled" />
    </div>
  )
}
