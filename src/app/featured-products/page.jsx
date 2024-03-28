"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { Poppins } from "next/font/google";
import LatestProducts from "@/components/Mini Components/FeaturedProduct";

// Icons
import { GoArrowUpRight } from "react-icons/go";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700", "600", "500", "400", "300", "200", "100"],
});

export default function FeaturedProducts() {
  const [isHoveredFirst, setIsHoveredFirst] = useState(false);
  const [isHoveredSecond, setIsHoveredSecond] = useState(false);
  const [isHoveredThird, setIsHoveredThird] = useState(false);

  const [isLatestFirst, setIsLatestFirst] = useState(false);
  const [isLatestSecond, setIsLatestSecond] = useState(null);
  const [isLatestThird, setIsLatestThird] = useState(false);

  return (
    <main>
      <section className="hero-font overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 1 }}
          className="bg-[#DC2C2C] text-white text-center py-4 sm:text-4xl md:text-7xl"
        >
          <h1>Featured Product</h1>
        </motion.div>

        {/* featured Marquee */}
        <div className="mt-4 overflow-hidden">
          <motion.div
            animate={{ x: "-100%" }}
            transition={{ repeat: Infinity, duration: 40, ease: "easeOut" }}
            className="flex items-center gap-4 sm:text-xl md:text-2xl text-[#DC2C2C] tracking-wider footer-font relative uppercase"
          >
            {featuredMarquee.map((featuredMarquee1, featuredkey1) => (
              <div
                key={featuredkey1}
                className="whitespace-nowrap flex gap-2 items-center justify-center"
              >
                <Image
                  src={"/assets/ft-products/offer.png"}
                  alt=""
                  height={20}
                  width={20}
                  className="sm:h-7 md:h-8 sm:w-7 md:w-8 sm:ml-7 md:ml-8"
                />
                {featuredMarquee1.content}
              </div>
            ))}
            {featuredMarquee.map((featuredMarquee2, featuredkey2) => (
              <div
                key={featuredkey2}
                className="whitespace-nowrap flex gap-2 items-center justify-center"
              >
                <Image
                  src={"/assets/ft-products/offer.png"}
                  alt=""
                  height={20}
                  width={20}
                  className="sm:h-7 md:h-8 sm:w-7 md:w-8 sm:ml-7 md:ml-8"
                />
                {featuredMarquee2.content}
              </div>
            ))}
            {featuredMarquee.map((featuredMarquee3, featuredkey3) => (
              <div
                key={featuredkey3}
                className="whitespace-nowrap flex gap-2 items-center justify-center"
              >
                <Image
                  src={"/assets/ft-products/offer.png"}
                  alt=""
                  height={20}
                  width={20}
                  className="sm:h-7 md:h-8 sm:w-7 md:w-8 sm:ml-7 md:ml-8"
                />
                {featuredMarquee3.content}
              </div>
            ))}
          </motion.div>
        </div>

        <div className="sm:px-8 md:px-0 py-8 footer-font">
          <LatestProducts />
        </div>

        {/* Products Category */}
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 1 }}
          >
            <h1 className="text-center sm:text-4xl md:text-7xl text-[#DC2C2C]">
              Products categories
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "100%" }}
            transition={{ ease: "easeInOut", duration: 1 }}
            className="h-1 bg-[#DC2C2C] mb-4 sm:mt-4 md:mt-8"
          ></motion.div>

          <div className="p-8 footer-font">
            <div className="flex sm:flex-col md:flex-row w-full justify-center items-center gap-4">
              <motion.div
                onMouseEnter={() => setIsHoveredFirst(true)}
                onMouseLeave={() => setIsHoveredFirst(false)}
                className={`p-4 bg-[#DC2C2C] overflow-hidden text-white sm:h-96 sm:w-72 transition-all ease-in-out duration-500 ${
                  isHoveredFirst ? "md:w-[40rem]" : "md:w-72"
                }`}
              >
                <div className="flex justify-between items-center gap-4 whitespace-nowrap">
                  <h1 className="sm:text-[10px] md:text-base">
                    Imported Horns
                  </h1>

                  <div
                    className={`flex justify-center items-center gap-1 transition-all ease-in-out duration-500 ${
                      isHoveredFirst ? "md:flex" : "md:hidden"
                    }`}
                  >
                    <div className="sm:text-[8px] md:text-xs flex items-center justify-center gap-2">
                      for more{" "}
                      <Image
                        src={"/assets/ft-products/arrow.svg"}
                        alt=""
                        height={500}
                        width={500}
                        className="sm:w-5 md:w-9"
                      />
                    </div>
                    <Link
                      href={"tel:+919443041599"}
                      className="px-3 py-2 text-white sm:text-[8px] md:text-[12px]"
                    >
                      Call now
                    </Link>
                  </div>
                </div>

                <div className="flex sm:flex-col md:flex-row sm:justify-center md:justify-start items-start gap-4">
                  <Image
                    src={
                      "https://images.pexels.com/photos/6527701/pexels-photo-6527701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    }
                    alt=""
                    height={1000}
                    width={1000}
                    className="sm:w-40 md:w-72"
                  />
                  <p
                    className={`${poppins.className} text-sm text-justify sm:mt-4 md:mt-8 overflow-hidden`}
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fugit dolor minima sapiente pariatur, officiis vitae
                    voluptatem sunt sequi velit molestias iusto inventore, error
                    consequatur vero quidem omnis quisquam recusandae aperiam?
                  </p>
                </div>
              </motion.div>

              <motion.div
                onMouseEnter={() => setIsHoveredSecond(true)}
                onMouseLeave={() => setIsHoveredSecond(false)}
                className={`p-4 bg-[#DC2C2C] overflow-hidden text-white sm:h-96 sm:w-72 transition-all ease-in-out duration-500 ${
                  isHoveredSecond ? "md:w-[40rem]" : "md:w-72"
                }`}
              >
                <div className="flex justify-between items-center gap-4 whitespace-nowrap">
                  <h1 className="sm:text-[10px] md:text-base">
                    Imported Horns
                  </h1>

                  <div
                    className={`flex justify-center items-center gap-1 transition-all ease-in-out duration-500 ${
                      isHoveredSecond ? "md:flex" : "md:hidden"
                    }`}
                  >
                    <div className="sm:text-[8px] md:text-xs flex items-center justify-center gap-2">
                      for more{" "}
                      <Image
                        src={"/assets/ft-products/arrow.svg"}
                        alt=""
                        height={500}
                        width={500}
                        className="sm:w-5 md:w-9"
                      />
                    </div>
                    <Link
                      href={"tel:+919443041599"}
                      className="px-3 py-2 text-white sm:text-[8px] md:text-[12px]"
                    >
                      Call now
                    </Link>
                  </div>
                </div>

                <div className="flex sm:flex-col md:flex-row sm:justify-center md:justify-start items-start gap-4">
                  <Image
                    src={
                      "https://images.pexels.com/photos/6527701/pexels-photo-6527701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    }
                    alt=""
                    height={1000}
                    width={1000}
                    className="sm:w-40 md:w-72"
                  />
                  <p
                    className={`${poppins.className} text-sm text-justify sm:mt-4 md:mt-8 overflow-hidden`}
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fugit dolor minima sapiente pariatur, officiis vitae
                    voluptatem sunt sequi velit molestias iusto inventore, error
                    consequatur vero quidem omnis quisquam recusandae aperiam?
                  </p>
                </div>
              </motion.div>

              <motion.div
                onMouseEnter={() => setIsHoveredThird(true)}
                onMouseLeave={() => setIsHoveredThird(false)}
                className={`p-4 bg-[#DC2C2C] overflow-hidden text-white sm:h-96 sm:w-72 transition-all ease-in-out duration-500 ${
                  isHoveredThird ? "md:w-[40rem]" : "md:w-72"
                }`}
              >
                <div className="flex justify-between items-center gap-4 whitespace-nowrap">
                  <h1 className="sm:text-[10px] md:text-base">
                    Imported Horns
                  </h1>

                  <div
                    className={`flex justify-center items-center gap-1 transition-all ease-in-out duration-500 ${
                      isHoveredThird ? "md:flex" : "md:hidden"
                    }`}
                  >
                    <div className="sm:text-[8px] md:text-xs flex items-center justify-center gap-2">
                      for more{" "}
                      <Image
                        src={"/assets/ft-products/arrow.svg"}
                        alt=""
                        height={500}
                        width={500}
                        className="sm:w-5 md:w-9"
                      />
                    </div>
                    <Link
                      href={"tel:+919443041599"}
                      className="px-3 py-2 text-white sm:text-[8px] md:text-[12px]"
                    >
                      Call now
                    </Link>
                  </div>
                </div>

                <div className="flex sm:flex-col md:flex-row sm:justify-center md:justify-start items-start gap-4">
                  <Image
                    src={
                      "https://images.pexels.com/photos/6527701/pexels-photo-6527701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    }
                    alt=""
                    height={1000}
                    width={1000}
                    className="sm:w-40 md:w-72"
                  />
                  <p
                    className={`${poppins.className} text-sm text-justify sm:mt-4 md:mt-8 overflow-hidden`}
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fugit dolor minima sapiente pariatur, officiis vitae
                    voluptatem sunt sequi velit molestias iusto inventore, error
                    consequatur vero quidem omnis quisquam recusandae aperiam?
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Latest Products */}
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 1 }}
          >
            <h1 className="text-center sm:text-4xl md:text-7xl text-[#DC2C2C]">
              Latest products
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "100%" }}
            transition={{ ease: "easeInOut", duration: 1 }}
            className="h-1 bg-[#DC2C2C] mb-4 sm:mt-4 md:mt-8"
          ></motion.div>

          <div className="p-8 footer-font">
            {/* Latest Products 1 */}
            <div className="flex sm:flex-col md:flex-row w-full justify-center items-center gap-4 mt-8">
              {latestProductsList1.map((LatestProduct1, LatestProductKey1) => (
                <div
                  key={LatestProductKey1}
                  onMouseEnter={() => setIsLatestFirst(LatestProductKey1)}
                  onMouseLeave={() => setIsLatestFirst(null)}
                >
                  <div className="p-4 bg-[#DC2C2C] overflow-hidden text-white sm:h-72 sm:w-72 transition-all ease-in-out duration-500 md:w-72 hover:md:w-[40rem]">
                    <div className="flex justify-between items-center gap-4 whitespace-nowrap">
                      <h1 className="sm:text-[10px] md:text-base">
                        {LatestProduct1.productName}
                      </h1>

                      <div
                        className={`flex justify-center items-center gap-1 transition-all ease-in-out duration-500 ${
                          isLatestFirst === LatestProductKey1
                            ? "md:flex"
                            : "md:hidden"
                        }`}
                      >
                        <div className="sm:text-[8px] md:text-xs flex items-center justify-center gap-2">
                          for more{" "}
                          <Image
                            src={"/assets/ft-products/arrow.svg"}
                            alt=""
                            height={500}
                            width={500}
                            className="sm:w-5 md:w-9"
                          />
                        </div>
                        <Link
                          href={"tel:+919443041599"}
                          className="px-3 py-2 text-white sm:text-[8px] md:text-[12px]"
                        >
                          Call now
                        </Link>
                      </div>
                    </div>

                    <div className="flex sm:flex-col md:flex-row sm:justify-center md:justify-start items-start gap-4">
                      <Image
                        src={`/assets/ft-products/${LatestProduct1.src}`}
                        alt=""
                        height={1000}
                        width={1000}
                        className="sm:w-40 md:w-72"
                      />
                      <p
                        className={`${poppins.className} text-sm text-justify sm:mt-4 md:mt-8 overflow-hidden`}
                      >
                        {LatestProduct1.productDetails}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Latest Products 2 */}
            <div className="flex sm:flex-col md:flex-row w-full justify-center items-center gap-4 mt-8">
              {latestProductsList2.map((LatestProduct2, LatestProductKey2) => (
                <div
                  key={LatestProductKey2}
                  onMouseEnter={() => setIsLatestSecond(LatestProductKey2)}
                  onMouseLeave={() => setIsLatestSecond(null)}
                >
                  <div className="p-4 bg-[#DC2C2C] overflow-hidden text-white sm:h-72 sm:w-72 transition-all ease-in-out duration-500 md:w-72 hover:md:w-[40rem]">
                    <div className="flex justify-between items-center gap-4 whitespace-nowrap">
                      <h1 className="sm:text-[10px] md:text-base">
                        {LatestProduct2.productName}
                      </h1>

                      <div
                        className={`flex justify-center items-center gap-1 transition-all ease-in-out duration-500 ${
                          isLatestSecond === LatestProductKey2
                            ? "md:flex"
                            : "md:hidden"
                        }`}
                      >
                        <div className="sm:text-[8px] md:text-xs flex items-center justify-center gap-2">
                          for more{" "}
                          <Image
                            src={"/assets/ft-products/arrow.svg"}
                            alt=""
                            height={500}
                            width={500}
                            className="sm:w-5 md:w-9"
                          />
                        </div>
                        <Link
                          href={"tel:+919443041599"}
                          className="px-3 py-2 text-white sm:text-[8px] md:text-[12px]"
                        >
                          Call now
                        </Link>
                      </div>
                    </div>

                    <div className="flex sm:flex-col md:flex-row sm:justify-center md:justify-start items-start gap-4">
                      <Image
                        src={`/assets/ft-products/${LatestProduct2.src}`}
                        alt=""
                        height={1000}
                        width={1000}
                        className="sm:w-40 md:w-72"
                      />
                      <p
                        className={`${poppins.className} text-sm text-justify sm:mt-4 md:mt-8 overflow-hidden`}
                      >
                        {LatestProduct2.productDetails}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* End */}
        <div className="sm:text-2xl md:text-3xl text-center mb-4">
          For more{" "}
          <Link
            href={"tel:+919443041599"}
            className="text-[#DC2C2C] flex items-center justify-center gap-4"
          >
            Contact us <GoArrowUpRight className="text-5xl" />
          </Link>
        </div>
      </section>
    </main>
  );
}

const featuredMarquee = [
  {
    content: "SALE",
  },
  {
    content: "SALE",
  },
  {
    content: "SALE",
  },
  {
    content: "SALE",
  },
  {
    content: "SALE",
  },
  {
    content: "SALE",
  },
  {
    content: "SALE",
  },
  {
    content: "SALE",
  },
];

const latestProductsList1 = [
  {
    productName: "Chrome Horn",
    src: "horn-chrome.jpg",
    productDetails:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit dolor minima sapiente pariatur, officiis vitae voluptatem sunt sequi velit molestias iusto inventore, error consequatur vero quidem omnis quisquam recusandae aperiam?",
  },
  {
    productName: "Imported Horn - Germany",
    src: "horn-germany.jpg",
    productDetails:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit dolor minima sapiente pariatur, officiis vitae voluptatem sunt sequi velit molestias iusto inventore, error consequatur vero quidem omnis quisquam recusandae aperiam?",
  },
  {
    productName: "Hella Horn",
    src: "horn-hella.jpg",
    productDetails:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit dolor minima sapiente pariatur, officiis vitae voluptatem sunt sequi velit molestias iusto inventore, error consequatur vero quidem omnis quisquam recusandae aperiam?",
  },
];

const latestProductsList2 = [
  {
    productName: "Rat Protection",
    src: "rat-protection.jpg",
    productDetails:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit dolor minima sapiente pariatur, officiis vitae voluptatem sunt sequi velit molestias iusto inventore, error consequatur vero quidem omnis quisquam recusandae aperiam?",
  },
  {
    productName: "Cool Stuffs",
    src: "stuff-cool-1.jpg",
    productDetails:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit dolor minima sapiente pariatur, officiis vitae voluptatem sunt sequi velit molestias iusto inventore, error consequatur vero quidem omnis quisquam recusandae aperiam?",
  },
  {
    productName: "LED Lasers",
    src: "laser-led.jpg",
    productDetails:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit dolor minima sapiente pariatur, officiis vitae voluptatem sunt sequi velit molestias iusto inventore, error consequatur vero quidem omnis quisquam recusandae aperiam?",
  },
];
