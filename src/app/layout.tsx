import type { Metadata } from "next";
import { Cormorant_Garamond, Great_Vibes, Outfit } from "next/font/google";
import { absoluteUrl, BRAND, BRAND_FULL, siteUrl, STORE_ADDRESS, STORE_RATING, WHATSAPP_DISPLAY } from "@/data/site";
import { CartDrawer, MobileDock, NoticeToast } from "@/components/cart-drawer";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { InquiryForm } from "@/components/inquiry-form";
import { MobileDrawer } from "@/components/mobile-drawer";
import { SearchDialog } from "@/components/search-dialog";
import { StoreProvider } from "@/components/store";
// Ganga Sales | Konatural official website layout
import "./globals.css";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

const script = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ganga Sales | Konatural — Naturally Premium, Thoughtfully Presented",
    template: `%s · Ganga Sales | Konatural`,
  },
  description:
    "Discover premium dry fruits, spices, mukhwas and thoughtfully curated gifting collections from Ganga Sales | Konatural, Ahmedabad.",
  openGraph: {
    title: "Ganga Sales | Konatural — Naturally Premium, Thoughtfully Presented",
    description: "Discover premium dry fruits, spices, mukhwas and thoughtfully curated gifting collections from Ganga Sales | Konatural, Ahmedabad.",
    images: ["/images/hero-composition.jpg"],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ganga Sales | Konatural — Naturally Premium, Thoughtfully Presented",
    description: "Discover premium dry fruits, spices, mukhwas and thoughtfully curated gifting collections from Ganga Sales | Konatural, Ahmedabad.",
    images: ["/images/hero-composition.jpg"],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Store",
      name: BRAND_FULL,
      url: absoluteUrl("/"),
      telephone: "+91-82003-66244",
      image: absoluteUrl("/images/hero-composition.jpg"),
      description: "Premium dry fruits, spices, gifting solutions and curated hampers. Inquiries placed directly on WhatsApp.",
      address: {
        "@type": "PostalAddress",
        streetAddress: STORE_ADDRESS.line1 + ", " + STORE_ADDRESS.line2,
        addressLocality: STORE_ADDRESS.city,
        addressRegion: STORE_ADDRESS.state,
        postalCode: STORE_ADDRESS.pincode,
        addressCountry: "IN",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        bestRating: "5",
      },
      areaServed: "IN",
    },
    {
      "@type": "WebSite",
      name: BRAND,
      url: absoluteUrl("/"),
      potentialAction: {
        "@type": "SearchAction",
        target: `${absoluteUrl("/search")}?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable} ${script.variable}`}>
      <body className="bg-white font-sans text-ink antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <StoreProvider>
          <div className="flex min-h-screen flex-col bg-white">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <CartDrawer />
            <InquiryForm />
            <SearchDialog />
            <MobileDrawer />
            <MobileDock />
            <NoticeToast />
          </div>
        </StoreProvider>
      </body>
    </html>
  );
}
