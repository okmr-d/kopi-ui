import { NativeSelect } from "@/components/ui/native-select"

export default function NativeSelectDemo() {
  return (
    <div className="grid w-full max-w-xs gap-4">
      <NativeSelect variant="outline" disabled>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </NativeSelect>
      <NativeSelect variant="filled" disabled>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </NativeSelect>
    </div>
  )
}
