"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface QAItem {
  q: string;
  a: string;
}

interface GenreQAProps {
  items: QAItem[];
  accentColor?: string;
}

export default function GenreQA({ items, accentColor = "text-[#d4af37]" }: GenreQAProps) {
  return (
    <Accordion className="space-y-2">
      {items.map((item, i) => (
        <AccordionItem
          key={i}
          value={`item-${i}`}
          className="border border-white/10 rounded-xl bg-[#0f0f1a] px-5 data-[state=open]:border-white/20"
        >
          <AccordionTrigger className={`text-white font-medium hover:no-underline hover:${accentColor} text-left`}>
            <span className={`${accentColor} font-black mr-2 shrink-0`}>Q.</span>
            {item.q}
          </AccordionTrigger>
          <AccordionContent className="text-gray-300 text-sm leading-relaxed pt-1 pb-4">
            <span className="text-[#d4af37] font-black mr-2">A.</span>
            {item.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
