import type { Metadata } from "next";
import { Barlow_Condensed, Inter } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MobileMenu } from "@/components/MobileMenu";
import { SearchOverlay } from "@/components/SearchOverlay";
import { UiProvider } from "@/context/UiContext";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const display = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-barlow",
});

export const metadata: Metadata = {
  title: {
    default: "VIR | MEYLE | Partnership. Reimagined.",
    template: "%s | VIR MEYLE",
  },
  description:
    "VIR Group of Companies and MEYLE – your partner in the independent aftermarket with high-quality parts, reliable data, and true collaboration.",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${display.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white font-sans text-text">
        <UiProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[80] focus:bg-turquoise focus:px-4 focus:py-2"
          >
            Skip to content
          </a>
          <Header />
          <MobileMenu />
          <SearchOverlay />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer />
        </UiProvider>
      </body>
    </html>
  );
}
