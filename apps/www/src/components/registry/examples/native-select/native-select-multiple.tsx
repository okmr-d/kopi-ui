import { NativeSelect } from "@/components/ui/native-select"

export default function NativeSelectDemo() {
  return (
    <div className="w-full max-w-xs">
      <NativeSelect multiple>
        <option value="1" className="px-3 py-2">
          Option 1
        </option>
        <option value="2" className="px-3 py-2">
          Option 2
        </option>
        <option value="3" className="px-3 py-2">
          Option 3
        </option>
        <option value="4" className="px-3 py-2">
          Option 4
        </option>
        <option value="5" className="px-3 py-2">
          Option 5
        </option>
        <option value="6" className="px-3 py-2">
          Option 6
        </option>
        <option value="7" className="px-3 py-2">
          Option 7
        </option>
        <option value="8" className="px-3 py-2">
          Option 8
        </option>
        <option value="9" className="px-3 py-2">
          Option 9
        </option>
        <option value="10" className="px-3 py-2">
          Option 10
        </option>
      </NativeSelect>
    </div>
  )
}
