import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sangwan Mobile Care | Charkhi Dadri's Premier iPhone & Smartphone Repair Specialist",
  description:
    "Sangwan Mobile Care in Charkhi Dadri, Haryana. Fast 30-minute screen replacement, iPhone & Android chip-level repairs, genuine battery change, and best deals on new & certified pre-owned smartphones. Call 8222918520.",
  keywords: [
    "Sangwan Mobile Care",
    "mobile repair Charkhi Dadri",
    "iPhone repair Dadri",
    "mobile phone repair Puran Market",
    "phone folder change Charkhi Dadri",
    "Samsung screen repair Dadri",
    "second hand iPhone Dadri",
    "mobile shop near bus stand Dadri",
  ],
  openGraph: {
    title: "Sangwan Mobile Care | iPhone & Smartphone Repair Charkhi Dadri",
    description:
      "Express 30-minute mobile repair, original screen/folder change, certified pre-owned iPhones & flagships in Charkhi Dadri. Est. 2017.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MobilePhoneStore",
    name: "Sangwan Mobile Care",
    telephone: "+918222918520",
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Gali No 1, Puran Market, Opp. Bus Stand",
      addressLocality: "Charkhi Dadri",
      addressRegion: "Haryana",
      postalCode: "127306",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 28.5921,
      longitude: 76.2711,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "09:30",
        closes: "20:30",
      },
    ],
    sameAs: [
      "https://www.instagram.com/sangwan_mobile_care82/",
      "https://www.justdial.com/Charkhi-Dadri/Sangwan-mobile-care-Near-Gramin-Bank-Puran-Nagar/9999P1250-1250-240123113902-S5A3_BZDET",
    ],
  };

  return (
    <html lang="en" className={plusJakartaSans.className}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#0a0d14] text-slate-100 antialiased pb-20 md:pb-0">
        {children}
      </body>
    </html>
  );
}
