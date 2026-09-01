import { Header } from '@/src/components/Header';
import { FloatingBuyButton } from '@/src/components/FloatingBuyButton';
import { Footer } from '@/src/components/Footer';
import { ProductGallery } from '@/src/components/ProductGallery';
import { PurchaseCard } from '@/src/components/PurchaseCard';
import { Reviews } from '@/src/components/Reviews';
import { product } from '@/src/data/product';

export default function Home() {
  const formattedPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(product.price);

  return (
    <main>
      <Header />
      <section className="border-b border-[#dbe4f0] bg-white">
        <div className="mx-auto grid w-full max-w-[1180px] gap-4 px-4 py-7 sm:gap-8 sm:px-6 sm:py-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(370px,0.92fr)] lg:gap-12 lg:px-8 lg:py-14">
          <ProductGallery images={product.images} productName={product.shortName} />
          <PurchaseCard product={product} />
        </div>
      </section>
      <section className="bg-white px-[3px] py-6 sm:px-6 sm:py-10 lg:py-12" aria-label="Informações completas do produto">
        <img
          src="/product/mma-pro-1000-informativo-final.png"
          alt="Informações completas da Máquina de Pintura Airless Menegotti MMA PRO 1000"
          className="mx-auto block h-auto w-full max-w-none object-contain sm:max-w-[1180px]"
        />
      </section>
      <Reviews reviews={product.reviews} />
      <Footer />
      <FloatingBuyButton checkoutUrl={product.checkoutUrl} formattedPrice={formattedPrice} />
    </main>
  );
}
