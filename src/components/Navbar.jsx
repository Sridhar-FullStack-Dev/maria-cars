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
import { VscFeedback } from "react-icons/vsc";
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
  const [isHomeHovered, setIsHomeHovered] = useState(null);
  const [isFeaturedHovered, setIsFeaturedHovered] = useState(null);

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

            <div className="text-main whitespace-nowrap">
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
            <div className="flex items-center justify-center">
              <Image
                src={"/assets/logo.png"}
                alt="Maria Cars"
                height={100}
                width={100}
                className="sm:w-4 md:w-5"
              />

              <div className="sm:text-xs md:text-sm">ARIA</div>
            </div>

            <div className="sm:text-[8px] md:text-xs">
              Cars & Extra Fittings
            </div>
          </div>

          {/* MenuItems */}
          <div className="flex justify-center items-center sm:hidden lg:flex">
            <div className="flex items-center justify-between gap-4">
              {/* Home */}
              <Link
                href={"/"}
                onMouseEnter={() => setIsHomeHovered(true)}
                onMouseLeave={() => setIsHomeHovered(null)}
                className="hover:text-red-600 transition-all duration-200 ease-linear"
              >
                Home
                {isHomeHovered ? (
                  <div className="px-1">
                    <div className="h-[2px] w-full bg-gradient-to-r from-red-400 to-red-300"></div>
                  </div>
                ) : null}
              </Link>

              {/* About, Services, Contacts */}
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

          {/* Contact & Feedback */}
          <div className="sm:hidden lg:flex items-center justify-center gap-4">
            <Link
              href={"tel:+919443041599"}
              className="bg-red-600 px-3 py-2 flex items-center justify-center gap-2 text-white sm:text-[8px] md:text-[14px] rounded-full hover:bg-red-400 transition-all ease-linear duration-150"
            >
              <IoIosCall />
              Call now
            </Link>

            <Link
              href={"https://forms.office.com/r/x2rmNmLSQ7"}
              target="_blank"
              className="bg-red-600 px-3 py-2 flex items-center justify-center gap-2 text-white sm:text-[8px] md:text-[14px] rounded-full hover:bg-red-400 transition-all ease-linear duration-150"
            >
              <VscFeedback />
              Give Feedback
            </Link>
          </div>

          {/* Hamburger */}
          <div
            className="text-main text-2xl lg:hidden"
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
            className="hero-font fixed top-0 right-0 w-full h-screen text-main bg-white z-[999] lg:hidden"
          >
            <div className="p-6">
              <div className="flex justify-between items-center">
                <h1 className="underline">Menus</h1>
                <IoMdClose
                  className="text-xl"
                  onClick={() => setIsMenuToggle(false)}
                />
              </div>

              <div className="mb-4">
                <div className="mt-8 whitespace-nowrap">
                  {/* Home */}
                  <div className="flex items-center justify-start gap-4">
                    <div className="h-3 w-3 bg-main"></div>
                    <Link href={"/"} onClick={() => setIsMenuToggle(false)}>
                      Home
                    </Link>
                  </div>

                  {/* About, Services, Contacts */}
                  {navMenu.map((mobileMenu, mobileMenuKey) => (
                    <div
                      key={mobileMenuKey}
                      className="flex items-center justify-start gap-4"
                    >
                      <div className="h-3 w-3 bg-main"></div>
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
                  ))}

                  {/* Feedback */}
                  <div className="flex items-center justify-start gap-4">
                    <div className="h-3 w-3 bg-main"></div>
                    <Link
                      href={"https://forms.office.com/r/x2rmNmLSQ7"}
                      onClick={() => setIsMenuToggle(false)}
                    >
                      Give us feedback
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center gap-4">
              <div className="h-[1px] w-full bg-main"></div>
              <div>
                <Image
                  src={"/assets/logo.png"}
                  alt="M"
                  height={200}
                  width={200}
                  className="w-48"
                />
              </div>
              <div className="h-[1px] w-full bg-main"></div>
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
    href: "#testimonials",
    name: "Testimonials",
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
