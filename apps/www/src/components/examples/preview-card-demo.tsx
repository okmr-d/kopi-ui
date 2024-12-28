import {
  PreviewCard,
  PreviewCardArrow,
  PreviewCardPopup,
  PreviewCardPortal,
  PreviewCardPositioner,
  PreviewCardTrigger,
} from "@/components/ui/preview-card"

export default function PreviewCardDemo() {
  return (
    <PreviewCard>
      <p className="max-w-64 text-balance text-base">
        The principles of good{" "}
        <PreviewCardTrigger
          className="text-blue-800 no-underline decoration-blue-800/60 decoration-1 underline-offset-2 outline-none hover:underline focus-visible:rounded-sm focus-visible:no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-800 data-[popup-open]:underline data-[popup-open]:focus-visible:no-underline"
          href="https://en.wikipedia.org/wiki/Typography"
        >
          typography
        </PreviewCardTrigger>{" "}
        remain into the digital age.
      </p>
      <PreviewCardPortal>
        <PreviewCardPositioner sideOffset={8}>
          <PreviewCardPopup className="flex flex-col gap-2">
            <PreviewCardArrow />
            <img
              width="448"
              height="300"
              className="block w-full rounded-sm"
              src="https://images.unsplash.com/photo-1619615391095-dfa29e1672ef?q=80&w=448&h=300"
              alt="Station Hofplein signage in Rotterdam, Netherlands"
            />
            <p className="text-pretty text-sm">
              <strong>Typography</strong> is the art and science of arranging
              type to make written language clear, visually appealing, and
              effective in communication.
            </p>
          </PreviewCardPopup>
        </PreviewCardPositioner>
      </PreviewCardPortal>
    </PreviewCard>
  )
}
