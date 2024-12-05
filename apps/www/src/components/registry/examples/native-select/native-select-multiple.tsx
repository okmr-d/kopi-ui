import { NativeSelect } from "@/components/ui/native-select"

export default function NativeSelectDemo() {
  return (
    <div className="w-full max-w-xs">
      <NativeSelect multiple>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
        <option value="4">Option 4</option>
        <option value="5">Option 5</option>
        <option value="6">Option 6</option>
        <option value="7">Option 7</option>
        <option value="8">Option 8</option>
        <option value="9">Option 9</option>
        <option value="10">Option 10</option>
      </NativeSelect>
    </div>
  )
}
