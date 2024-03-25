"use client";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

// Components
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Preloader from "@/components/Preloader";
import Contacts from "@/components/Contacts";

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

      <Hero />
      <About />
      <Services />
      <Contacts />
    </main>
  );
}
