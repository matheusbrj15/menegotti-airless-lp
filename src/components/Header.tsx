import { Menu, Search, ShoppingCart } from 'lucide-react';

export function Header() {
  return (
    <>
      <div className="bg-[#ff6b00] px-4 py-1.5 text-center text-[11px] font-extrabold text-white sm:text-xs">
        ⚡ Frete Grátis + Envio Imediato
      </div>
      <header className="border-b border-white/10 bg-[#002870] text-white">
        <div className="mx-auto grid h-14 w-full max-w-[1180px] grid-cols-[1fr_auto_1fr] items-center px-2 sm:h-16 sm:px-5 lg:px-8">
          <div className="flex justify-start">
            <button
              className="grid size-10 place-items-center rounded-md text-white transition hover:bg-white/10 focus-visible:bg-white/10"
              type="button"
              aria-label="Abrir menu"
            >
              <Menu className="size-6" strokeWidth={2} />
            </button>
          </div>

          <a className="group inline-flex items-center gap-1.5 whitespace-nowrap" href="#top" aria-label="Vitrine Mix — início">
            <span className="text-lg font-black tracking-[-0.05em] sm:text-xl">
              VITRINE<span className="text-[#ff6b00]">MIX</span>
            </span>
            <span className="size-1.5 rounded-full bg-[#ff6b00] transition-transform group-hover:scale-125" />
          </a>

          <div className="flex justify-end">
            <button
              className="grid size-10 place-items-center rounded-md text-white transition hover:bg-white/10 focus-visible:bg-white/10"
              type="button"
              aria-label="Carrinho de compras"
            >
              <ShoppingCart className="size-5" strokeWidth={2} />
            </button>
            <button
              className="grid size-10 place-items-center rounded-md text-white transition hover:bg-white/10 focus-visible:bg-white/10"
              type="button"
              aria-label="Pesquisar"
            >
              <Search className="size-5" strokeWidth={2} />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
