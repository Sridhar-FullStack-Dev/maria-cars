import { motion } from "framer-motion";

export default function Services() {
  return (
    <motion.section
      initial={{ background: "#FFF", color: "#FFF" }}
      whileInView={{ background: "#DC2C2C", color: "#FFF" }}
      transition={{ ease: "linear", duration: 2 }}
      id="about"
      className="h-screen px-8 py-16 overflow-hidden"
    >
      <div className="flex justify-between items-center">
        <div className=" w-1/3">
          <h1 className="hero-font text-2xl">Services</h1>
          <p className="text-base">We provide all types of fitting services for your car</p>
        </div>

        <div className="w-2/3">Aron is smarter and intelligent</div>
      </div>
    </motion.section>
  );
}



