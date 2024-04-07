"use client";
import Link from "next/link";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { useEffect, useState } from "react";
import FTPreloader from "@/components/FTPreloader";
import { motion, AnimatePresence } from "framer-motion";
import LatestProducts from "@/components/Mini Components/FeaturedProduct";

// Icons
import Popup from "@/components/Popup/Popup";
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

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 7000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main>
      <AnimatePresence mode="wait">
        {isLoading && <FTPreloader />}
      </AnimatePresence>

      <Popup />
      <section className="hero-font overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 1 }}
          className="bg-main text-white text-center py-4 sm:text-4xl md:text-7xl"
        >
          <h1>Featured Product</h1>
        </motion.div>

        {/* featured Marquee */}
        <div className="mt-4 overflow-hidden">
          <motion.div
            animate={{ x: "-100%" }}
            transition={{ repeat: Infinity, duration: 40, ease: "easeOut" }}
            className="flex items-center gap-4 sm:text-xl md:text-2xl text-main tracking-wider footer-font relative uppercase"
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

        {/* Top Sliders */}
        <div className="sm:px-8 md:px-0 py-12 footer-font">
          <LatestProducts />
        </div>

        {/* Products Category */}
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 1 }}
          >
            <h1 className="text-center sm:text-4xl md:text-7xl text-main">
              Products categories
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "100%" }}
            transition={{ ease: "easeInOut", duration: 1 }}
            className="h-1 bg-main mb-4 sm:mt-4 md:mt-8"
          ></motion.div>

          <div className="p-8 footer-font">
            <div className="flex sm:flex-col md:flex-row w-full justify-center items-center gap-4">
              <motion.div
                onMouseEnter={() => setIsHoveredFirst(true)}
                onMouseLeave={() => setIsHoveredFirst(false)}
                className={`p-4 bg-main overflow-hidden text-white sm:h-fit md:h-96 sm:w-72 transition-all ease-in-out duration-500 ${
                  isHoveredFirst ? "md:w-[40rem]" : "md:w-72"
                }`}
              >
                <div className="flex justify-between items-center gap-4 whitespace-nowrap">
                  <h1 className="sm:text-[10px] md:text-base">
                    Car Accessories
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

                <div className="flex sm:flex-col md:flex-row sm:justify-center md:justify-start items-start gap-4 mt-4">
                  <Image
                    src={"/assets/ft-products/accessories-1.jpg"}
                    alt=""
                    height={1000}
                    width={1000}
                    className="sm:w-full md:w-72 sm:h-40 md:h-72 object-cover"
                  />
                  <p
                    className={`${poppins.className} text-sm text-justify sm:mt-4 md:mt-8 overflow-hidden`}
                  >
                    Step into a world of stunning car accessories and jewelry
                    that add a touch of glamour and style to your vehicle. Our
                    collection is designed to make your car look its absolute
                    best, with a range of beautiful options to choose from.
                    Whether it&apos;s sleek accents or sparkling embellishments, each
                    piece is crafted to enhance both the appearance and
                    functionality of your car.
                  </p>
                </div>
              </motion.div>

              <motion.div
                onMouseEnter={() => setIsHoveredSecond(true)}
                onMouseLeave={() => setIsHoveredSecond(false)}
                className={`p-4 bg-main overflow-hidden text-white sm:h-fit md:h-96 sm:w-72 transition-all ease-in-out duration-500 ${
                  isHoveredSecond ? "md:w-[40rem]" : "md:w-72"
                }`}
              >
                <div className="flex justify-between items-center gap-4 whitespace-nowrap">
                  <h1 className="sm:text-[10px] md:text-base">
                    Fittings & More
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

                <div className="flex sm:flex-col md:flex-row sm:justify-center md:justify-start items-start gap-4 mt-5">
                  <Image
                    src={"/assets/ft-products/hypersonic-1.jpg"}
                    alt=""
                    height={1000}
                    width={1000}
                    className="sm:w-full md:w-72 sm:h-40 md:h-72 object-cover"
                  />
                  <p
                    className={`${poppins.className} text-sm text-justify sm:mt-4 md:mt-8 overflow-hidden`}
                  >
                    Explore our enticing range of fittings, featuring
                    customizable RGB lights, premium woofers, luxurious seats,
                    and more. Tailor your vehicle to your exact preferences with
                    our customizable options, allowing you to create a truly
                    personalized driving experience. From vibrant lighting
                    options to immersive sound systems and indulgent seating
                    arrangements, our collection promises to elevate every
                    aspect of your journey.
                  </p>
                </div>
              </motion.div>

              <motion.div
                onMouseEnter={() => setIsHoveredThird(true)}
                onMouseLeave={() => setIsHoveredThird(false)}
                className={`p-4 bg-main overflow-hidden text-white sm:h-fit md:h-96 sm:w-72 transition-all ease-in-out duration-500 ${
                  isHoveredThird ? "md:w-[40rem]" : "md:w-72"
                }`}
              >
                <div className="flex justify-between items-center gap-4 whitespace-nowrap">
                  <h1 className="sm:text-[10px] md:text-base">
                    Imported Products
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

                <div className="flex sm:flex-col md:flex-row sm:justify-center md:justify-start items-start gap-4 mt-4">
                  <Image
                    src={"/assets/ft-products/horn-germany.jpg"}
                    alt=""
                    height={1000}
                    width={1000}
                    className="sm:w-full md:w-72 sm:h-40 md:h-72 object-cover"
                  />
                  <p
                    className={`${poppins.className} text-sm text-justify sm:mt-4 md:mt-8 overflow-hidden`}
                  >
                    Indulge in our selection of imported treasures sourced from
                    renowned destinations like Germany, Italy, and beyond.
                    Experience the pinnacle of automotive excellence with our
                    curated assortment of premium horns, seats, and more. From
                    the precision engineering of German craftsmanship to the
                    timeless elegance of Italian design, each product embodies
                    the essence of quality and sophistication.
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
            <h1 className="text-center sm:text-4xl md:text-7xl text-main">
              Latest products
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "100%" }}
            transition={{ ease: "easeInOut", duration: 1 }}
            className="h-1 bg-main mb-4 sm:mt-4 md:mt-8"
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
                  <div className="p-4 bg-main overflow-hidden text-white sm:h-fit md:h-80 sm:w-72 transition-all ease-in-out duration-500 md:w-72 hover:md:w-[40rem]">
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

                    <div className="flex sm:flex-col md:flex-row sm:justify-center md:justify-start items-start gap-4 mt-4">
                      <Image
                        src={`/assets/ft-products/${LatestProduct1.src}`}
                        alt=""
                        height={1000}
                        width={1000}
                        className="sm:w-full md:w-72 sm:h-40 md:h-52 object-cover"
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
                  <div className="p-4 bg-main overflow-hidden text-white sm:h-fit md:h-80 sm:w-72 transition-all ease-in-out duration-500 md:w-72 hover:md:w-[40rem]">
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

                    <div className="flex sm:flex-col md:flex-row sm:justify-center md:justify-start items-start gap-4 mt-4">
                      <Image
                        src={`/assets/ft-products/${LatestProduct2.src}`}
                        alt=""
                        height={1000}
                        width={1000}
                        className="sm:w-full md:w-72 sm:h-40 md:h-52 object-cover"
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
            className="text-main flex items-center justify-center gap-4"
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
      "Chrome horns are a popular accessory for cars due to their stylish design and loud sound. They are designed to be highly enduring, with water and dust proof properties. Chrome horns are ultra-reliable and look and sound like nothing else on the road. They use the most modern acoustic technology, ensuring safety in the hustle and bustle of traffic.",
  },
  {
    productName: "Imported Horn - Germany",
    src: "horn-germany.jpg",
    productDetails:
      "100% coper coil horn all cars. Royal Piston Mega Sonic Snail Horn This horn is known for its high durability and reliability, making it an ideal horn. It features a 100% copper coil and a high-quality diaphragm. The horn produces a blaring sound that can alert traffic to your vehicle. It's designed with an attractive look for visible mounting.",
  },
  {
    productName: "Hella Horn",
    src: "horn-hella.jpg",
    productDetails:
      "Hella's horns, trumpet horns, and air trumpet horns are designed and manufactured with German precision technology. They comply with strict ECE and OEM requirements, both in applications for passenger cars and commercial vehicles.",
  },
];

const latestProductsList2 = [
  {
    productName: "Rat Protection",
    src: "rat-protection.jpg",
    productDetails:
      "Ultrasound Rat Repellents These devices emit high-frequency sound waves that are unpleasant to rats, deterring them from entering your car. They are eco-friendly, non-hazardous, and use minimal energy. They are also waterproof, making them suitable for use in various weather conditions",
  },
  {
    productName: "Cool Stuffs",
    src: "stuff-cool-1.jpg",
    productDetails:
      "Dashboard Mounts: These holders are attached to the dashboard of the car. They offer a clear view of the phone without obstructing the windshield. Windshield Mounts: These holders are attached to the windshield using a suction cup.",
  },
  {
    productName: "LED Lasers",
    src: "laser-led.jpg",
    productDetails:
      "LED laser Lights Stage Laser This device offers a Northern Light Effect with RGB Sound Activated Disco Strobe Lighting. It comes with a remote control and is suitable for indoor events like birthdays, Halloween parties, karaoke nights, let's start your dance by fitting this device.",
  },
];
