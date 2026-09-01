import { Barcode, PackageSearch, QrCode } from 'lucide-react';

const policies = [
  'Política de Frete',
  'Pagamento Seguro',
  'Termos de Uso',
  'Trocas e Reembolso',
];

const institutional = [
  'Quem Somos',
  'Dúvidas Frequentes',
  'Política de Privacidade',
];

export function Footer() {
  return (
    <footer id="site-footer" className="bg-[#062e73] text-white">
      <div className="mx-auto w-full max-w-[1180px] px-4 pb-4 pt-8 sm:px-6 sm:pb-5 sm:pt-9 lg:px-8">
        <div className="text-center">
          <p className="text-xl font-black leading-none tracking-[-0.045em] sm:text-2xl">
            VITRINE <span className="text-[#66a0ff]">MIX</span>
          </p>
          <p className="mt-1.5 text-[11px] text-white/76 sm:text-xs">Sua loja de confiança para compras online</p>
        </div>

        <div className="mt-7 grid gap-6 text-sm sm:grid-cols-3 sm:gap-10 lg:mt-8 lg:gap-20">
          <section>
            <h2 className="text-xs font-black uppercase tracking-[0.02em]">Atendimento ao cliente</h2>
            <div className="mt-2.5 space-y-1.5 text-xs leading-5 text-white/88 sm:text-sm">
              <p>
                E-mail:{' '}
                <a className="break-all underline decoration-white/45 underline-offset-2 transition hover:text-[#9bc0ff]" href="mailto:contato@suportesac-vitrinemix.com">
                  contato@suportesac-vitrinemix.com
                </a>
              </p>
              <p>
                WhatsApp:{' '}
                <a className="underline decoration-white/45 underline-offset-2 transition hover:text-[#9bc0ff]" href="https://wa.me/551151985194" target="_blank" rel="noopener noreferrer">
                  (11) 5198-5194
                </a>
              </p>
              <p>Horário: Seg. a Sex., 08h às 17h</p>
            </div>
            <button className="mt-3 inline-flex min-h-8 items-center gap-1.5 rounded border border-white/55 px-2.5 py-1.5 text-[11px] font-semibold transition hover:bg-white/10" type="button">
              <PackageSearch className="size-4" /> Rastrear Pedido
            </button>
          </section>

          <section>
            <h2 className="text-xs font-black uppercase tracking-[0.02em]">Políticas</h2>
            <nav className="mt-2.5 flex flex-col gap-1.5 text-xs leading-5 text-white/88 sm:text-sm" aria-label="Políticas da loja">
              {policies.map((item) => <span key={item}>{item}</span>)}
            </nav>
          </section>

          <section>
            <h2 className="text-xs font-black uppercase tracking-[0.02em]">Institucional</h2>
            <nav className="mt-2.5 flex flex-col gap-1.5 text-xs leading-5 text-white/88 sm:text-sm" aria-label="Informações institucionais">
              {institutional.map((item) => <span key={item}>{item}</span>)}
            </nav>
          </section>
        </div>

        <p className="mt-7 rounded-lg bg-[#103d80] px-4 py-2.5 text-[10px] leading-4 text-white/90 sm:mt-8 sm:px-5 sm:py-2.5 sm:text-[11px] sm:leading-4">
          Preços e condições exclusivos para compras neste site oficial, podendo variar com o tempo da oferta. Evite comprar produtos mais baratos ou de outras lojas, pois você pode estar sendo enganado por um golpista.
        </p>

        <div className="mt-5 text-center">
          <p className="text-[11px] font-black uppercase tracking-[0.04em]">Nós aceitamos</p>
          <div className="mt-2 flex flex-wrap items-center justify-center gap-1.5" aria-label="Formas de pagamento aceitas">
            <span className="grid h-7 w-9 place-items-center rounded-[3px] bg-white text-[#1faa77]" title="Pix">
              <QrCode className="size-[17px]" aria-hidden="true" />
              <span className="sr-only">Pix</span>
            </span>
            <span className="grid h-7 w-10 place-items-center rounded-[3px] bg-white text-[10px] font-black italic tracking-[-0.04em] text-[#17357f]" title="Visa">VISA</span>
            <span className="flex h-7 w-10 items-center justify-center rounded-[3px] bg-white" title="Mastercard">
              <span className="size-3.5 rounded-full bg-[#eb001b]" />
              <span className="-ml-1.5 size-3.5 rounded-full bg-[#f79e1b] opacity-90" />
              <span className="sr-only">Mastercard</span>
            </span>
            <span className="grid h-7 w-10 place-items-center rounded-[3px] bg-[#111] text-[9px] font-black lowercase text-white" title="Elo">elo</span>
            <span className="grid h-7 w-11 place-items-center rounded-[3px] bg-[#1572b8] px-1 text-center text-[7px] font-black leading-[0.9] text-white" title="American Express">AMERICAN<br />EXPRESS</span>
            <span className="grid h-7 w-11 place-items-center rounded-[3px] bg-[#b71926] text-[7px] font-black text-white" title="Hipercard">Hipercard</span>
            <span className="grid h-7 w-10 place-items-center rounded-[3px] bg-white text-[#253246]" title="Boleto">
              <Barcode className="h-4 w-6" aria-hidden="true" />
              <span className="sr-only">Boleto</span>
            </span>
          </div>
        </div>

        <div className="mt-5 border-t border-white/20 pt-4 text-center text-[11px] text-white/78 sm:text-xs">
          <p>© 2026 <strong className="font-black text-white">VITRINE <span className="text-[#66a0ff]">MIX</span></strong></p>
        </div>
      </div>
    </footer>
  );
}
