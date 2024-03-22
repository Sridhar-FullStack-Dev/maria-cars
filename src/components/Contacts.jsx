import { motion } from "framer-motion";
import Image from "next/image";

export default function Contacts() {

  return (
    <section className="contacts-font px-8 pt-10 overflow-hidden bg-white text-[#DC2C2C]">
      <div>

        <motion.div
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, duration: 40, ease: "easeOut" }}
          className="flex items-center gap-4 text-2xl mt-12 tracking-wider footer-font relative uppercase"
        >
          {contactMarquee.map((marquee1, key1) => (
            <div
              key={key1}
              className="whitespace-nowrap flex gap-2 items-center justify-center"
            >
              <Image
                src={"/assets/contacts/shape.svg"}
                alt=""
                height={20}
                width={20}
                className="h-3 w-3"
              />
              {marquee1.content}
            </div>
          ))}
          {contactMarquee.map((marquee2, key2) => (
            <div
              key={key2}
              className="whitespace-nowrap flex gap-2 items-center justify-center"
            >
              <Image
                src={"/assets/contacts/shape.svg"}
                alt=""
                height={20}
                width={20}
                className="h-3 w-3"
              />
              {marquee2.content}
            </div>
          ))}
          {contactMarquee.map((marquee3, key3) => (
            <div
              key={key3}
              className="whitespace-nowrap flex gap-2 items-center justify-center"
            >
              <Image
                src={"/assets/contacts/shape.svg"}
                alt=""
                height={20}
                width={20}
                className="h-3 w-3"
              />
              {marquee3.content}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

const contactMarquee = [
  {
    content: "Automatic Car Wash",
  },
  {
    content: "Luxury Seats",
  },
  {
    content: "Customizable RGB Lights",
  },
  {
    content: "Varities Of Imported Horns",
  },
  {
    content: "Top Notch Bass & Woofers",
  },
  {
    content: "Maria Cars",
  },
];
