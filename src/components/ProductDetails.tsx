import { Check, Gauge, Layers3, Paintbrush, Ruler } from 'lucide-react';
import type { Product } from '@/src/data/product';

const benefitIcons = [Gauge, Paintbrush, Layers3, Ruler];

export function ProductDetails({ product }: { product: Product }) {
  return (
    <>
      <section className="bg-[#002870] text-white">
        <div className="mx-auto grid w-full max-w-[1180px] items-center gap-8 px-4 py-14 sm:px-6 sm:py-18 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14 lg:px-8 lg:py-22">
          <div className="relative overflow-hidden rounded-[28px] bg-white p-3 shadow-[0_28px_80px_rgba(0,0,0,0.24)] sm:p-6">
            <div className="absolute left-5 top-5 z-10 rounded-full bg-[#ff6b00] px-3 py-1.5 text-[10px] font-black tracking-[0.12em] text-white">
              SISTEMA AIRLESS
            </div>
            <img
              src="/product/mma-pro-1000-lado.jpg"
              alt="Vista lateral da máquina Airless Menegotti MMA PRO 1000"
              className="aspect-[4/3] w-full object-contain mix-blend-multiply"
            />
          </div>
          <div>
            <p className="text-xs font-black tracking-[0.14em] text-[#ff9b55]">PRODUTIVIDADE COM CONTROLE</p>
            <h2 className="mt-3 max-w-[14ch] text-[clamp(2rem,5vw,3.5rem)] font-black leading-[1.02] tracking-[-0.05em]">
              Pressão para avançar. Precisão para finalizar.
            </h2>
            <p className="mt-5 max-w-[58ch] text-base leading-7 text-white/72 sm:text-lg">
              O sistema projeta a tinta em alta pressão, sem depender de ar comprimido. O resultado é uma aplicação ágil, com regulagem para diferentes materiais e projetos.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {product.benefits.map((benefit, index) => {
                const Icon = benefitIcons[index] ?? Check;
                return (
                  <article key={benefit.title} className="rounded-[20px] border border-white/12 bg-white/[0.07] p-4 backdrop-blur-sm">
                    <Icon className="mb-3 size-5 text-[#ff9b55]" />
                    <h3 className="text-sm font-black sm:text-base">{benefit.title}</h3>
                    <p className="mt-1.5 text-xs leading-5 text-white/65 sm:text-sm">{benefit.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid w-full max-w-[1180px] gap-10 px-4 py-14 sm:px-6 sm:py-18 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16 lg:px-8 lg:py-20">
          <div>
            <p className="text-xs font-black tracking-[0.14em] text-[#ff6b00]">ONDE ELA TRABALHA</p>
            <h2 className="mt-3 text-[clamp(1.8rem,4vw,3rem)] font-black leading-tight tracking-[-0.045em] text-[#002870]">
              Uma máquina, diferentes frentes de pintura.
            </h2>
            <p className="mt-4 max-w-[52ch] leading-7 text-[#58677d]">
              A MMA PRO 1000 foi projetada para aplicações profissionais em superfícies e estruturas variadas.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {product.applications.map((application) => (
                <span key={application} className="rounded-full border border-[#cddaea] bg-[#f4f7fb] px-4 py-2 text-sm font-bold text-[#003b8f]">
                  {application}
                </span>
              ))}
            </div>
            <div className="mt-8 rounded-[22px] border border-[#ffd7bb] bg-[#fff7f1] p-5">
              <h3 className="font-black text-[#8f3d00]">Materiais informados pela fabricante</h3>
              <p className="mt-2 text-sm leading-6 text-[#814b25]">
                Tintas acrílicas, látex, vernizes e PU. Verifique sempre a viscosidade e a diluição recomendadas para o material escolhido.
              </p>
            </div>
          </div>
          <div>
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-xs font-black tracking-[0.14em] text-[#ff6b00]">FICHA ESSENCIAL</p>
                <h2 className="mt-3 text-2xl font-black tracking-[-0.035em] text-[#002870] sm:text-3xl">O que realmente importa</h2>
              </div>
              <span className="hidden rounded-full bg-[#eaf1fb] px-3 py-1.5 text-xs font-black text-[#003b8f] sm:block">DADOS OFICIAIS</span>
            </div>
            <dl className="mt-6 overflow-hidden rounded-[24px] border border-[#dbe4f0] bg-[#f8fafc]">
              {product.specifications.map((specification) => (
                <div key={specification.label} className="grid grid-cols-[minmax(0,1fr)_auto] gap-4 border-b border-[#e4ebf4] px-4 py-3.5 last:border-b-0 sm:px-5">
                  <dt className="text-sm text-[#5a687b]">{specification.label}</dt>
                  <dd className="text-right text-sm font-black text-[#002870]">{specification.value}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-6 rounded-[22px] border border-[#dbe4f0] p-5">
              <h3 className="font-black text-[#002870]">O que acompanha</h3>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {product.kitContents.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-xs leading-5 text-[#5a687b] sm:text-sm">
                    <Check className="mt-0.5 size-4 shrink-0 text-[#12a83a]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
