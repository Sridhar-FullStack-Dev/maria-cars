"use client";
import gsap from "gsap";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function About() {
  // const aboutHeadingRef = useRef(null);
  // const aboutHeadingRef2 = useRef(null);
  // const aboutParallaxRef = useRef(null);

  // useEffect(() => {
  //   const textElement = aboutHeadingRef.current;

  //   const tl = gsap.timeline();
  //   tl.to(textElement, { xPercent: -100, duration: 60, ease: "power1.inOut" });
  //   tl.repeat(-1);

  //   return () => {
  //     tl.kill();
  //   };
  // }, []);

  // useEffect(() => {
  //   const textElement = aboutHeadingRef2.current;

  //   const tl = gsap.timeline();
  //   tl.to(textElement, { xPercent: 100, duration: 100, ease: "power1.inOut" });
  //   tl.repeat(-1);

  //   return () => {
  //     tl.kill();
  //   };
  // }, []);

  // useEffect(() => {
  //   gsap.to(aboutParallaxRef.current, {
  //     y: -50,
  //     scrollTrigger: {
  //       trigger: aboutParallaxRef.current,
  //       start: "top bottom",
  //       end: "bottom top",
  //       scrub: 1,
  //     },
  //   });
  // }, []);

  return (
    <section
      id="about"
      className="relative px-8 py-16 rounded-t-3xl overflow-hidden text-red-600"
    >
      {/* <div ref={aboutParallaxRef}>
        <div
          ref={aboutHeadingRef}
          className="footer-font uppercase flex items-center justify-center gap-8"
        >
          {aboutHeader.map((aboutHeaders, aboutHeadersKey) => (
            <div
              key={aboutHeadersKey}
              className="flex justify-center items-center gap-4 text-2xl"
            >
              <Image
                src={`/assets/about/${aboutHeaders.image}.png`}
                alt=""
                height={200}
                width={200}
                className="sm:h-5 md:h-7 sm:w-5 md:w-7"
              />
              <div className="sm:text-xl md:text-3xl">
                {aboutHeaders.heading}&nbsp;
              </div>
            </div>
          ))}
        </div>

        <div
          ref={aboutHeadingRef2}
          className="footer-font uppercase flex items-center justify-center gap-8"
        >
          {aboutHeader.map((aboutHeaders2, aboutHeadersKey2) => (
            <div
              key={aboutHeadersKey2}
              className="flex justify-center items-center gap-4 text-2xl "
            >
              <Image
                src={`/assets/about/${aboutHeaders2.image}.png`}
                alt=""
                height={200}
                width={200}
                className="sm:h-5 md:h-7 sm:w-5 md:w-7"
              />
              <div className="sm:text-xl md:text-3xl">
                {aboutHeaders2.heading}&nbsp;
              </div>
            </div>
          ))}
        </div>
      </div> */}

      <div className="hero-font w-full">
        <div className="flex justify-center items-center sm:text-xl md:text-3xl">
          <p className="text-center px-12">
            Your Premier Car Fitting Company for Luxury Customizations!
          </p>
        </div>

        <div className="footer-font font-light text-gray-400 sm:text-[10px] md:text-lg whitespace-nowrap text-center flex justify-center items-center sm:gap-4 md:gap-8 px-12 mt-4">
          <p>Since June 6 2004</p>
          <p>Thoothukudi | IND.</p>
        </div>
      </div>

      <div className="px-12 flex sm:flex-col md:flex-row justify-center items-center gap-4">
        <motion.div
          initial={{ filter: "blur(10px)" }}
          whileInView={{ filter: "blur(0px)" }}
          transition={{ ease: "easeInOut", duration: 1, delay: 1 }}
        >
          <Image
            src={"/assets/about/about-1.jpg"}
            alt=""
            height={6000}
            width={4000}
            className="w-[30rem]"
          />
        </motion.div>

        <motion.div
          initial={{ filter: "blur(10px)" }}
          whileInView={{ filter: "blur(0px)" }}
          transition={{ ease: "easeInOut", duration: 2, delay: 2 }}
        >
          <Image
            src={"/assets/about/about-2.jpg"}
            alt=""
            height={6000}
            width={4000}
            className="w-[30rem]"
          />
        </motion.div>
      </div>

      <div className="sm:px-4 md:px-12 text-justify flex justify-center items-center mt-4">
        <div className="flex sm:flex-col md:flex-row items-center justify-center gap-4 text-base">
          At Maria cars & Extra Fitting, we pride ourselves on setting world
          class standards in car fittings, offering a comprehensive range of
          luxury customizations for discerning enthusiasts worldwide. From
          imported horns to customizable RGB lights and opulent interior
          enhancements, our expert team ensures that every detail of your
          vehicle reflects unparalleled craftsmanship and sophistication. With a
          dedication to excellence and a passion for automotive innovation, we
          invite you to elevate your driving experience with our bespoke
          solutions tailored to your unique preferences and aspirations.
          <div className="font-bold text-lg">AWARD WINNERS. &nbsp;</div>
        </div>
      </div>
    </section>
  );
}

