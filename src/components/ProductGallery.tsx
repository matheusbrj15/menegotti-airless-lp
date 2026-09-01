'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import type { ProductImage } from '@/src/data/product';

type ProductGalleryProps = {
  images: ProductImage[];
  productName: string;
};

export function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = images[activeIndex];

  const selectRelative = (step: number) => {
    setActiveIndex((current) => (current + step + images.length) % images.length);
  };

  return (
    <div id="top" className="min-w-0">
      <div className="relative overflow-hidden rounded-[24px] border border-[#dbe4f0] bg-[#f7f9fc] shadow-[0_20px_60px_rgba(0,40,112,0.08)] sm:rounded-[30px]">
        <div className="absolute left-4 top-4 z-10 rounded-full bg-[#ff6b00] px-3 py-1.5 text-[10px] font-black tracking-[0.12em] text-white sm:left-5 sm:top-5 sm:text-[11px]">
          DESTAQUE PROFISSIONAL
        </div>
        <img
          key={activeImage.src}
          src={activeImage.src}
          alt={activeImage.alt}
          className="aspect-[4/3] w-full object-contain p-3 mix-blend-multiply sm:p-6"
        />
        <button
          type="button"
          onClick={() => selectRelative(-1)}
          className="absolute left-3 top-1/2 grid size-10 -translate-y-1/2 place-items-center rounded-full border border-[#dbe4f0] bg-white/95 text-[#002870] shadow-lg transition hover:scale-105 sm:left-4"
          aria-label="Imagem anterior"
        >
          <ChevronLeft className="size-5" />
        </button>
        <button
          type="button"
          onClick={() => selectRelative(1)}
          className="absolute right-3 top-1/2 grid size-10 -translate-y-1/2 place-items-center rounded-full border border-[#dbe4f0] bg-white/95 text-[#002870] shadow-lg transition hover:scale-105 sm:right-4"
          aria-label="Próxima imagem"
        >
          <ChevronRight className="size-5" />
        </button>
        <span className="absolute bottom-4 right-4 rounded-full bg-[#002870] px-3 py-1 text-xs font-bold text-white">
          {activeIndex + 1}/{images.length}
        </span>
      </div>
      <div className="mt-3 grid grid-cols-4 gap-2.5 sm:mt-4 sm:gap-3">
        {images.map((image, index) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`Ver ${productName}: imagem ${index + 1}`}
            aria-current={activeIndex === index}
            className="overflow-hidden rounded-xl border-2 bg-[#f7f9fc] transition hover:border-[#003b8f]/40 aria-current:border-[#003b8f] sm:rounded-2xl"
          >
            <img
              src={image.src}
              alt=""
              className="aspect-[4/3] w-full object-contain p-1 mix-blend-multiply sm:p-2"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
