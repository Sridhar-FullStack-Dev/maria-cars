"use client";
import { PiSpeakerHifiFill } from "react-icons/pi";
import { motion } from "framer-motion";

export default function ServicesBanner() {
  return (
    <section className="mt-8 bg-red-600 py-4 w-full text-white overflow-hidden">
      <motion.div
        animate={{ x: "-100%" }}
        transition={{ repeat: Infinity, duration: 40, ease: "easeOut" }}
        className="flex items-center gap-4"
      >
        {ServiceBanner.map((service, serviceKey) => (
          <div
            key={serviceKey}
            className="flex items-center justify-center gap-2"
          >
            <div className="text-3xl">
              <PiSpeakerHifiFill />
            </div>
            <div className="text-lg whitespace-nowrap">{service.name}</div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

const ServiceBanner = [
  {
    name: "Woofers and Banners",
    icon: PiSpeakerHifiFill,
  },
  {
    name: "Woofers and Banners",
    icon: PiSpeakerHifiFill,
  },
  {
    name: "Woofers and Banners",
    icon: PiSpeakerHifiFill,
  },
  {
    name: "Woofers and Banners",
    icon: PiSpeakerHifiFill,
  },
  {
    name: "Woofers and Banners",
    icon: PiSpeakerHifiFill,
  },
  {
    name: "Woofers and Banners",
    icon: PiSpeakerHifiFill,
  },
  {
    name: "Woofers and Banners",
    icon: PiSpeakerHifiFill,
  },
  {
    name: "Woofers and Banners",
    icon: PiSpeakerHifiFill,
  },
  {
    name: "Woofers and Banners",
    icon: PiSpeakerHifiFill,
  },
  {
    name: "Woofers and Banners",
    icon: PiSpeakerHifiFill,
  },
];
