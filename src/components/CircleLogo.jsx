"use client";
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CircleLogo() {
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
      x: -100,
      y: 200,
      ease: "power1.inOut",
      duration: 2,
      scrollTrigger: {
        trigger: circleLogoParallaxRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <section className="absolute top-0 right-0 h-36 w-36 rounded-full">
      <div
        ref={circleLogoParallaxRef}
        className="relative bg-red-600 h-36 w-36 rounded-full"
      >
        <Image
          ref={circleLogoRef}
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
            className="w-20 pointer-events-none"
          />
        </div>
      </div>
    </section>
  );
}
