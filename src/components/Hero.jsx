import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="bg-main px-4 py-16 rounded-b-3xl overflow-hidden hero-font"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "linear", duration: 2 }}
      >
        <div className="sm:text-base md:text-4xl lg:text-6xl flex flex-col justify-center items-center font-light text-white whitespace-nowrap md:py-4">
          <div className="flex justify-center items-center sm:gap-2 md:gap-4">
            The Best <span className="font-bold">Car Fitting</span>
          </div>
          <div className="flex items-center justify-center sm:gap-2 md:gap-4 md:mt-4">
            Company In <span className="font-bold">Thoothukudi</span>
          </div>
        </div>
      </motion.div>

      <div className="px-4 mt-10">
        <video
          src="/assets/video2.mp4"
          autoPlay
          muted
          loop
          className="h-[26rem] w-full object-cover rounded-t-[30px] pointer-events-none"
        >
          video advertisement
        </video>
      </div>
    </section>
  );
}