// const aboutHeader = [
//   {
//     heading: "about",
//     image: "asterisk",
//   },
//   {
//     heading: "about",
//     image: "asterisk",
//   },
//   {
//     heading: "about",
//     image: "asterisk",
//   },
//   {
//     heading: "about",
//     image: "asterisk",
//   },
//   {
//     heading: "about",
//     image: "asterisk",
//   },
//   {
//     heading: "about",
//     image: "asterisk",
//   },
//   {
//     heading: "about",
//     image: "asterisk",
//   },
//   {
//     heading: "about",
//     image: "asterisk",
//   },
//   {
//     heading: "about",
//     image: "asterisk",
//   },
//   {
//     heading: "about",
//     image: "asterisk",
//   },
//   {
//     heading: "about",
//     image: "asterisk",
//   },
//   {
//     heading: "about",
//     image: "asterisk",
//   },
//   {
//     heading: "about",
//     image: "asterisk",
//   },
//   {
//     heading: "about",
//     image: "asterisk",
//   },
//   {
//     heading: "about",
//     image: "asterisk",
//   },
//   {
//     heading: "about",
//     image: "asterisk",
//   },
//   {
//     heading: "about",
//     image: "asterisk",
//   },
//   {
//     heading: "about",
//     image: "asterisk",
//   },
//   {
//     heading: "about",
//     image: "asterisk",
//   },
//   {
//     heading: "about",
//     image: "asterisk",
//   },
//   {
//     heading: "about",
//     image: "asterisk",
//   },
//   {
//     heading: "about",
//     image: "asterisk",
//   },
//   {
//     heading: "about",
//     image: "asterisk",
//   },
//   {
//     heading: "about",
//     image: "asterisk",
//   },
//   {
//     heading: "about",
//     image: "asterisk",
//   },
//   {
//     heading: "about",
//     image: "asterisk",
//   },
//   {
//     heading: "about",
//     image: "asterisk",
//   },
//   {
//     heading: "about",
//     image: "asterisk",
//   },
//   {
//     heading: "about",
//     image: "asterisk",
//   },
//   {
//     heading: "about",
//     image: "asterisk",
//   },
//   {
//     heading: "about",
//     image: "asterisk",
//   },
//   {
//     heading: "about",
//     image: "asterisk",
//   },
//   {
//     heading: "about",
//     image: "asterisk",
//   },
//   {
//     heading: "about",
//     image: "asterisk",
//   },
//   {
//     heading: "about",
//     image: "asterisk",
//   },
//   {
//     heading: "about",
//     image: "asterisk",
//   },
//   {
//     heading: "about",
//     image: "asterisk",
//   },
//   {
//     heading: "about",
//     image: "asterisk",
//   },
//   {
//     heading: "about",
//     image: "asterisk",
//   },
//   {
//     heading: "about",
//     image: "asterisk",
//   },
//   {
//     heading: "about",
//     image: "asterisk",
//   },
//   {
//     heading: "about",
//     image: "asterisk",
//   },
//   {
//     heading: "about",
//     image: "asterisk",
//   },
//   {
//     heading: "about",
//     image: "asterisk",
//   },
// ];
