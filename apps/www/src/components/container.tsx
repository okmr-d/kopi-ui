import { cn } from "@/lib/utils"

export const Container = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) => {
  return (
    <div
      {...props}
      className={cn(
        "mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8",
        className,
      )}
    />
  )
}
