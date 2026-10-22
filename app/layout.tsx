import type { Metadata } from "next";
import { Libre_Franklin, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const libreFranklin = Libre_Franklin({ subsets: ["latin"], weight: ["400", "500", "700"], variable: "--font-sans" });
const sourceSerif = Source_Serif_4({ subsets: ["latin"], weight: ["400", "500", "700"], variable: "--font-serif" });

export const metadata: Metadata = {
  title: "Aprobapp | Decisiones de crédito más claras",
  description: "Sistema de apoyo a la decisión para la aprobación de créditos.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es-MX"><body className={`${libreFranklin.variable} ${sourceSerif.variable}`}>{children}</body></html>;
}
