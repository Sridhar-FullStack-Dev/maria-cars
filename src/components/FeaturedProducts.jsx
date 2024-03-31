import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// Icons
import { GoArrowUpRight } from "react-icons/go";

const FeaturedProducts = () => {
  return (
    <section id="featured-products" className="px-8 py-16 rounded-3xl">
      <motion.h1
        initial={{ opacity: 0, x: "-20px" }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ ease: "easeInOut", duration: 1, delay: 1 }}
        className="hero-font sm:text-4xl lg:text-4xl text-main"
      >
        Featured Products.
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 1, delay: 2 }}
        className="mt-1 h-1 sm:w-72 lg:w-[37rem] bg-main"
      ></motion.div>

      <div className="flex sm:flex-col md:flex-row justify-between items-center mt-10 gap-4">
        {/* 1 */}
        <div className="h-[34rem] sm:w-full md:w-1/4 bg-main text-white overflow-hidden">
          <div>
            <Image
              src="/assets/ft-products/horn-chrome.jpg"
              alt=""
              height={1000}
              width={1000}
              className="w-full h-44"
            />

            <div className="p-4">
              <h1 className="text-xl font-bold footer-font">
                HELLA Chrome Twin Tone Car Horn Set
              </h1>

              <div className="text-xs mt-4 flex flex-col gap-2">
                <li>Voltage: 12 Volts</li>
                <li>Frequency Range: 410-510 Hz</li>
                <li>Noise Level: 112 dB</li>
                <li>Style: Classic</li>
                <li>Material: Chromed ABS Plastic Housing</li>
                <li>Water & Dust Proof</li>
                <li>Highly Enduring</li>
                <li>Universal Fit for Passenger Cars</li>
              </div>
            </div>

            <div className="flex justify-between items-center px-4">
              <Link
                href={"/featured-products"}
                className="flex items-center justify-center gap-2 transition-all ease-in-out duration-500 bg-white text-main p-4 hover:text-black hover:underline text-sm"
              >
                view more <GoArrowUpRight className="text-lg" />
              </Link>
              <div></div>
            </div>
          </div>
        </div>

        {/* 2 */}
        <div className="h-[34rem] sm:w-full md:w-1/4 bg-main text-white overflow-hidden">
          <div>
            <Image
              src="/assets/ft-products/rat-protection.jpg"
              alt=""
              height={1000}
              width={1000}
              className="w-full h-44"
            />

            <div className="p-4">
              <h1 className="text-xl font-bold footer-font">
                Ultrasound Rat Repellent
              </h1>

              <div className="text-xs mt-4 flex flex-col gap-2">
                <li>Advanced & Improved</li>
                <li>Non-Hazardous: 100% Safe for your car.</li>
                <li>Easy Installation: Quick setup guide.</li>
                <li>Waterproof: Resistant to water jets/spray.</li>
                <li>Material: Chromed ABS Plastic Housing</li>
                <li>Water & Dust Proof</li>
                <li>Highly Enduring</li>
                <li>94% Efficacy: Keep rats away from your car.</li>
              </div>
            </div>

            <div className="flex justify-between items-center px-4">
              <Link
                href={"/featured-products"}
                className="flex items-center justify-center gap-2 transition-all ease-in-out duration-500 bg-white text-main p-4 hover:text-black hover:underline text-sm"
              >
                view more <GoArrowUpRight className="text-lg" />
              </Link>
              <div></div>
            </div>
          </div>
        </div>

        {/* 3 */}
        <div className="h-[34rem] sm:w-full md:w-1/4 bg-main text-white overflow-hidden">
          <div>
            <Image
              src="/assets/ft-products/woofer-hypersonic.jpg"
              alt=""
              height={1000}
              width={1000}
              className="w-full h-44"
            />

            <div className="p-4">
              <h1 className="text-xl font-bold footer-font">
                Pioneer Car Subwoofers
              </h1>

              <div className="text-xs mt-4 flex flex-col gap-2">
                <li>TS-WX400DA: Compact</li>
                <li>TS-WX70DA: Advanced</li>
                <li>TS-WX130EA: Sealed</li>
                <li>Deep & Immersive</li>
                <li>Lot of varities</li>
                <li>Good bass</li>
                <li>Top notch sound quality</li>
                <li>Theater effect</li>
              </div>
            </div>

            <div className="flex justify-between items-center px-4">
              <Link
                href={"/featured-products"}
                className="flex items-center justify-center gap-2 transition-all ease-in-out duration-500 bg-white text-main p-4 hover:text-black hover:underline text-sm"
              >
                view more <GoArrowUpRight className="text-lg" />
              </Link>
              <div></div>
            </div>
          </div>
        </div>

        {/* 4 */}
        <div className="h-[34rem] sm:w-full md:w-1/4 bg-main text-white overflow-hidden">
          <div>
            <Image
              src="/assets/ft-products/laser-led.jpg"
              alt=""
              height={1000}
              width={1000}
              className="w-full h-44"
            />

            <div className="p-4">
              <h1 className="text-xl font-bold footer-font">
                Laser LED RGB Car Lights
              </h1>

              <div className="text-xs mt-4 flex flex-col gap-2">
                <li>Innovative Lighting</li>
                <li>Compact & Efficient</li>
                <li>Good Range</li>
                <li>Lot of colors</li>
                <li>Material: Chromed ABS Plastic Housing</li>
                <li>Water & Dust Proof</li>
                <li>Highly Enduring</li>
                <li>Universal Fit for Passenger Cars</li>
              </div>
            </div>

            <div className="flex justify-between items-center px-4">
              <Link
                href={"/featured-products"}
                className="flex items-center justify-center gap-2 transition-all ease-in-out duration-500 bg-white text-main p-4 hover:text-black hover:underline text-sm"
              >
                view more <GoArrowUpRight className="text-lg" />
              </Link>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;

const ftProducts = [
  {
    src: "horn-chrome.jpg",
    title: "HELLA Chrome Twin Tone Car Horn Set",
  },
  {
    src: "rat-protection.jpg",
    title: "HELLA Chrome Twin Tone Car Horn Set",
  },
  {
    src: "stuff-cool-1.jpg",
    title: "HELLA Chrome Twin Tone Car Horn Set",
  },
  {
    src: "horn-midnight-black.jpg",
    title: "HELLA Chrome Twin Tone Car Horn Set",
  },
];
