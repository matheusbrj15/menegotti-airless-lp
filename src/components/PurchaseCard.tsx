'use client';

import {
  Heart,
  MessageCircle,
  MessagesSquare,
  Share2,
  ShoppingBag,
  Star,
  Zap,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import type { Product } from '@/src/data/product';

const currency = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

export function PurchaseCard({ product }: { product: Product }) {
  const [remainingSeconds, setRemainingSeconds] = useState(10 * 60);
  const hasOldPrice = product.oldPrice !== null && product.oldPrice > product.price;
  const discount = hasOldPrice
    ? Math.round(((product.oldPrice! - product.price) / product.oldPrice!) * 100)
    : null;
  const countdown = [
    String(Math.floor(remainingSeconds / 60)).padStart(2, '0'),
    String(remainingSeconds % 60).padStart(2, '0'),
  ];

  useEffect(() => {
    const deadline = Date.now() + 10 * 60 * 1000;
    const timer = window.setInterval(() => {
      const nextValue = Math.max(0, Math.ceil((deadline - Date.now()) / 1000));
      setRemainingSeconds(nextValue);

      if (nextValue === 0) {
        window.clearInterval(timer);
      }
    }, 250);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="flex min-w-0 flex-col justify-center">
      <div className="grid min-h-[104px] grid-cols-[minmax(0,1fr)_140px] bg-[#002870] text-white sm:grid-cols-[minmax(0,1fr)_170px]">
          <div className="flex min-w-0 flex-col justify-center px-3 py-3 sm:px-5">
            {hasOldPrice && (
              <div className="mb-1.5 flex items-center gap-2 text-[11px] font-bold text-white/75">
                <span className="line-through">De {currency.format(product.oldPrice!)}</span>
                <span className="rounded bg-[#ff6b00] px-1.5 py-0.5 text-white">{discount}% OFF</span>
              </div>
            )}
            <p className="text-[11px] font-bold uppercase tracking-[0.11em] text-white/70">Preço promocional</p>
            <p className="mt-0.5 whitespace-nowrap text-[clamp(2.25rem,10vw,3.35rem)] font-black leading-none tracking-[-0.055em]">
              {currency.format(product.price)}
            </p>
            <p className="mt-1.5 text-[11px] font-semibold text-white/82 sm:text-xs">
              à vista no Pix ou em até 3x no cartão
            </p>
          </div>

          <div className="flex flex-col items-end justify-center border-l border-white/12 px-2 py-3 text-right sm:px-4">
            <span className="inline-flex items-center gap-1 rounded-md bg-[#ff6b00] px-1.5 py-1 text-[8px] font-black leading-none tracking-[0.01em] text-white sm:px-2 sm:text-[10px]">
              <Zap className="size-3 fill-current" /> OFERTA RELÂMPAGO
            </span>
            <p className="mt-2 text-[9px] font-extrabold uppercase leading-tight text-white/72 sm:text-[10px]">
              Condição promocional
            </p>
            <span className="mt-1.5 text-[8px] font-bold text-white/70 sm:text-[9px]">TEMPO DA SESSÃO</span>
            <div
              className="mt-1 flex items-center gap-1"
              aria-label={`${countdown[0]} minutos e ${countdown[1]} segundos`}
            >
              {countdown.map((value, index) => (
                <span className="contents" key={index}>
                  {index > 0 && <span className="text-[10px] font-black text-[#ff8a38]">:</span>}
                  <span className="grid h-6 min-w-6 place-items-center rounded border border-[#ff6b00] bg-white/8 px-1 text-[10px] font-black">
                    {value}
                  </span>
                </span>
              ))}
            </div>
          </div>
      </div>

        <div className="bg-white px-3 py-3 sm:px-4 sm:py-4">
          <div className="flex items-start gap-2">
            <span className="mt-0.5 shrink-0 rounded bg-[#ff6b00] px-2 py-1 text-[10px] font-black leading-none text-white">
              INDICADO
            </span>
            <h1 className="text-[14px] font-black leading-[1.25] tracking-[-0.02em] text-[#002870] sm:text-base">
              {product.name}
            </h1>
          </div>

          <div className="mt-2.5 flex items-center justify-between gap-3">
            <div className="flex min-w-0 items-center gap-2 text-sm">
              <span className="whitespace-nowrap text-[16px] tracking-[-0.12em] text-[#ffb000]" aria-label="5 estrelas">★★★★★</span>
              <strong className="text-[#34445c]">4,9</strong>
              <span className="text-[#c4ceda]">|</span>
              <span className="whitespace-nowrap text-xs text-[#647389]">4,2 mil avaliações</span>
            </div>
            <div className="flex shrink-0 items-center gap-1 text-[#617087]">
              <button className="grid size-9 place-items-center rounded-full transition hover:bg-[#eaf1fb] hover:text-[#003b8f]" type="button" aria-label="Favoritar produto">
                <Heart className="size-5" />
              </button>
              <button className="grid size-9 place-items-center rounded-full transition hover:bg-[#eaf1fb] hover:text-[#003b8f]" type="button" aria-label="Compartilhar produto">
                <Share2 className="size-5" />
              </button>
              <button className="grid size-9 place-items-center rounded-full text-[#12a83a] transition hover:bg-[#e9f8ee]" type="button" aria-label="Falar pelo WhatsApp">
                <MessageCircle className="size-5" />
              </button>
            </div>
          </div>

          <div className="mt-3 rounded-[16px] border border-[#dbe4f0] bg-white p-3 shadow-[0_5px_16px_rgba(0,40,112,0.055)] sm:p-4">
            <div className="flex items-center gap-3">
              <span className="grid size-9 shrink-0 place-items-center overflow-hidden rounded-full border border-[#dbe4f0] bg-white p-0.5">
                <img
                  src="/brand/vitrine-mix-logo-card.png"
                  alt="Logo Vitrine Mix"
                  className="h-full w-full object-contain"
                />
              </span>
              <div>
                <p className="text-sm font-black leading-tight text-[#002870]">Vitrine Mix</p>
                <p className="mt-0.5 text-[11px] text-[#647389]">Loja Oficial</p>
              </div>
            </div>

            <div className="my-2.5 h-px bg-[#e2e9f2]" />

            <div className="grid grid-cols-3 divide-x divide-[#e2e9f2] text-center">
              <div className="min-w-0 px-1.5 sm:px-2">
                <Star className="mx-auto size-4 text-[#ff6b00]" />
                <strong className="mt-1.5 block text-xs font-black text-[#243650] sm:text-sm">4,9</strong>
                <span className="mt-0.5 block text-[9px] leading-tight text-[#7a8798] sm:text-[10px]">Avaliações de clientes</span>
              </div>
              <div className="min-w-0 px-1.5 sm:px-2">
                <ShoppingBag className="mx-auto size-4 text-[#003b8f]" />
                <strong className="mt-1.5 block text-[10px] font-black leading-tight text-[#243650] sm:text-xs">Pedidos enviados</strong>
                <span className="mt-0.5 block text-[9px] leading-tight text-[#7a8798] sm:text-[10px]">Clientes atendidos</span>
              </div>
              <div className="min-w-0 px-1.5 sm:px-2">
                <MessagesSquare className="mx-auto size-4 text-[#ff6b00]" />
                <strong className="mt-1.5 block text-[10px] font-black leading-tight text-[#243650] sm:text-xs">Resposta rápida</strong>
                <span className="mt-0.5 block text-[9px] leading-tight text-[#7a8798] sm:text-[10px]">Atendimento</span>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}
