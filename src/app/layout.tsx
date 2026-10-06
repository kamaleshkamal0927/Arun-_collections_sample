import type { Metadata } from "next";
import { Cinzel, Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";
import { STORE_INFO } from "@/data/collectionsData";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Arun Collections | Antique Shop in Mylapore, Chennai",
  description:
    "Discover antiques, vintage collectibles and timeless curiosities at Arun Collections in Mylapore, Chennai. Brass heirlooms, vintage clocks, cameras, traditional idols, and decorative antiques.",
  keywords: [
    "antique shop in Chennai",
    "antique shop in Mylapore",
    "antiques in Chennai",
    "vintage collectibles Chennai",
    "antique store Mylapore",
    "vintage items Chennai",
    "Arun Collections Mylapore",
    "brass antiques Chennai",
    "traditional idols Mylapore",
  ],
  authors: [{ name: "Arun Collections" }],
  openGraph: {
    title: "Arun Collections | Antique Shop in Mylapore, Chennai",
    description:
      "Discover antiques, vintage collectibles and timeless curiosities at Arun Collections in Mylapore, Chennai.",
    url: "https://aruncollections.com",
    siteName: "Arun Collections",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // LocalBusiness Schema for Mylapore Antique Store
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AntiqueStore",
    name: STORE_INFO.name,
    image: "https://images.unsplash.com/photo-1590736969955-71cc94801759?auto=format&fit=crop&w=900&q=80",
    telephone: STORE_INFO.phoneInternational,
    url: "https://aruncollections.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "94/3, Adam Street, Alamelu Manga Puram, Sankarapuram",
      addressLocality: "Mylapore",
      addressRegion: "Tamil Nadu",
      postalCode: "600004",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "13.0335",
      longitude: "80.2678",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.6",
      reviewCount: "40",
      bestRating: "5",
      worstRating: "1",
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
        opens: "10:00",
        closes: "20:30",
      },
    ],
    priceRange: "$$",
    sameAs: [
      STORE_INFO.instagramUrl,
    ],
  };

  return (
    <html lang="en" className={`${cinzel.variable} ${cormorant.variable} ${jakarta.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#1E1712] antialiased selection:bg-antique-gold selection:text-white">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <MobileBottomBar />
      </body>
    </html>
  );
}
