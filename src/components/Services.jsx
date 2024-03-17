import { motion } from "framer-motion";
import SwiperJS from "./Mini Components/SwiperJS";

export default function Services() {
  return (
    <motion.section
      initial={{ background: "#FFF", color: "#FFF" }}
      whileInView={{ background: "#DC2C2C", color: "#FFF" }}
      transition={{ ease: "linear", duration: 2 }}
      id="about"
      className="px-8 py-16 rounded-t-3xl overflow-hidden"
    >
      <div className="flex justify-between items-start gap-8">
        <div className="w-1/3">
          <div>
            <motion.h1
              initial={{ opacity: 0, x: "-20px" }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ ease: "easeInOut", duration: 1, delay: 1 }}
              className="hero-font text-5xl"
            >
              Services.
            </motion.h1>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 1, delay: 2 }}
              className="mt-1 h-1 w-full bg-white"
            ></motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, x: "-20px" }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ ease: "easeInOut", duration: 1, delay: 2 }}
            className="mt-8 w-96 text-sm text-justify"
          >
            We provide all types of fitting services for your car in a world
            class standards and we install stunning aesthetic elements&rsquo;
            high-quality speakers&rsquo; luxurious seats&rsquo; powerful
            woofers&rsquo; and premium imported horns to ensure your car
            isn&apos;t just a mode of transport&rsquo; but a statement of style
            and comfort.
          </motion.p>
        </div>

        <div className="w-2/3">
          <SwiperJS />
        </div>
      </div>

      <div className="mt-8 p-8 w-full bg-white text-red-600 flex justify-between items-center rounded-2xl">
        <div className="flex items-center justify-between">
          <div>50+</div>
          <div>20+</div>
          <div>30+</div>
        </div>

        <div></div>
      </div>
    </motion.section>
  );
}
