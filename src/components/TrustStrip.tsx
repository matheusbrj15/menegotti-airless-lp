import { BadgeCheck, FileCheck2, Gauge, ShieldCheck } from 'lucide-react';

const items = [
  { icon: Gauge, title: 'Desempenho profissional', detail: '1000 W • 214 bar' },
  { icon: BadgeCheck, title: 'Produto Menegotti', detail: 'Modelos 127 V e 220 V' },
  { icon: FileCheck2, title: 'Dados validados', detail: 'Ficha técnica oficial' },
  { icon: ShieldCheck, title: 'Compra responsável', detail: 'Sem redirecionamento falso' },
];

export function TrustStrip() {
  return (
    <section className="border-b border-[#dbe4f0] bg-[#f4f7fb]" aria-label="Diferenciais de confiança">
      <div className="mx-auto grid w-full max-w-[1180px] grid-cols-2 gap-px bg-[#dbe4f0] sm:grid-cols-4">
        {items.map(({ icon: Icon, title, detail }) => (
          <div key={title} className="flex min-h-24 items-center gap-3 bg-[#f4f7fb] px-4 py-5 sm:px-5">
            <span className="grid size-10 shrink-0 place-items-center rounded-2xl bg-white text-[#003b8f] shadow-sm">
              <Icon className="size-5" />
            </span>
            <span>
              <strong className="block text-xs font-black text-[#002870] sm:text-sm">{title}</strong>
              <span className="mt-0.5 block text-[10px] leading-4 text-[#647389] sm:text-xs">{detail}</span>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
