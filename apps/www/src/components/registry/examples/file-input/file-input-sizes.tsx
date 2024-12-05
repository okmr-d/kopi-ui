import { FileInput } from "@/components/ui/file-input"

export default function FileInputDemo() {
  return (
    <div className="grid w-full max-w-xs gap-4">
      <FileInput size="sm" />
      <FileInput size="md" />
      <FileInput size="lg" />
    </div>
  )
}
