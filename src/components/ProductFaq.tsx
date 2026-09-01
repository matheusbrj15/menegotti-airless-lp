'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import type { ProductFaq as ProductFaqItem } from '@/src/data/product';

export function ProductFaq({ items }: { items: ProductFaqItem[] }) {
  return (
    <section className="bg-white" id="faq">
      <div className="mx-auto grid w-full max-w-[1180px] gap-8 px-4 py-14 sm:px-6 sm:py-18 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16 lg:px-8 lg:py-20">
        <div>
          <p className="text-xs font-black tracking-[0.14em] text-[#ff6b00]">DÚVIDAS FREQUENTES</p>
          <h2 className="mt-3 text-[clamp(1.9rem,4vw,3rem)] font-black leading-tight tracking-[-0.045em] text-[#002870]">Informação direta antes de comprar.</h2>
          <p className="mt-4 max-w-[42ch] leading-7 text-[#647389]">
            Respostas baseadas na página e no manual técnico da fabricante, sem promessas comerciais inventadas.
          </p>
        </div>
        <Accordion className="gap-3">
          {items.map((item, index) => (
            <AccordionItem key={item.question} value={`faq-${index}`} className="rounded-[18px] border border-[#dbe4f0] bg-[#f8fafc] px-4 sm:px-5">
              <AccordionTrigger className="min-h-14 border-0 py-4 text-[15px] font-black text-[#002870] hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="pb-5 pr-6 text-sm leading-6 text-[#58677d]">
                <p>{item.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
