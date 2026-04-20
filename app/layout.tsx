import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "./_components/nav";
import { Footer } from "./_components/footer";
import { StickyMobileCta } from "./_components/sticky-mobile-cta";
import { RevealInit } from "./_components/reveal-init";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const DESCRIPTION =
  "Elite Diesel Service in Cheyenne, Wyoming. We keep the rigs that keep America moving. Master-certified heavy diesel repair for CAT, Cummins, Detroit, PACCAR, and Volvo. Women-owned. Veteran-owned. Est. 1995. Call (307) 400-5090.";

export const metadata: Metadata = {
  metadataBase: new URL("https://elitediesel.com"),
  title: {
    default: "Elite Diesel Service | Heavy Iron. Real Mechanics. No Shortcuts.",
    template: "%s | Elite Diesel Service",
  },
  description: DESCRIPTION,
  keywords: [
    "diesel repair Cheyenne Wyoming",
    "semi truck repair Cheyenne",
    "diesel engine rebuild",
    "CAT Cummins Detroit repair Wyoming",
    "chassis dyno",
    "engine dyno",
    "chassis/engine dyno",
    "ECM diagnostics",
    "Troy Lake",
    "Elite Diesel Service",
    "Diesel Truck Liberation Act",
    "H.R. 8079",
  ],
  authors: [{ name: "Troy Lake" }],
  creator: "Elite Diesel Service",
  publisher: "Elite Diesel Service",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://elitediesel.com",
    siteName: "Elite Diesel Service",
    title: "Elite Diesel Service | Heavy Iron. Real Mechanics. No Shortcuts.",
    description: DESCRIPTION,
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Elite Diesel Service, Cheyenne, Wyoming",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elite Diesel Service | Cheyenne, WY",
    description: DESCRIPTION,
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${oswald.variable} ${inter.variable}`}>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
        <StickyMobileCta />
        <RevealInit />
      </body>
    </html>
  );
}
