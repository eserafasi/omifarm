import type { Metadata, Viewport } from "next";
import { Inter, Jost } from "next/font/google";
import { Footer, Header, WhatsAppButton } from "@/components/site-shell";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const jost = Jost({ subsets: ["latin"], variable: "--font-display", display: "swap" });

export const metadata: Metadata = {
  title: { default: "Omi Farm Colombia | Nutrición especializada para sus cultivos", template: "%s | Omi Farm Colombia" },
  description: "Fertilizantes, bioestimulantes, formulaciones especiales y maquila para el agro colombiano. Producción propia en Tunja, Boyacá.",
  icons: { icon: "/images/logo.png" },
};

export const viewport: Viewport = {
  themeColor: "#164f38",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-CO">
      <body className={`${inter.variable} ${jost.variable}`}>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
