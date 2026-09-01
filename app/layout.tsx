import type { Metadata } from 'next';
import './globals.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Máquina de Pintura Airless Menegotti MMA PRO 1000 | Vitrine Mix',
  description:
    'Máquina de Pintura Airless Menegotti MMA PRO 1000 profissional, com motor de 1000 W, pressão de até 214 bar e vazão de até 2 L/min.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    title: 'Máquina de Pintura Airless Menegotti MMA PRO 1000 | Vitrine Mix',
    description:
      'Alta pressão e produtividade para pinturas com acabamento uniforme.',
    siteName: 'Vitrine Mix',
    images: [
      {
        url: '/product/mma-pro-1000-direita.jpg',
        width: 1024,
        height: 749,
        alt: 'Máquina de Pintura Airless Menegotti MMA PRO 1000',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Menegotti MMA PRO 1000 | Vitrine Mix',
    description:
      'Máquina de pintura Airless profissional com motor de 1000 W.',
    images: ['/product/mma-pro-1000-direita.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
