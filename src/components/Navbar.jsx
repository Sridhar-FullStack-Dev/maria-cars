"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Poppins } from "next/font/google";
import { useLenis } from "@studio-freight/react-lenis";
import { motion, AnimatePresence } from "framer-motion";

// Icons
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { BiSolidOffer } from "react-icons/bi";
import { IoIosCall, IoMdClose } from "react-icons/io";
import { SiFacebook, SiYoutubeshorts, SiInstagram } from "react-icons/si";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700", "600", "500", "400", "300", "200", "100"],
});

export default function Navbar() {
  const [isClicked, setIsClicked] = useState(null);
  const [isHovered, setIsHovered] = useState(null);
  const [isNewsToggle, setIsNewsToggle] = useState(true);
  const [isMenuToggle, setIsMenuToggle] = useState(false);

  // Lenis
  const lenis = useLenis();

  return (
    <>
      <nav className="sticky top-0 z-[99] shadow-sm">
        {isNewsToggle && (
          <div className="h-9 w-full bg-white flex justify-center items-center gap-4 sm:text-[8px] md:text-xs relative border border-red-600">
            <div className="h-5 sm:px-2 md:px-4 py-3 flex justify-center items-center gap-1 bg-red-600 text-white rounded-full">
              New Offers{" "}
              <BiSolidOffer className="sm:text-lg md:text-xl text-white" />
            </div>

            <div className="text-red-600 whitespace-nowrap">
              Exciting offers awaits only for you{" "}
              <Link href={"tel:+919443041599"} className="underline">
                Contact Now.
              </Link>
            </div>

            <div
              onClick={() => setIsNewsToggle(!isNewsToggle)}
              className="absolute sm:top-[13px] md:top-3 right-5 text-red-600"
            >
              <FaTimes />
            </div>
          </div>
        )}

        {/* Navbar */}
        <div className="flex justify-between items-center py-2 sm:px-4 md:px-8 bg-white text-sm">
          <div>
            <Image
              src={"/assets/logo.png"}
              alt="Maria Cars"
              height={100}
              width={100}
              className="sm:w-8 md:w-9"
            />
          </div>

          <div className="flex justify-center items-center sm:hidden md:flex">
            <div className="flex items-center justify-between gap-4">
              {navMenu.map((menu, menuKey) => (
                <Link
                  key={menuKey}
                  href={menu.href}
                  onClick={() => {
                    lenis.scrollTo(`${menu.href}`, { lerp: 0.02 });
                    setIsClicked(menuKey);
                  }}
                  onMouseEnter={() => setIsHovered(menuKey)}
                  onMouseLeave={() => setIsHovered(null)}
                  className="hover:text-red-600 transition-all duration-200 ease-linear"
                >
                  {menu.name}

                  {isHovered === menuKey ? (
                    isClicked === menuKey ? null : (
                      <div className="px-1">
                        <div className="h-[2px] w-full bg-gradient-to-r from-red-400 to-red-300"></div>
                      </div>
                    )
                  ) : null}

                  {isClicked === menuKey && (
                    <div className="px-1">
                      <div className="h-[2px] w-full bg-gradient-to-r from-red-400 to-red-300"></div>
                    </div>
                  )}
                </Link>
              ))}
            </div>
          </div>

          <div className="sm:hidden md:block">
            <Link
              href={"tel:+919443041599"}
              className="bg-red-600 px-3 py-2 flex items-center justify-center gap-2 text-white sm:text-[8px] md:text-[14px] rounded-full hover:bg-red-400 transition-all ease-linear duration-150"
            >
              <IoIosCall />
              Call now
            </Link>
          </div>

          <div
            className="text-[#DC2C2C] text-2xl md:hidden"
            onClick={() => setIsMenuToggle(!isMenuToggle)}
          >
            <CiMenuFries />
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuToggle && (
          <motion.nav
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ ease: "easeInOut", duration: 0.8 }}
            className="hero-font fixed top-0 right-0 w-full h-screen text-[#DC2C2C] bg-white z-[999] md:hidden"
          >
            <div className="p-6">
              <div className="flex justify-between items-center">
                <h1 className="underline">Menus</h1>
                <IoMdClose
                  className="text-xl"
                  onClick={() => setIsMenuToggle(false)}
                />
              </div>

              <div className="mt-8 whitespace-nowrap">
                {navMenu.map((mobileMenu, mobileMenuKey) => (
                  <div
                    key={mobileMenuKey}
                    className="flex items-center justify-start gap-2 mb-4"
                  >
                    <div className="h-3 w-3 bg-[#DC2C2C]"></div>
                    <div>
                      <Link
                        href={mobileMenu.href}
                        onClick={() => {
                          lenis.scrollTo(`${mobileMenu.href}`, { lerp: 0.02 });
                          setIsMenuToggle(false);
                        }}
                      >
                        {mobileMenu.name}
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-between items-center gap-4">
              <div className="h-[1px] w-full bg-red-600"></div>
              <div>
                <Image
                  src={"/assets/logo.png"}
                  alt="M"
                  height={200}
                  width={200}
                  className="w-48"
                />
              </div>
              <div className="h-[1px] w-full bg-red-600"></div>
            </div>

            <div className="mt-8 p-4">
              <Link href={"tel:+919443041599"} className="">
                +91 944-304-1599.
              </Link>

              <div
                className={`${poppins.className} w-32 text-sm text-justify mt-2 whitespace-nowrap`}
              >
                <p>113/3 Polpettai, Near New Bus Stand,</p>
                <p>Opposite to perison plaza,</p>
                <p>Thoothukudi-2, IND.</p>
              </div>

              <div className="flex items-center justify-normal gap-4 mt-4 text-2xl">
                {mobileNavLink.map((mobileLink, mobileLinkKey) => (
                  <Link key={mobileLinkKey} href={mobileLink.link}>
                    <mobileLink.icon />
                  </Link>
                ))}
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}

const navMenu = [
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

const mobileNavLink = [
  {
    link: "https://www.instagram.com/mariacars_tuty?igsh=MTIxNTdpdjIyMXRtcA==",
    icon: SiInstagram,
  },
  {
    link: "https://www.facebook.com/people/Maria-CarsExtra-Fittings/61557471537791/?mibextid=ZbWKwL",
    icon: SiFacebook,
  },
  {
    link: "/",
    icon: SiYoutubeshorts,
  },
];
