export const BRAND = "Ganga Sales | Konatural";
export const BRAND_NAME = "Ganga Sales";
export const BRAND_SUB = "Konatural";
export const BRAND_FULL = "Ganga Sales | Konatural";
export const FIRM_NAME = "Ganga Sales Firm";
export const STORE_NAME = "Ganga Sales | Konatural";

export const STORE_ADDRESS = {
  line1: "Mojadi Market Road, Opp. Full Pura",
  line2: "Bardolpura, Madhupura",
  area: "Bardolpura, Madhupura",
  city: "Ahmedabad",
  state: "Gujarat",
  pincode: "380016",
  country: "India",
  full: "Mojadi Market Road, Opp. Full Pura, Bardolpura, Madhupura, Ahmedabad, Gujarat 380016, India",
};

export const STORE_RATING = "4.9 ★";

export const WHATSAPP_DISPLAY = "+91 82003 66244";
export const WHATSAPP_E164 = "918200366244";

export const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Ganga+Sales+Konatural,+Mojadi+Market+Road,+Opp.+Full+Pura,+Bardolpura,+Madhupura,+Ahmedabad,+Gujarat+380016";

export const MAX_QTY_PER_PRODUCT = 10;
export const MAX_QTY_MESSAGE = "Maximum quantity reached (10 per product).";

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export function absoluteUrl(path: string) {
  return new URL(path, siteUrl).toString();
}
