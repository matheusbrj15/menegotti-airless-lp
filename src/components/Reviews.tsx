'use client';

import { BadgeCheck, Camera, Star } from 'lucide-react';
import type { ProductReview } from '@/src/data/product';

export function Reviews({ reviews }: { reviews: ProductReview[] }) {
  return (
    <section className="border-y border-[#dbe4f0] bg-[#f4f7fb]" id="avaliacoes">
      <div className="mx-auto w-full max-w-[1180px] px-4 py-14 sm:px-6 sm:py-18 lg:px-8 lg:py-20">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-black tracking-[0.14em] text-[#ff6b00]">AVALIAÇÕES</p>
            <h2 className="mt-3 text-[clamp(1.9rem,4vw,3rem)] font-black tracking-[-0.045em] text-[#002870]">Experiências de quem comprou</h2>
          </div>
          <p className="max-w-[40ch] text-sm leading-6 text-[#647389]">
            Comentários sobre entrega, montagem e uso do equipamento, acompanhados pelas fotos enviadas.
          </p>
        </div>

        {reviews.length > 0 ? (
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review, index) => (
              <article
                key={`${review.name}-${index}`}
                className="flex h-full flex-col rounded-[22px] border border-[#dbe4f0] bg-white p-5 shadow-[0_12px_35px_rgba(0,40,112,0.06)]"
              >
                <header className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <strong className="text-[#002870]">{review.name}</strong>
                      {review.verified && <BadgeCheck className="size-4 text-[#12a83a]" aria-label="Avaliação verificada" />}
                    </div>
                    <span className="text-xs text-[#738094]">{review.city}</span>
                  </div>
                  <div className="flex" aria-label={`${review.rating} de 5 estrelas`}>
                    {Array.from({ length: 5 }, (_, star) => (
                      <Star key={star} className={`size-4 ${star < review.rating ? 'fill-[#ffb000] text-[#ffb000]' : 'text-[#d6dee8]'}`} />
                    ))}
                  </div>
                </header>
                <p className="mt-4 text-sm leading-6 text-[#4f6076]">{review.text}</p>
                {review.images.map((image, imageIndex) => (
                  <figure
                    key={`${image.src}-${imageIndex}`}
                    className="mt-5 overflow-hidden rounded-2xl border border-[#e1e8f1] bg-[#f4f7fb]"
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="aspect-[4/3] w-full object-contain"
                    />
                  </figure>
                ))}
              </article>
            ))}
          </div>
        ) : (
          <div className="mt-8 grid min-h-56 place-items-center rounded-[26px] border border-dashed border-[#aebed2] bg-white px-6 text-center">
            <div className="max-w-md py-8">
              <span className="mx-auto grid size-12 place-items-center rounded-2xl bg-[#eaf1fb] text-[#003b8f]">
                <Camera className="size-5" />
              </span>
              <h3 className="mt-4 font-black text-[#002870]">Nenhuma avaliação real cadastrada ainda</h3>
              <p className="mt-2 text-sm leading-6 text-[#647389]">
                O estado vazio é intencional: nomes, comentários e fotos só aparecerão depois de serem fornecidos e validados.
              </p>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
