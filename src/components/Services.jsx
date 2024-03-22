"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import SwiperJS from "./Mini Components/SwiperJS";

export default function Services() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);

  const observer1 = useRef(null);
  const observer2 = useRef(null);
  const observer3 = useRef(null);
  const observer4 = useRef(null);

  useEffect(() => {
    observer1.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = ref1.current;
            const count = { val: 0 };

            gsap.to(count, {
              val: 25,
              duration: 2.5,
              delay: 1,
              roundProps: "val",
              onUpdate: () => {
                element.textContent = `${count.val} +`;
              },
              ease: "power1.inOut",
            });
            observer1.current.disconnect(); // Disconnect the observer after animation
          }
        });
      },
      { once: true }
    );

    observer1.current.observe(ref1.current);

    return () => {
      if (observer1.current) observer1.current.disconnect();
    };
  }, []);

  useEffect(() => {
    observer2.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = ref2.current;
            const count = { val: 0 };

            gsap.to(count, {
              val: 30,
              duration: 2.5,
              delay: 1,
              roundProps: "val",
              onUpdate: () => {
                element.textContent = `${count.val} +`;
              },
              ease: "power1.inOut",
            });
            observer2.current.disconnect(); // Disconnect the observer after animation
          }
        });
      },
      { once: true } // Add the once option
    );

    observer2.current.observe(ref2.current);

    return () => {
      if (observer2.current) observer2.current.disconnect();
    };
  }, []);

  useEffect(() => {
    observer3.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = ref3.current;
            const count = { val: 0 };

            gsap.to(count, {
              val: 25,
              duration: 2.5,
              delay: 1,
              roundProps: "val",
              onUpdate: () => {
                element.textContent = `${count.val} +`;
              },
              ease: "power1.inOut",
            });
            observer3.current.disconnect(); // Disconnect the observer after animation
          }
        });
      },
      { once: true } // Add the once option
    );

    observer3.current.observe(ref3.current);

    return () => {
      if (observer3.current) observer3.current.disconnect();
    };
  }, []);

  useEffect(() => {
    observer4.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = ref4.current;
            const count = { val: 0 };

            gsap.to(count, {
              val: 1000,
              duration: 2.5,
              delay: 1,
              roundProps: "val",
              onUpdate: () => {
                element.textContent = `${count.val} +`;
              },
              ease: "power1.inOut",
            });
            observer4.current.disconnect(); // Disconnect the observer after animation
          }
        });
      },
      { once: true } // Add the once option
    );

    observer4.current.observe(ref4.current);

    return () => {
      if (observer4.current) observer4.current.disconnect();
    };
  }, []);

  return (
    <motion.section
      initial={{ background: "#FFF" }}
      whileInView={{ background: "#DC2C2C" }}
      transition={{ ease: "linear", duration: 2 }}
      id="services"
      className="px-8 py-16 rounded-3xl text-white overflow-hidden"
    >
      <div className="flex sm:flex-col md:flex-row justify-between items-start gap-8">
        <div className="w-1/3">
          <div>
            <motion.h1
              initial={{ opacity: 0, x: "-20px" }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ ease: "easeInOut", duration: 1, delay: 1 }}
              className="hero-font sm:text-4xl md:text-5xl"
            >
              Services.
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 1, delay: 2 }}
              className="mt-1 h-1 sm:w-72 md:w-96 bg-white"
            ></motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, x: "-20px" }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ ease: "easeInOut", duration: 1, delay: 2 }}
            className="mt-8 sm:w-72 md:w-96 sm:text-xs md:text-sm text-justify"
          >
            We provide all types of fitting services for your car in a world
            class standards and we install stunning aesthetic elements,
            high-quality speakers, luxurious seats, powerful woofers, and
            premium imported horns to ensure your car isn&apos;t just a mode of
            transport, but a statement of style and comfort.
          </motion.p>
        </div>

        <div className="sm:w-full md:w-2/3">
          <SwiperJS />
        </div>
      </div>

      <div className="mt-8 p-8 w-full bg-white text-red-600 flex justify-between items-center rounded-2xl">
        <div className="flex sm:flex-col md:flex-row items-center justify-evenly w-full gap-4 hero-font sm:text-3xl md:text-6xl">
          <div className="w-60 overflow-hidden">
            <div ref={ref1} className="text-center">
              0 +
            </div>
            <p className="text-sm w-full text-center py-4">
              Cars Services / Day
            </p>
          </div>

          <div className="w-60 overflow-hidden">
            <div ref={ref2} className="text-center">
              0 +
            </div>
            <p className="text-sm w-full text-center py-4">Cars Washes / Day</p>
          </div>

          <div className="w-60 overflow-hidden">
            <div ref={ref3} className="text-center">
              0 +
            </div>
            <p className="text-sm w-full text-center py-4">Years Of Service</p>
          </div>

          <div className="w-fit overflow-hidden">
            <div ref={ref4} className="text-center">
              0 +
            </div>
            <p className="text-sm w-full text-center py-4">
              Cars Serviced / Month
            </p>
          </div>
        </div>

        <div></div>
      </div>
    </motion.section>
  );
}
