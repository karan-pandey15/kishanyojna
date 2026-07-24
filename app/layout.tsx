import type { Metadata } from "next";
import { Fraunces, Source_Sans_3 } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";
import "./globals.css";

const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const body = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} | Child Welfare & Farmers Social Rights`,
    template: `%s | ${site.shortName}`,
  },
  description: site.description,
  keywords: [
    "Bhartiya Kisan Union Umakanth",
    "child welfare",
    "child education",
    "child health",
    "children sports",
    "farmers social rights",
    "old age welfare",
    "NGO",
    "Mainpuri",
    "CERT audit",
  ],
  openGraph: {
    title: site.name,
    description: site.description,
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} h-full`}>
      <body className="flex min-h-full flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
