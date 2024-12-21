import { buttonVariants } from "@/components/ui/button"
import {
  Tooltip,
  TooltipArrow,
  TooltipPopup,
  TooltipPortal,
  TooltipPositioner,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export default function TooltipDemo() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger className={buttonVariants({ variant: "outline" })}>
          Hover
        </TooltipTrigger>
        <TooltipPortal>
          <TooltipPositioner sideOffset={8}>
            <TooltipPopup>
              <TooltipArrow />
              <p>Add to library</p>
            </TooltipPopup>
          </TooltipPositioner>
        </TooltipPortal>
      </Tooltip>
    </TooltipProvider>
  )
}
