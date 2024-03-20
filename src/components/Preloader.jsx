import { motion } from "framer-motion";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

export default function Preloader() {
  const preloaderRef = useRef(null);
  const preloaderObserver = useRef(null);
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
    <section className="fixed top-0 left-0 h-screen w-screen bg-red-600 text-white hero-font overflow-hidden z-[99999]">
      <motion.div
        initial={{ opacity: 0, x: "-100px" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ ease: "easeInOut", duration: 2, delay: 0.1 }}
        className="text-6xl"
      >
        Welcome To Tuticorin's Best Car Fitting Company
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: "-100px" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ ease: "easeInOut", duration: 2, delay: 1 }}
        className="text-8xl"
      >
        Maria Cars & Extra Fitting
      </motion.div>

      <motion.div
        initial={{ width: "0%" }}
        animate={{ width: `${loadingPercentage}%` }}
        transition={{ ease: "easeInOut", duration: 2 }}
        className="bg-white h-1 mt-8 rounded-xl"
      ></motion.div>

      <div className="w-60 overflow-hidden">
        <div ref={preloaderRef} className="text-xl">0 %</div>
        <div className="text-sm py-4"></div>
      </div>
    </section>
  );
}
