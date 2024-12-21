import {
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function AccordionDemo() {
  return (
    <Accordion className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionPanel>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionPanel>
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionPanel>
          Yes. It's animated by default, but you can disable it if you prefer.
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  )
}
