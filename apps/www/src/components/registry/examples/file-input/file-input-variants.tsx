import { FileInput } from "@/components/ui/file-input"

export default function FileInputDemo() {
  return (
    <div className="grid w-full max-w-xs gap-4">
      <FileInput placeholder="Outline (Default)" variant="outline" />
      <FileInput placeholder="Filled" variant="filled" />
    </div>
  )
}
