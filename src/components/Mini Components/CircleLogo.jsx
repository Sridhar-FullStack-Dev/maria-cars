"use client";
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function CircleLogo() {
  const circleLogoRef = useRef(null);

  useEffect(() => {
    gsap.to(circleLogoRef.current, {
      rotation: 360,
      ease: "power1.inOut",
      duration: 10,
      repeat: -1,
    });
  }, []);

  return (
    <section className="absolute top-1/2 right-4 h-36 w-36 rounded-full backdrop-blur-sm z-10">
      <div className="relative bg-red-600 h-36 w-36 rounded-full">
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
