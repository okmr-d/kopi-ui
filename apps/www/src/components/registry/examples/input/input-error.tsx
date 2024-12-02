import { Input } from "@/components/registry/ui/input"

export default function InputDemo() {
  return (
    <Input
      type="email"
      placeholder="Email"
      defaultValue="invalid@email.com"
      data-invalid
    />
  )
}
