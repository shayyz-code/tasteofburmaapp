import "./globals.css";
import StyledComponentsRegistry from "@/lib/registry";
import Footer from "@/ui/Footer/Footer";
import Navbar from "@/ui/Navbar/Navbar";

export const metadata = {
  title: "Taste of Burma",
  description: "San Fran's Burmese Restaurent",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
