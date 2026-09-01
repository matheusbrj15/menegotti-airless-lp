'use client';

import { ArrowRight, LockKeyhole } from 'lucide-react';
import { useId, useState } from 'react';
import { cn } from '@/lib/utils';

type CheckoutButtonProps = {
  checkoutUrl: string | null;
  className?: string;
  compact?: boolean;
  showUnavailableNotice?: boolean;
};

export function CheckoutButton({
  checkoutUrl,
  className,
  compact = false,
  showUnavailableNotice = true,
}: CheckoutButtonProps) {
  const [showNotice, setShowNotice] = useState(false);
  const statusId = useId();

  const styles = cn(
    'group flex w-full items-center justify-center gap-2 rounded-2xl bg-[#12a83a] px-5 font-black tracking-[0.04em] text-white shadow-[0_12px_28px_rgba(18,168,58,0.25)] transition hover:bg-[#0e9231] focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[#12a83a]/35 active:translate-y-px',
    compact ? 'min-h-12 text-sm' : 'min-h-14 text-base sm:min-h-[60px] sm:text-lg',
    className,
  );

  if (checkoutUrl) {
    return (
      <a className={styles} href={checkoutUrl} rel="noopener noreferrer">
        COMPRAR AGORA
        <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
      </a>
    );
  }

  return (
    <div>
      <button
        className={styles}
        type="button"
        onClick={() => showUnavailableNotice && setShowNotice(true)}
        aria-describedby={showUnavailableNotice ? statusId : undefined}
      >
        COMPRAR AGORA
        <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
      </button>
      {showUnavailableNotice && (
        <p
          id={statusId}
          aria-live="polite"
          className={cn(
            'mt-2 flex min-h-5 items-center justify-center gap-1.5 text-center text-xs text-[#58677d] transition-opacity',
            showNotice ? 'opacity-100' : 'opacity-0',
          )}
        >
          <LockKeyhole className="size-3.5" />
          Checkout Zedy em configuração. Nenhum redirecionamento foi feito.
        </p>
      )}
    </div>
  );
}
