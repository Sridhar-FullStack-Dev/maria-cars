"use client";
import About from "@/components/About";
import Hero from "@/components/Hero";
import Preloader from "@/components/Preloader";
import Services from "@/components/Services";
import { AnimatePresence } from "framer-motion";

import { useEffect, useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 7000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>

      {/* <Preloader /> */}
      <Hero />
      <About />
      <Services />
    </main>
  );
}
