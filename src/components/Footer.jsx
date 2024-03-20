import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ background: "#FFF" }}
      whileInView={{ background: "#DC2C2C" }}
      transition={{ ease: "linear", duration: 2 }}
      className="px-8 py-16 rounded-t-3xl text-white overflow-hidden"
    >
      <div className="footer-font text-6xl">
        <h1 className="mt-8">Upgrade Your Ride:</h1>
        <h1 className="mt-8">Start Fitting your cars</h1>
        <h1 className="mt-8">& Luxury Fittings !</h1>
      </div>
    </motion.footer>
  );
}
