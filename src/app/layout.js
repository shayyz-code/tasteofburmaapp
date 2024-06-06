import "./globals.css";
import StyledComponentsRegistry from "@/lib/registry";
import Footer from "@/ui/Footer/Footer";
import Navbar from "@/ui/Navbar/Navbar";
import Image from "next/image";

import bgDarkmode from "$/bg-darkmode.jpeg";
import bgLightmode from "$/bg-lightmode.jpeg";

export const metadata = {
  title: { template: "%s | Taste of Burma", default: "Taste of Burma" },
  description: "San Fran's Burmese Restaurant",
  icons: {
    icon: [{ url: "/icon.png" }],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  generator: "Next.js",
  applicationName: "Taste of Burma",
  referrer: "origin-when-cross-origin",
  keywords: ["Burmese", "Food", "San Fran", "Restaurant"],
  authors: [{ name: "Taste of Burma" }, { name: "Matrix inc." }],
  creator: "Garrixon",
  publisher: "Taste of Burma",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://tasteofburma.org"),

  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    title: "Taste of Burma",
    description: "San Fran's Burmese Restaurant",
    url: "https://tasteofburmaapp.vercel.app",
    siteName: "Taste of Burma",
    images: [
      {
        url: "https://firebasestorage.googleapis.com/v0/b/tasteofburma-4e93e.appspot.com/o/opengraph-image.png?alt=media&token=824d509f-d8c7-4bea-87ab-d91067689e4c",
        width: 1200,
        height: 627,
        alt: "Taste of Burma Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Taste of Burma",
    description: "San Fran's Burmese Restaurant",
    creator: "@garrixon",
    images: {
      url: "https://firebasestorage.googleapis.com/v0/b/tasteofburma-4e93e.appspot.com/o/opengraph-image.png?alt=media&token=824d509f-d8c7-4bea-87ab-d91067689e4c",
      alt: "Taste of Burma Logo",
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <picture>
            <source
              srcSet={bgDarkmode.src}
              media={"(prefers-color-scheme: dark)"}
            />
            <Image
              src={bgLightmode}
              alt={"background image"}
              width={1920}
              height={1200}
              style={{
                position: "fixed",
                zIndex: -1,
              }}
            />
          </picture>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
