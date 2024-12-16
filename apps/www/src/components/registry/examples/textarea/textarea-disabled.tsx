import { Textarea } from "@/components/ui/textarea"

export default function TextareaDemo() {
  return (
    <div className="grid w-full max-w-xs gap-4">
      <Textarea
        placeholder="Type your message here."
        variant="outline"
        disabled
      />
      <Textarea
        placeholder="Type your message here."
        variant="filled"
        disabled
      />
    </div>
  )
}
