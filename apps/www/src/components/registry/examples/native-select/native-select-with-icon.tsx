import { NativeSelect } from "@/components/ui/native-select"
import { UserIcon } from "lucide-react"

export default function NativeSelectDemo() {
  return (
    <div className="grid w-full max-w-xs gap-4">
      <div className="group relative">
        <NativeSelect size="xs" className="ps-7">
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </NativeSelect>
        <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center aspect-square text-muted-foreground group-has-[[disabled]]:opacity-50">
          <UserIcon size={12} aria-hidden="true" />
        </div>
      </div>
      <div className="group relative">
        <NativeSelect size="sm" className="ps-8">
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </NativeSelect>
        <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center aspect-square text-muted-foreground group-has-[[disabled]]:opacity-50">
          <UserIcon size={14} aria-hidden="true" />
        </div>
      </div>
      <div className="group relative">
        <NativeSelect size="md" className="ps-9">
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </NativeSelect>
        <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center aspect-square text-muted-foreground group-has-[[disabled]]:opacity-50">
          <UserIcon size={16} aria-hidden="true" />
        </div>
      </div>
      <div className="group relative">
        <NativeSelect size="lg" className="ps-10">
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </NativeSelect>
        <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center aspect-square text-muted-foreground group-has-[[disabled]]:opacity-50">
          <UserIcon size={18} aria-hidden="true" />
        </div>
      </div>
    </div>
  )
}
