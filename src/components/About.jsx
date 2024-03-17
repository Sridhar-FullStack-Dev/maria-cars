import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      initial={{ background: "#DC2C2C" }}
      whileInView={{ background: "#FFF" }}
      transition={{ ease: "linear", duration: 2 }}
      id="about"
      className="h-screen px-4 py-16 overflow-hidden"
    >
      About
    </motion.section>
  );
}
