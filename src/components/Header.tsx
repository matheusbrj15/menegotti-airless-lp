import { BadgeCheck, ShieldCheck } from 'lucide-react';

export function Header() {
  return (
    <>
      <div className="bg-[#ff6b00] px-4 py-2 text-center text-[11px] font-extrabold tracking-[0.12em] text-white sm:text-xs">
        CONDIÇÃO PROMOCIONAL EXCLUSIVA VITRINE MIX
      </div>
      <header className="border-b border-white/10 bg-[#002870] text-white">
        <div className="mx-auto flex h-[68px] w-full max-w-[1180px] items-center justify-between gap-4 px-4 sm:h-[76px] sm:px-6 lg:px-8">
          <a className="group inline-flex items-center gap-2" href="#top" aria-label="Vitrine Mix — início">
            <span className="text-xl font-black tracking-[-0.05em] sm:text-2xl">
              VITRINE<span className="text-[#ff6b00]">MIX</span>
            </span>
            <span className="h-2 w-2 rounded-full bg-[#ff6b00] transition-transform group-hover:scale-125" />
          </a>
          <div className="flex items-center gap-3 text-[11px] font-semibold text-white/85 sm:gap-6 sm:text-xs">
            <span className="hidden items-center gap-1.5 sm:flex">
              <ShieldCheck className="size-4 text-[#ffb27b]" />
              Ambiente protegido
            </span>
            <span className="flex items-center gap-1.5">
              <BadgeCheck className="size-4 text-[#ffb27b]" />
              Produto Menegotti
            </span>
          </div>
        </div>
      </header>
    </>
  );
}
