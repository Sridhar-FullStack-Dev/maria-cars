import gsap from "gsap";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

// Icons
import { IoCallOutline } from "react-icons/io5";
import { SiFacebook, SiInstagram } from "react-icons/si";

export default function Contacts() {
  const contactLogoRef = useRef();

  useEffect(() => {
    gsap.to(contactLogoRef.current, {
      rotation: 360,
      ease: "power1.inOut",
      duration: 10,
      repeat: -1,
    });
  }, []);

  return (
    <section
      id="contacts"
      className="contacts-font px-8 pt-10 overflow-hidden bg-white text-[#DC2C2C]"
    >
      <div className="flex justify-between items-center">
        <div className="w-1/3">
          <div className="relative bg-[#DC2C2C] h-36 w-36 rounded-full">
            <Image
              ref={contactLogoRef}
              src={"/assets/circle-logo.png"}
              alt="Maria Cars & Fitting"
              height={1000}
              width={1000}
              className="w-36 rounded-full pointer-events-none"
            />

            <div className="text-4xl absolute top-6 left-9 hero-font">
              <Image
                src={"/assets/M.png"}
                alt=""
                height={500}
                width={500}
                className="w-20"
              />
            </div>
          </div>
        </div>

        <div className="w-2/3 flex justify-between items-start">
          <div className="w-64 overflow-hidden">
            <motion.div
              initial={{
                background: "#FFF",
                color: "#DC2C2C",
                border: "1px solid #DC2C2C",
              }}
              whileHover={{
                background: "#DC2C2C",
                color: "#FFF",
                border: "1px solid #FFF",
              }}
              transition={{ ease: "easeInOut", duration: 0.3 }}
              className="p-4"
            >
              <Link
                href={"/"}
                className="flex justify-center items-center gap-4"
              >
                <SiInstagram className="text-3xl" />
                <p>Instagram</p>
              </Link>
            </motion.div>
          </div>

          <div className="w-64 overflow-hidden">
            <motion.div
              initial={{
                background: "#FFF",
                color: "#DC2C2C",
                border: "1px solid #DC2C2C",
              }}
              whileHover={{
                background: "#DC2C2C",
                color: "#FFF",
                border: "1px solid #FFF",
              }}
              transition={{ ease: "easeInOut", duration: 0.3 }}
              className="p-4"
            >
              <Link
                href={"/"}
                className="flex justify-center items-center gap-4"
              >
                <SiFacebook className="text-3xl" />
                <p>Facebook</p>
              </Link>
            </motion.div>
          </div>

          <div className="w-64 overflow-hidden">
            <motion.div
              initial={{
                background: "#FFF",
                color: "#DC2C2C",
                border: "1px solid #DC2C2C",
              }}
              whileHover={{
                background: "#DC2C2C",
                color: "#FFF",
                border: "1px solid #FFF",
              }}
              transition={{ ease: "easeInOut", duration: 0.3 }}
              className="p-4"
            >
              <Link
                href={"/"}
                className="flex justify-center items-center gap-4"
              >
                <IoCallOutline className="text-3xl" />
                <p>Call us</p>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Google Map */}
      <div className="w-full mt-16 opacity-[0.7]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3942.6946955011767!2d78.13878727421266!3d8.814725591238314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b03ef97c147cd25%3A0x2c96409bb5c32342!2sMaria%20car%20jewels!5e0!3m2!1sen!2sin!4v1711091433776!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowfullscreen="true"
          loading="lazy"
          className="w-full h-64 rounded-3xl object-cover"
        ></iframe>
      </div>

      {/* Contact Marquee */}
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
