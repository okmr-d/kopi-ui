import { FileInput } from "@/components/ui/file-input"

export default function FileInputDemo() {
  return (
    <div className="grid w-full max-w-xs items-center gap-4">
      <FileInput variant="outline" disabled />
      <FileInput variant="filled" disabled />
    </div>
  )
}
