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

export default function DialogNested() {
  return (
    <Dialog>
      <DialogTrigger className={buttonVariants({ variant: "outline" })}>
        Open Dialog
      </DialogTrigger>
      <DialogPortal>
        <DialogBackdrop />
        <DialogPopup>
          <DialogHeader>
            <DialogTitle>Dialog</DialogTitle>
            <DialogDescription>Description</DialogDescription>
          </DialogHeader>
          <DialogFooter>
            {/* Nested Dialog */}
            <Dialog>
              <DialogTrigger
                className={buttonVariants({ variant: "secondary" })}
              >
                Open Nested Dialog
              </DialogTrigger>
              <DialogPortal>
                <DialogPopup>
                  <DialogHeader>
                    <DialogTitle>Nested Dialog</DialogTitle>
                    <DialogDescription>
                      You can nest dialogs to create complex workflows.
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter>
                    <DialogClose
                      className={buttonVariants({ variant: "outline" })}
                    >
                      Close
                    </DialogClose>
                  </DialogFooter>
                </DialogPopup>
              </DialogPortal>
            </Dialog>
            <DialogClose className={buttonVariants({ variant: "outline" })}>
              Close
            </DialogClose>
          </DialogFooter>
        </DialogPopup>
      </DialogPortal>
    </Dialog>
  )
}
