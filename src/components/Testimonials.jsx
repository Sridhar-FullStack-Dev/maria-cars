import { motion } from "framer-motion";
import TestimonialsSwiper from "./Mini Components/Testimonials";

// Icons
import { FaStar } from "react-icons/fa";

const Testimonials = () => {
  return (
    <motion.section
      initial={{ background: "#FFF" }}
      whileInView={{ background: "#DC2C2C" }}
      transition={{ ease: "linear", duration: 2 }}
      id="testimonials"
      className="p-8 rounded-3xl text-white overflow-hidden"
    >
      <div>
        <div className="mt-4">
          <div className="flex justify-between items-center">
            <h1 className="text-5xl uppercase w-[32rem] font-bold">
              Hear whats our customer says!
            </h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ ease: "easeInOut", duration: 1, delay: 1 }}
              className="sm:hidden md:flex justify-center items-center gap-4 text-white text-3xl mr-20"
            >
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </motion.div>
          </div>

          <p className="sm:w-80 md:w-[30rem] text-justify mt-4 text-sm">
            For the past 20 years, we have been dedicated to delivering top
            notch services to our valuable customers. Over time, we&apos;ve garnered
            a loyal base of satisfied customers. Here are some testimonials from
            a few of them!
          </p>
        </div>
        <TestimonialsSwiper />
      </div>
    </motion.section>
  );
};

export default Testimonials;
