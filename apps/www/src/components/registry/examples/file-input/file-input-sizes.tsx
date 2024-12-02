import { FileInput } from "@/components/ui/file-input"

export default function FileInputDemo() {
  return (
    <div className="grid w-full max-w-xs items-center gap-4">
      <FileInput size="xs" />
      <FileInput size="sm" />
      <FileInput size="md" />
      <FileInput size="lg" />
    </div>
  )
}
