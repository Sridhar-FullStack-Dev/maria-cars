import { motion } from "framer-motion";
import SwiperJS from "./Mini Components/SwiperJS";

export default function Services() {
  return (
    <motion.section
      initial={{ background: "#FFF", color: "#FFF" }}
      whileInView={{ background: "#DC2C2C", color: "#FFF" }}
      transition={{ ease: "linear", duration: 2 }}
      id="about"
      className="h-screen px-8 py-16 overflow-hidden"
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
            <div className="h-1 w-full bg-white"></div>
          </div>

          <motion.p
            initial={{ opacity: 0, x: "-20px" }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ ease: "easeInOut", duration: 1, delay: 2 }}
            className="mt-8 w-96 text-sm text-justify"
          >
            We provide all types of fitting services for your car in a world
            class standards and we install stunning aesthetic elements,
            high-quality speakers, luxurious seats, powerful woofers, and
            premium imported horns to ensure your car isn't just a mode of
            transport, but a statement of style and comfort.
          </motion.p>
        </div>

        <div className="w-2/3">
          <SwiperJS />
        </div>
      </div>
    </motion.section>
  );
}
