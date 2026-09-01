import { ArrowDown, Check } from 'lucide-react';
import { CheckoutButton } from '@/src/components/CheckoutButton';

type FinalCtaProps = {
  checkoutUrl: string | null;
  formattedPrice: string;
};

export function FinalCta({ checkoutUrl, formattedPrice }: FinalCtaProps) {
  return (
    <section className="bg-[#eaf1fb] px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto grid w-full max-w-[980px] overflow-hidden rounded-[30px] bg-[#002870] shadow-[0_30px_80px_rgba(0,40,112,0.18)] lg:grid-cols-[1fr_0.72fr]">
        <div className="p-6 text-white sm:p-9 lg:p-11">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-[10px] font-black tracking-[0.12em] text-[#ffb27b]"><ArrowDown className="size-3.5" /> PRÓXIMO PASSO</span>
          <h2 className="mt-5 max-w-[15ch] text-[clamp(2rem,5vw,3.3rem)] font-black leading-[1.02] tracking-[-0.05em]">Leve produtividade para a sua pintura.</h2>
          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/72">
            <span className="flex items-center gap-1.5"><Check className="size-4 text-[#ff9b55]" /> 1000 W</span>
            <span className="flex items-center gap-1.5"><Check className="size-4 text-[#ff9b55]" /> 214 bar</span>
            <span className="flex items-center gap-1.5"><Check className="size-4 text-[#ff9b55]" /> Mangueira de 15 m</span>
          </div>
        </div>
        <div className="flex flex-col justify-center bg-white p-6 sm:p-9">
          <p className="text-xs font-black uppercase tracking-[0.12em] text-[#ff6b00]">Preço promocional</p>
          <p className="mt-2 text-5xl font-black tracking-[-0.06em] text-[#002870]">{formattedPrice}</p>
          <p className="mt-2 text-sm leading-5 text-[#647389]">Sem preço anterior ou desconto percentual fictício.</p>
          <div className="mt-6">
            <CheckoutButton checkoutUrl={checkoutUrl} />
          </div>
        </div>
      </div>
    </section>
  );
}
