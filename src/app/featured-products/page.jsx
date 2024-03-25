"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import LatestProducts from "@/components/Mini Components/LatestProducts";

// Icons
import { MdOutlineArrowRightAlt } from "react-icons/md";

export default function FeaturedProducts() {
  const [isHoveredFirst, setIsHoveredFirst] = useState(false);
  const [isHoveredSecond, setIsHoveredSecond] = useState(false);
  const [isHoveredThird, setIsHoveredThird] = useState(false);

  return (
    <main>
      <section className="hero-font">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 1 }}
          className="bg-[#DC2C2C] text-white text-center py-4 text-7xl"
        >
          <h1>Featured Product</h1>
        </motion.div>

        {/* featured Marquee */}
        <div className="mt-4 overflow-hidden">
          <motion.div
            animate={{ x: "-100%" }}
            transition={{ repeat: Infinity, duration: 40, ease: "easeOut" }}
            className="flex items-center gap-4 text-2xl text-[#DC2C2C] tracking-wider footer-font relative uppercase"
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
                  className="h-8 w-8 ml-8"
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
                  className="h-8 w-8 ml-8"
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
                  className="h-8 w-8 ml-8"
                />
                {featuredMarquee3.content}
              </div>
            ))}
          </motion.div>
        </div>

        <div className="py-8 footer-font">
          <LatestProducts />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 1 }}
        >
          <h1 className="text-center text-7xl text-[#DC2C2C]">
            Products categories
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, width: 0 }}
          whileInView={{ opacity: 1, width: "100%" }}
          transition={{ ease: "easeInOut", duration: 1 }}
          className="h-1 bg-[#DC2C2C] mb-4 mt-8"
        ></motion.div>

        <div className="p-8 footer-font">
          <div className="flex w-full justify-center items-center gap-4">
            <motion.div
              initial={{ width: "20vw" }}
              whileHover={{ width: "40vw" }}
              transition={{ ease: "easeInOut", duration: 0.3 }}
              onMouseEnter={() => setIsHoveredFirst(true)}
              onMouseLeave={() => setIsHoveredFirst(false)}
              className="p-4 bg-[#DC2C2C] overflow-hidden text-white h-96 whitespace-nowrap"
            >
              <div className="flex justify-between items-center gap-4">
                <h1>Imported Horns</h1>
                {isHoveredFirst && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ ease: "easeInOut", duration: 0.3 }}
                    className="flex justify-center items-center gap-1"
                  >
                    <div className="text-[12px] flex items-center justify-center gap-1">
                      for more <MdOutlineArrowRightAlt className="text-3xl" />
                    </div>
                    <Link
                      href={"tel:+919443041599"}
                      className="bg-[#DC2C2C] px-3 py-2 text-white sm:text-[8px] md:text-[12px] rounded-full hover:bg-red-500 transition-all ease-linear duration-150"
                    >
                      Call now
                    </Link>
                  </motion.div>
                )}
              </div>

              <div>
                <Image
                  src={
                    "https://images.pexels.com/photos/6527701/pexels-photo-6527701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  }
                  alt=""
                  height={1000}
                  width={1000}
                  className="w-72"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ width: "20vw" }}
              whileHover={{ width: "40vw" }}
              transition={{ ease: "easeInOut", duration: 0.3 }}
              onMouseEnter={() => setIsHoveredSecond(true)}
              onMouseLeave={() => setIsHoveredSecond(false)}
              className="p-4 bg-[#DC2C2C] overflow-hidden text-white h-96 whitespace-nowrap"
            >
              <div className="flex justify-between items-center gap-4">
                <h1>Imported Horns</h1>
                {isHoveredSecond && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ ease: "easeInOut", duration: 0.3 }}
                    className="flex justify-center items-center gap-1"
                  >
                    <div className="text-[12px] flex items-center justify-center gap-1">
                      for more <MdOutlineArrowRightAlt className="text-3xl" />
                    </div>
                    <Link
                      href={"tel:+919443041599"}
                      className="bg-[#DC2C2C] px-3 py-2 text-white sm:text-[8px] md:text-[12px] rounded-full hover:bg-red-500 transition-all ease-linear duration-150"
                    >
                      Call now
                    </Link>
                  </motion.div>
                )}
              </div>

              <div>
                <Image
                  src={
                    "https://images.pexels.com/photos/6527701/pexels-photo-6527701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  }
                  alt=""
                  height={300}
                  width={300}
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ width: "20vw" }}
              whileHover={{ width: "40vw" }}
              transition={{ ease: "easeInOut", duration: 0.3 }}
              onMouseEnter={() => setIsHoveredThird(true)}
              onMouseLeave={() => setIsHoveredThird(false)}
              className="p-4 bg-[#DC2C2C] overflow-hidden text-white h-96 whitespace-nowrap"
            >
              <div className="flex justify-between items-center gap-4">
                <h1>Imported Horns</h1>
                {isHoveredThird && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ ease: "easeInOut", duration: 0.3 }}
                    className="flex justify-center items-center gap-1"
                  >
                    <div className="text-[12px] flex items-center justify-center gap-1">
                      for more <MdOutlineArrowRightAlt className="text-3xl" />
                    </div>
                    <Link
                      href={"tel:+919443041599"}
                      className="bg-[#DC2C2C] px-3 py-2 text-white sm:text-[8px] md:text-[12px] rounded-full hover:bg-red-500 transition-all ease-linear duration-150"
                    >
                      Call now
                    </Link>
                  </motion.div>
                )}
              </div>

              <div>
                <Image
                  src={
                    "https://images.pexels.com/photos/6527701/pexels-photo-6527701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  }
                  alt=""
                  height={300}
                  width={300}
                />
              </div>
            </motion.div>
          </div>
        </div>

        <div>
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
