"use client";
import Link from "next/link";
import { Inter, Poppins } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

// Icons
import { CiLock } from "react-icons/ci";
import { FaPlus } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { LuPlayCircle } from "react-icons/lu";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoShieldHalfSharp } from "react-icons/io5";
import { PiChatsCircleLight } from "react-icons/pi";
import { MdOutlineCollections } from "react-icons/md";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className={`${inter.className} bg-white bg-opacity-5 backdrop-blur-sm sticky top-0 z-[99] w-full`}>
      {/* Topbar */}
      <div className="flex justify-between items-center border border-gray-200 py-2 px-8 w-full">
        <div className="flex justify-start items-center gap-6 text-xl text-gray-200 w-1/3">
          <div className="flex gap-2">
            <div className="h-3 w-3 bg-gray-200 rounded-full"></div>
            <div className="h-3 w-3 bg-gray-200 rounded-full"></div>
            <div className="h-3 w-3 bg-gray-200 rounded-full"></div>
          </div>

          <div>
            <MdOutlineSpaceDashboard />
          </div>

          <div className="flex items-center gap-3 text-sm">
            <FaChevronLeft />
            <FaChevronRight />
          </div>
        </div>

        <div className="flex justify-center items-center gap-4 text-gray-200 w-1/3">
          <div className="text-lg">
            <IoShieldHalfSharp />
          </div>

          <div className="text-sm">
            <div className="bg-gray-100 text-gray-400 rounded-lg w-72 py-2 px-4 flex justify-between items-center">
              <div>
                <CiLock />
              </div>
              <div className="text-[12px]">https://maria-car.com</div>
              <div>
                <IoIosSearch />
              </div>
            </div>
          </div>
        </div>

        <div className="text-gray-300 flex justify-end items-center gap-4 w-1/3">
          <div>
            <FaPlus />
          </div>
          <div>
            <MdOutlineCollections />
          </div>
        </div>
      </div>

      <div
        className={`${poppins.className} px-8 py-4 flex justify-between items-center`}
      >
        <div>Logo</div>

        <div className="flex justify-center items-center gap-5">
          <AnimatePresence>
            {navMenu.map((menu, menuKey) => {
              const isActive = pathname === menu.href;
              return (
                <div
                  key={menuKey}
                  className="text-sm tracking-wide rounded-full flex justify-center items-center"
                >
                  <Link
                    href={menu.href}
                    class="overflow-hidden flex justify-center items-center w-32 py-4 px-12 h-12 bg-white text-black hover:text-white border border-red-600 rounded-full font-bold cursor-pointer relative z-10 group"
                  >
                    {menu.name}
                    <span class="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"></span>
                    <span class="absolute w-36 h-32 -top-8 -left-2 bg-red-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"></span>
                    <span class="absolute w-36 h-32 -top-8 -left-2 bg-red-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-left"></span>
                    <span class="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10">
                      {menu.name}
                    </span>
                  </Link>
                </div>
              );
            })}
          </AnimatePresence>

          <div className="py-4 px-12 border border-red-400 text-black text-sm tracking-wide rounded-full flex justify-center items-center">
            <Link
              href={"/"}
              className="font-bold flex justify-center items-center gap-4"
            >
              <div className="whitespace-nowrap">Watch Demo</div>
              <LuPlayCircle className="text-xl text-red-600" />
            </Link>
          </div>
        </div>

        <div className="flex justify-center items-center gap-4">
          <div className="p-4 rounded-full bg-red-600 text-white text-xl">
            <PiChatsCircleLight />
          </div>
          <div className="p-4 rounded-full bg-red-600 text-white text-xl">
            <RxHamburgerMenu />
          </div>
        </div>
      </div>
    </nav>
  );
}

const navMenu = [
  {
    href: "/",
    name: "Home",
    icon: "",
  },
  {
    href: "/about",
    name: "About",
    icon: "",
  },
  {
    href: "/services",
    name: "Services",
  },
  {
    href: "/contacts",
    name: "Contacts",
  },
];
