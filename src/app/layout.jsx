import "./globals.scss";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import { Poppins } from "next/font/google";
import Footer from "@/components/Footer";
import Script from "next/script";

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
    url: "https://maria-cars.com",
    title: "Maria Cars | Home - Best Car Fitting Services In Thoothukudi",
    description:
      "Maria Cars provides high-quality car fitting services. We are a reliable auto modification and fitting shop offering affordable plans and offers. Visit us for the best car fitting near you and our company is situated in Thoothukudi.",
    images: [
      {
        url: "https://maria-cars.com/favicon.ico",
        width: 800,
        height: 600,
        alt: "logo",
      },
    ],
    site_name: "Maria Cars - Best Car Fitting Services In Thoothukudi",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="hVkKiZkjc_fsboNJr30P7zyl9ol28yApUVsIw4epA-A"
        />
        {/* Google Console */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-RXNTCD26MP"
        ></Script>

        {/* Google Analytics */}
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-RXNTCD26MP');
        `}
        </Script>

        {/* Facebook Pixel */}
        <Script id="facebook-pixel" strategy="lazyOnload">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '954470865890501');
            fbq('track', 'PageView');
          `}
        </Script>
      </head>
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
