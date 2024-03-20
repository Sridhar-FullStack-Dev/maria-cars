import { motion } from "framer-motion";
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Preloader() {
  const preloaderRef = useRef(null);
  const preloaderObserver = useRef(null);
  const circleLogoLightRef = useRef(null);

  useEffect(() => {
    gsap.to(circleLogoLightRef.current, {
      rotation: 360,
      ease: "power1.inOut",
      duration: 10,
      repeat: -1,
    });
  }, []);

  const [loadingPercentage, setLoadingPercentage] = useState(0);

  useEffect(() => {
    preloaderObserver.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = preloaderRef.current;
            const count = { val: 0 };

            gsap.to(count, {
              val: 100,
              duration: 2.5,
              delay: 2,
              roundProps: "val",
              onUpdate: () => {
                element.textContent = `${count.val} %`;
                setLoadingPercentage(count.val);
              },
              ease: "power1.inOut",
            });
            preloaderObserver.current.disconnect();
          }
        });
      },
      { once: true }
    );

    preloaderObserver.current.observe(preloaderRef.current);

    return () => {
      if (preloaderObserver.current) preloaderObserver.current.disconnect();
    };
  }, []);

  return (
    <section className="fixed top-0 left-0 h-screen w-screen bg-red-600 text-white preloader-font overflow-hidden z-[99999]">
      <motion.div
        initial={{ opacity: 0, x: "-100px" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ ease: "easeInOut", duration: 2, delay: 0.1 }}
        className="mt-16 text-7xl"
      >
        Welcome To Tuticorin&apos;s Best Car Fitting Company
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: "-100px" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ ease: "easeInOut", duration: 2, delay: 1 }}
        className="mt-16 text-2xl"
      >
        Maria Cars & Extra Fitting
      </motion.div>

      <motion.div
        initial={{ width: "0%" }}
        animate={{ width: `${loadingPercentage}%` }}
        transition={{ ease: "easeInOut", duration: 2 }}
        className="bg-white h-2"
      ></motion.div>

      <div className="w-60 overflow-hidden">
        <div ref={preloaderRef} className="text-5xl hero-font tracking-wide">
          0 %
        </div>
        <div className="text-sm py-4"></div>
      </div>

      <div className="h-36 w-36 bg-red-600 rounded-full fixed bottom-32 right-10">
        <div className="relative bg-red-600 h-36 w-36 rounded-full">
          <Image
            ref={circleLogoLightRef}
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
    </section>
  );
}
