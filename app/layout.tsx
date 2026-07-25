import type { Metadata } from "next";
import { Fraunces, Source_Sans_3 } from "next/font/google";
import { headers } from "next/headers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers";
import SkipLink from "@/components/SkipLink";
import { site } from "@/lib/site";
import "./globals.css";

const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

const body = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
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
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: site.name,
    description: site.description,
    type: "website",
    locale: "en_IN",
    url: site.url,
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  // Never put secrets or API keys in metadata
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Reading headers opts the tree into request-time rendering so CSP nonces apply.
  await headers();

  return (
    <html
      lang="en-IN"
      className={`${display.variable} ${body.variable} h-full`}
      // Extensions often mutate <html>/<body> attrs before hydrate (e.g. cz-shortcut-listen)
      suppressHydrationWarning
    >
      <body
        className="flex min-h-full flex-col antialiased"
        suppressHydrationWarning
      >
        <Providers>
          <SkipLink />
          <Header />
          <main id="main-content" className="flex-1" tabIndex={-1}>
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
