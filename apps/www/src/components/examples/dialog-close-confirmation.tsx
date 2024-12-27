import * as React from "react"

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
import {
  AlertDialog,
  AlertDialogClose,
  AlertDialogDescription,
  AlertDialogPopup,
  AlertDialogPortal,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"

export default function DialogCloseConfirmation() {
  const [dialogOpen, setDialogOpen] = React.useState(false)
  const [confirmationOpen, setConfirmationOpen] = React.useState(false)
  const [inputValue, setInputValue] = React.useState("")

  return (
    <Dialog
      open={dialogOpen}
      onOpenChange={(open) => {
        // Show the close confirmation if there’s text in the textarea
        if (!open && inputValue) {
          setConfirmationOpen(true)
        } else {
          // Reset the text area value
          setInputValue("")
          // Open or close the dialog normally
          setDialogOpen(open)
        }
      }}
    >
      <DialogTrigger className={buttonVariants({ variant: "outline" })}>
        Change Name
      </DialogTrigger>
      <DialogPortal>
        <DialogBackdrop />
        <DialogPopup>
          <DialogHeader>
            <DialogTitle>Change your name</DialogTitle>
            <DialogDescription>
              Make changes to your name and cancel to see the confirmation
              dialog.
            </DialogDescription>
          </DialogHeader>
          <form
            className="grid gap-4"
            onSubmit={(event) => {
              event.preventDefault()
              // Close the dialog when submitting
              setDialogOpen(false)
            }}
          >
            <div className="grid gap-1.5">
              <Label>Your name</Label>
              <Input
                required
                placeholder="Your name"
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
              />
            </div>
            <DialogFooter>
              <DialogClose className={buttonVariants({ variant: "secondary" })}>
                Cancel
              </DialogClose>
              <Button type="submit">Save</Button>
            </DialogFooter>
          </form>
        </DialogPopup>
      </DialogPortal>

      {/* Confirmation dialog */}
      <AlertDialog open={confirmationOpen} onOpenChange={setConfirmationOpen}>
        <AlertDialogPortal>
          <AlertDialogPopup>
            <AlertDialogTitle>Discard changes?</AlertDialogTitle>
            <AlertDialogDescription>
              Your changes will be lost if you don&apos;t save them.
            </AlertDialogDescription>
            <div className="flex items-center justify-end gap-4">
              <AlertDialogClose
                className={buttonVariants({ variant: "secondary" })}
              >
                Go back
              </AlertDialogClose>
              <Button
                type="button"
                variant="destructive"
                onClick={() => {
                  setConfirmationOpen(false)
                  setDialogOpen(false)
                }}
              >
                Discard
              </Button>
            </div>
          </AlertDialogPopup>
        </AlertDialogPortal>
      </AlertDialog>
    </Dialog>
  )
}
