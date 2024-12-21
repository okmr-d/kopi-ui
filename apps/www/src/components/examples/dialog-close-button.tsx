import { Copy } from "lucide-react"

import { Button, buttonVariants } from "@/components/ui/button"
import {
  Dialog,
  DialogBackdrop,
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogPopup,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function DialogCloseButton() {
  return (
    <Dialog>
      <DialogTrigger className={buttonVariants({ variant: "outline" })}>
        Share
      </DialogTrigger>
      <DialogPortal>
        <DialogBackdrop />
        <DialogPopup className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Share link</DialogTitle>
            <DialogDescription>
              Anyone who has this link will be able to view this.
            </DialogDescription>
          </DialogHeader>
          <div className="flex items-center space-x-2">
            <div className="grid flex-1 gap-2">
              <Label htmlFor="link" className="sr-only">
                Link
              </Label>
              <Input
                id="link"
                defaultValue="https://ui.shadcn.com/docs/installation"
                readOnly
              />
            </div>
            <Button type="submit">
              <Copy className="w-4 h-4" />
              <span>Copy</span>
            </Button>
          </div>
          <DialogFooter className="sm:justify-start">
            <DialogClose
              type="button"
              className={buttonVariants({ variant: "secondary" })}
            >
              Close
            </DialogClose>
          </DialogFooter>
        </DialogPopup>
      </DialogPortal>
    </Dialog>
  )
}
