import "./globals.css";
import StyledComponentsRegistry from "@/lib/registry";
import Footer from "@/ui/Footer/Footer";
import Navbar from "@/ui/Navbar/Navbar";
import Image from "next/image";

import bgDarkmode from "$/bg-darkmode.jpeg";
import bgLightmode from "$/bg-lightmode.jpeg";

export const metadata = {
  title: { template: "%s | Taste of Burma", default: "Taste of Burma" },
  description: "San Fran's Burmese Restaurent",
  icons: {
    icon: "/icon.png",
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
  openGraph: {
    title: "Taste of Burma",
    description: "San Fran's Burmese Restaurent",
    url: "https://tasteofburma.org",
    siteName: "Taste of Burma",
    locale: "en_US",
    type: "website",
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
