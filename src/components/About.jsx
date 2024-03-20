"use client";
import { motion } from "framer-motion";
import CircleLogo from "./CircleLogo";
import Image from "next/image";


export default function About() {

  return (
    <section
      id="about"
      className="relative px-8 py-16 rounded-t-3xl overflow-hidden text-red-600"
    >
      <div className="flex justify-between items-start gap-8">
        <div className="w-1/3">
          <div>
            <motion.h1
              initial={{ opacity: 0, x: "-40px" }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ ease: "easeInOut", duration: 1, delay: 0.5 }}
              className="hero-font text-5xl"
            >
              About Us.
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, x: "-40px" }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                ease: "easeInOut",
                duration: 1,
                delay: 0.5,
              }}
              className="mt-1 h-1 w-96 bg-red-600"
            ></motion.div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center w-full mt-8">
        <div className="w-1/2">
          <motion.p
            initial={{ opacity: 0, x: "-40px" }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ ease: "easeInOut", duration: 1, delay: 1 }}
            className="text-sm text-justify"
          >
            Welcome to our car fitting company in Tuticorin! Since 2004, we&apos;ve
            been dedicated to serving our community with excellence. With 25
            years of experience, we&apos;re the top choice for car fitting solutions.
            Our commitment to quality and customer satisfaction drives our
            success. Trust our skilled professionals to enhance your car&apos;s
            functionality, comfort, and aesthetics with precision and attention
            to detail. Experience superior results with our state-of-the-art
            technology and innovative solutions. Join our satisfied customers
            who rely on us for all their car fitting needs. Thank you for
            considering us. We&apos;re excited to continue serving you with
            excellence for years to come!
          </motion.p>
        </div>

        <div className="w-1/2"></div>
      </div>

      <CircleLogo />
    </section>
  );
}
