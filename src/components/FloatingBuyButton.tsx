'use client';

import { CheckoutButton } from '@/src/components/CheckoutButton';
import { useFooterOverlap } from '@/src/hooks/useFooterOverlap';
import { cn } from '@/lib/utils';

type FloatingBuyButtonProps = {
  checkoutUrl: string | null;
  formattedPrice: string;
};

export function FloatingBuyButton({ checkoutUrl }: FloatingBuyButtonProps) {
  const isFooterNear = useFooterOverlap('site-footer', 140);

  return (
    <div
      data-testid="floating-buy-button"
      aria-hidden={isFooterNear}
      inert={isFooterNear}
      className={cn(
        'fixed inset-x-4 z-40 mx-auto max-w-[520px] transition-all duration-300 sm:inset-x-6',
        'bottom-[max(12px,env(safe-area-inset-bottom))]',
        isFooterNear ? 'pointer-events-none translate-y-5 opacity-0' : 'pointer-events-auto translate-y-0 opacity-100',
      )}
    >
      <CheckoutButton checkoutUrl={checkoutUrl} compact showUnavailableNotice={false} />
    </div>
  );
}
