import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://holidayys.com"),
  title: {
    default: "Holidayys Tours — Discover the UAE Differently",
    template: "%s | Holidayys Tours",
  },
  description:
    "Explore Dubai, Abu Dhabi and the UAE through unforgettable attractions, adventures and experiences. Book tours, desert safaris, theme parks, water activities and more.",
  keywords: [
    "Dubai tours",
    "UAE experiences",
    "Abu Dhabi attractions",
    "desert safari Dubai",
    "Burj Khalifa tickets",
    "Dubai activities",
    "travel Dubai",
    "Holidayys Tours",
  ],
  openGraph: {
    type: "website",
    locale: "en_AE",
    siteName: "Holidayys Tours",
    title: "Holidayys Tours — Discover the UAE Differently",
    description:
      "Explore Dubai, Abu Dhabi and the UAE through unforgettable attractions, adventures and experiences.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Holidayys Tours — Discover the UAE Differently",
    description:
      "Explore Dubai, Abu Dhabi and the UAE through unforgettable attractions, adventures and experiences.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
