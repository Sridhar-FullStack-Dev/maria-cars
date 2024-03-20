"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="bg-red-600 px-4 py-16 overflow-hidden hero-font"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ ease: "linear", duration: 2 }}
      >
        <div className="text-6xl flex flex-col justify-center items-center font-light text-white whitespace-nowrap py-4">
          <div className="flex justify-center items-center gap-4">
            The Best <span className="font-bold">Car Fitting</span>
          </div>
          <div className="flex items-center justify-center gap-4 mt-4">
            Company In <span className="font-bold">Thoothukudi.</span>
          </div>
        </div>
      </motion.div>

      <div className="px-4 mt-10">
        <video
          src="/assets/video2.mp4"
          autoPlay
          muted
          loop
          className="h-96 w-full object-cover rounded-t-[30px] pointer-events-none"
        >
          video advertisement
        </video>
      </div>
    </section>
  );
}
