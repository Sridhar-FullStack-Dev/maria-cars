import "./globals.scss";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import { Poppins } from "next/font/google";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700", "600", "500", "400", "300", "200", "100"],
});

export const metadata = {
  title: "Maria Cars | Home - Best Car Fitting Services In Thoothukudi",
  description:
    "Maria Cars provides high-quality car fitting services. We are a reliable auto modification and fitting shop offering affordable plans and offers. Visit us for the best car fitting near you and our company is situated in Thoothukudi.",
  openGraph: {
    type: "website",
    url: "https://maria-cars.vercel.app",
    title: "Maria Cars | Home - Best Car Fitting Services In Thoothukudi",
    description:
      "Maria Cars provides high-quality car fitting services. We are a reliable auto modification and fitting shop offering affordable plans and offers. Visit us for the best car fitting near you and our company is situated in Thoothukudi.",
    images: [
      {
        url: "https://maria-cars.vercel.app/favicon.ico",
        width: 800,
        height: 600,
        alt: "logo",
      },
    ],
    site_name: "Maria Cars",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <Navbar />
        <SmoothScroll>
          {children}

          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
