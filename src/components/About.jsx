"use client";
import gsap from "gsap";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const circleLogoRef = useRef(null);
  const circleLogoParallaxRef = useRef(null);

  useEffect(() => {
    gsap.to(circleLogoRef.current, {
      rotation: 360, 
      ease: "power1.inOut",
      duration: 10,
      repeat: -1,
    });
  }, []);
  

  useEffect(() => {
    gsap.to(circleLogoParallaxRef.current, {
      x: -50,
      y: 200,
      scrollTrigger: {
        trigger: circleLogoParallaxRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <section
      id="about"
      className="px-8 py-16 rounded-t-3xl overflow-hidden text-red-600 h-screen"
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
                ease: "easeInOut", duration: 1, delay: 0.5
              }}
              className="mt-1 h-1 w-96 bg-red-600"
            ></motion.div>
          </div>
        </div>

        <div ref={circleLogoParallaxRef} className="relative">
          <Image
            ref={circleLogoRef}
            src={"/assets/circle-logo.png"}
            alt="Maria Cars & Fitting"
            height={1000}
            width={1000}
            className="w-36 pointer-events-none"
          />

          <div className="text-4xl absolute top-10 left-10 hero-font">M</div>
        </div>
      </div>
    </section>
  );
}
