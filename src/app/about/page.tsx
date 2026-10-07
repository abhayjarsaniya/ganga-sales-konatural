import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  BRAND_FULL,
  FIRM_NAME,
  GOOGLE_MAPS_URL,
  STORE_ADDRESS,
  STORE_NAME,
  STORE_RATING,
  WHATSAPP_DISPLAY,
} from "@/data/site";
import { InquiryLink } from "@/components/inquiry-link";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Ganga Sales | Konatural brings a legacy of trust, quality spices and premium dry fruits since 1996, serving wholesale, retail and luxury curated gifting from Madhupura, Ahmedabad.",
};

export default function AboutPage() {
  return (
    <div className="shell py-10 sm:py-16 lg:py-20">
      <div className="grid items-start gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
        {/* LEFT: Content & Store Details */}
        <article className="flex flex-col">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6E2635]">
            About Ganga Sales | Konatural
          </p>
          <h1 className="mt-2.5 font-serif text-3xl font-medium leading-[1.1] text-ink sm:mt-3 sm:text-5xl lg:text-6xl">
            Naturally Premium, Thoughtfully Presented.
          </h1>

          <div className="mt-6 space-y-4 text-sm leading-relaxed text-stone-600 sm:mt-8 sm:text-base">
            <p>
              Konatural is built on an enduring legacy of trust, purity and culinary excellence. Our parent business, <strong>{FIRM_NAME}</strong>, has been an esteemed pillar in the spices and dry fruits trade since <strong>1996</strong> in Madhupura, Ahmedabad — serving both wholesale merchants and discerning retail customers with unwavering integrity.
            </p>
            <p>
              With decades of deep market experience, we have earned a distinguished reputation for consistent grade standards, authentic sourcing and genuine customer relationships. <strong>Konatural</strong> was created to bring this generational expertise into the modern lifestyle — delivering premium-quality dry fruits, hand-selected nuts, aromatic spices and artisanal delicacies straight to your doorstep.
            </p>
            <p>
              Embracing our philosophy of <em>&ldquo;Naturally Premium, Thoughtfully Presented,&rdquo;</em> we specialize in bespoke celebratory gifting:
            </p>
            <ul className="list-disc space-y-1 pl-5 text-stone-700">
              <li>Luxury Celebration Hampers &amp; Festive Gift Boxes</li>
              <li>Corporate Gifting Suites tailored for client and employee appreciation</li>
              <li>Wedding &amp; Special Occasion keepsake packaging</li>
              <li>Hand-graded dry fruits and natural whole spices</li>
            </ul>
            <p>
              This website serves as our curated digital catalog and direct WhatsApp inquiry portal. Choose your preferred items and quantities, and connect with our team on WhatsApp ({WHATSAPP_DISPLAY}) for personalized order confirmation, custom packaging options and delivery details.
            </p>
          </div>

          <div className="mt-8 rounded-2xl border border-stone-200 bg-[#fbf9f6] p-4 min-[360px]:p-5 sm:p-6">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
              <h2 className="font-serif text-lg font-semibold text-ink sm:text-xl">{STORE_NAME}</h2>
              <span className="rounded-full bg-[#6E2635]/10 px-2.5 py-0.5 text-xs font-semibold text-[#6E2635]">
                ★ {STORE_RATING} on Google
              </span>
            </div>
            <address className="mt-3 not-italic text-xs leading-relaxed text-stone-600 sm:text-sm">
              <p className="font-medium text-ink">{STORE_ADDRESS.line1}</p>
              <p>{STORE_ADDRESS.line2}</p>
              <p>{STORE_ADDRESS.area}, {STORE_ADDRESS.city} – {STORE_ADDRESS.pincode}</p>
            </address>
            <div className="mt-4 flex flex-col gap-2 min-[400px]:flex-row min-[400px]:flex-wrap min-[400px]:items-center min-[400px]:gap-3 text-xs font-semibold text-[#6E2635]">
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:text-[#5A1E2B]"
              >
                Get Directions on Google Maps →
              </a>
              <span className="hidden text-stone-300 min-[400px]:inline">·</span>
              <span>Phone / WhatsApp: {WHATSAPP_DISPLAY}</span>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 sm:mt-10 sm:gap-3.5">
            <Link
              href="/dry-fruits"
              className="inline-flex min-h-[50px] w-full items-center justify-center rounded-full bg-[#6E2635] px-7 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#5A1E2B] active:scale-[0.99] sm:w-auto"
            >
              Explore Dry Fruits
            </Link>
            <InquiryLink className="inline-flex min-h-[50px] w-full items-center justify-center rounded-full border border-[#6E2635] bg-white px-6 py-3 text-sm font-semibold text-[#6E2635] shadow-sm transition hover:bg-[#6E2635]/5 active:scale-[0.99] sm:w-auto">
              Send Inquiry on WhatsApp
            </InquiryLink>
          </div>
        </article>

        {/* RIGHT: Premium Showcase Image */}
        <div className="mt-4 lg:mt-0 lg:sticky lg:top-24">
          <div className="overflow-hidden rounded-[24px] border border-[#e6e2dc] bg-[#fbf9f6] p-3 shadow-md sm:rounded-[28px] sm:p-4">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[18px] bg-white sm:rounded-[20px] lg:aspect-[5/4]">
              <Image
                src="/images/hero-composition.jpg"
                alt="Premium assortment of dry fruits, almonds, cashews, pistachios, dates and walnuts from Ganga Sales Konatural Ahmedabad"
                fill
                priority
                className="object-contain p-3 transition-transform duration-500 hover:scale-[1.02]"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
            </div>
            <div className="mt-3.5 px-2 pb-1 text-center">
              <p className="font-serif text-base font-semibold text-ink sm:text-lg">
                {BRAND_FULL}
              </p>
              <p className="mt-0.5 text-xs text-stone-500">
                Bardolpura, Madhupura · Ahmedabad
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
