"use client";
import gsap from "gsap";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { Poppins } from "next/font/google";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLenis } from "@studio-freight/react-lenis";

// Icons
import { IoCallOutline } from "react-icons/io5";
import { SiFacebook, SiYoutubeshorts, SiInstagram } from "react-icons/si";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700", "600", "500", "400", "300", "200", "100"],
});

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerParallaxRef = useRef(null);
  const year = new Date().getFullYear();

  useEffect(() => {
    gsap.to(footerParallaxRef.current, {
      y: 200,
      ease: "power1.inOut",
      delay: 0.3,
      scrollTrigger: {
        trigger: footerParallaxRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  // Lenis
  const lenis = useLenis();

  return (
    <motion.footer
      initial={{ background: "#FFF" }}
      whileInView={{ background: "#DC2C2C" }}
      transition={{ ease: "linear", duration: 2 }}
      className="footer-font px-8 pt-16 rounded-t-3xl text-white relative overflow-hidden"
    >
      <div className="flex justify-between items-center pr-8">
        <div className="text-5xl relative z-20">
          <h1 className="mt-8">Upgrade Your Ride</h1>
          <h1 className="mt-8">Start Fitting your cars !</h1>
        </div>

        <div className="sm:h-20 md:h-36 sm:w-20 md:w-36 rounded-full">
          <div className="relative bg-red-600 sm:h-20 md:h-36 sm:w-20 md:w-36 rounded-full">
            <Image
              src={"/assets/circle-logo.png"}
              alt="Maria Cars & Fitting"
              height={1000}
              width={1000}
              className="sm:w-20 md:w-36 rounded-full pointer-events-none"
            />

            <div className="text-4xl absolute sm:top-4 md:top-6 sm:left-[1.3rem] md:left-9 hero-font">
              <Image
                src={"/assets/M.png"}
                alt=""
                height={500}
                width={500}
                className="sm:w-10 md:w-20 pointer-events-none"
              />
            </div>
          </div>
        </div>
      </div>

      <div
        ref={footerParallaxRef}
        className="footer-font sm:text-7xl md:text-8xl absolute top-0 left-0 opacity-5 z-10"
      >
        <h1 className="mt-8">Upgrade Your Ride</h1>
        <h1 className="mt-8">Start Fitting your cars !</h1>
      </div>

      <div className="w-full flex sm:flex-col md:flex-row sm:gap-6 md:gap-0 justify-between items-start text-[14px] sm:mt-8 md:mt-32 relative z-20">
        <div>
          <h1>Address</h1>
          <div className={`${poppins.className} font-light text-[12px] mt-2`}>
            <p>113/3 Polpettai, Near New Bus Stand,</p>
            <p>Opposite to perison plaza,</p>
            <p>Thoothukudi-2, IND.</p>
          </div>
        </div>

        <div>
          <h1>Menus</h1>
          <div
            className={`${poppins.className} font-light text-[12px] flex flex-col justify-center gap-2 mt-2`}
          >
            {footerLink.map((link, linkKey) => (
              <Link
                key={linkKey}
                href={link.href}
                onClick={() => lenis.scrollTo(`${link.href}`, { lerp: 0.02 })}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h1>Terms & Conditions</h1>
          <div className={`${poppins.className} font-light text-[12px] mt-2`}>
            <p>Exciting offers ends soon!</p>
            <p>Data Privacy Check.</p>
            <p>This Website Contains Cookie.</p>
          </div>
        </div>

        <div className="pr-2">
          <h1>Links</h1>

          <div
            className={`${poppins.className} font-light mt-2 flex justify-start items-center gap-4 text-xl`}
          >
            {footerSocialsLink.map((footerSocials, footerSocialsKey) => (
              <Link
                key={footerSocialsKey}
                href={footerSocials.href}
                title={footerSocials.title}
                className="flex items-center justify-center gap-2"
              >
                <footerSocials.icon />
              </Link>
            ))}
          </div>

          <div className={`${poppins.className} font-light text-sm mt-2`}>
            <Link
              href={"tel:+919443041599"}
              className="flex items-center justify-center gap-2"
            >
              <IoCallOutline /> +91 94430 41599
            </Link>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center sm:text-[10px] text-xs mt-8 pt-10 pb-5 whitespace-nowrap">
        <div
          className={`${poppins.className} flex items-center justify-center`}
        >
          Design by{" "}
          <Link
            href={"https://sridhar-portfolio-ashen.vercel.app/"}
            target="_blank"
            className="footer-font ml-2"
          >
            Sridhar E.
          </Link>
        </div>

        <div
          className={`${poppins.className} flex items-center justify-center`}
        >
          copyright <div className="footer-font mx-2">Magnet-X</div>
          {year}
        </div>
      </div>
    </motion.footer>
  );
}

const footerLink = [
  {
    href: "#home",
    name: "Home",
  },
  {
    href: "#about",
    name: "About",
  },
  {
    href: "#services",
    name: "Services",
  },
  {
    href: "#featured-products",
    name: "Featured Products",
  },
  {
    href: "#contacts",
    name: "Contacts",
  },
];

const footerSocialsLink = [
  {
    href: "https://www.facebook.com/people/Maria-CarsExtra-Fittings/61557471537791/?mibextid=ZbWKwL",
    title: "Facebook",
    icon: SiFacebook,
  },
  {
    href: "https://www.instagram.com/mariacars_tuty?igsh=MTIxNTdpdjIyMXRtcA==",
    title: "Instagram",
    icon: SiInstagram,
  },
  {
    href: "/",
    title: "YT Shorts",
    icon: SiYoutubeshorts,
  },
];
