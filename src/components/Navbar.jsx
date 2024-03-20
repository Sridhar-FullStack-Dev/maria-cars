"use client";
import Link from "next/link";
import { useState } from "react";
import { useLenis } from "@studio-freight/react-lenis";

// Icons
import { FaTimes } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { BiSolidOffer } from "react-icons/bi";

export default function Navbar() {
  const [isClicked, setIsClicked] = useState(null);
  const [isHovered, setIsHovered] = useState(null);
  const [isNewsToggle, setIsNewsToggle] = useState(true);

  // Lenis
  const lenis = useLenis();

  return (
    <nav className="sticky top-0 z-[99] shadow-sm">
      {isNewsToggle && (
        <div className="h-9 w-full bg-white flex justify-center items-center gap-4 text-[12px] relative border border-red-600">
          <div className="h-5 px-4 py-3 flex justify-center items-center gap-1 bg-red-600 text-white rounded-full">
            New Offers <BiSolidOffer className="text-xl text-white" />
          </div>

          <div className="text-red-600">
            Exciting offers awaits only for you{" "}
            <Link href={"tel:+919443041599"} className="underline">
              Contact Now.
            </Link>
          </div>

          <div
            onClick={() => setIsNewsToggle(!isNewsToggle)}
            className="absolute top-3 right-5 text-red-600"
          >
            <FaTimes />
          </div>
        </div>
      )}

      {/* Navbar */}
      <div className="flex justify-between items-center py-2 px-8 bg-white text-sm">
        <div>Maria Cars</div>

        <div className="flex justify-center items-center">
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

        <div>
          <Link
            href={"tel:+919443041599"}
            className="bg-red-600 px-3 py-2 flex items-center justify-center gap-2 text-white text-[14px] rounded-full hover:bg-red-400 transition-all ease-linear duration-150"
          >
            <IoIosCall />
            Call now
          </Link>
        </div>
      </div>
    </nav>
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
