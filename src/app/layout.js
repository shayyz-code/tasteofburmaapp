import "./globals.css";
import StyledComponentsRegistry from "@/lib/registry";
import Footer from "@/ui/Footer/Footer";
import Navbar from "@/ui/Navbar/Navbar";
import Image from "next/image";

import bgDarkmode from "$/bg-darkmode.jpeg";
import bgLightmode from "$/bg-lightmode.jpeg";

export const metadata = {
  title: "Taste of Burma",
  description: "San Fran's Burmese Restaurent",
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
