import { gsap } from "gsap";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import ServicesSwiper from "./Mini Components/ServicesSwiper";

export default function Services() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const observer1 = useRef(null);
  const observer2 = useRef(null);
  const observer3 = useRef(null);
  const observer4 = useRef(null);

  // Counters
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
              delay: 0.5,
              roundProps: "val",
              onUpdate: () => {
                element.textContent = `${count.val} +`;
              },
              ease: "power1.inOut",
            });
            observer1.current.disconnect();
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
              delay: 0.5,
              roundProps: "val",
              onUpdate: () => {
                element.textContent = `${count.val} +`;
              },
              ease: "power1.inOut",
            });
            observer2.current.disconnect();
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
              delay: 0.5,
              roundProps: "val",
              onUpdate: () => {
                element.textContent = `${count.val} +`;
              },
              ease: "power1.inOut",
            });
            observer3.current.disconnect();
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
              delay: 0.5,
              roundProps: "val",
              onUpdate: () => {
                element.textContent = `${count.val} +`;
              },
              ease: "power1.inOut",
            });
            observer4.current.disconnect();
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
      <div className="flex sm:flex-col md:flex-row justify-between sm:items-start md:items-center xl:items-start gap-8 lg:gap-8">
        {/* Heading */}
        <div className="sm:w-1/3 md:w-1/2 xl:w-1/3">
          <div>
            <motion.h1
              initial={{ opacity: 0, x: "-20px" }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ ease: "easeInOut", duration: 1, delay: 0.5 }}
              className="hero-font sm:text-4xl lg:text-5xl"
            >
              Services.
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 1, delay: 2 }}
              className="mt-1 h-1 sm:w-72 lg:w-96 bg-white"
            ></motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, x: "-20px" }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ ease: "easeInOut", duration: 1, delay: 2 }}
            className="mt-8 sm:w-72 lg:w-96 sm:text-xs lg:text-sm text-justify"
          >
            We provide all types of fitting services for your car in a world
            class standards and we install stunning aesthetic elements,
            high-quality speakers, luxurious seats, powerful woofers, and
            premium imported horns to ensure your car isn&apos;t just a mode of
            transport, but a statement of style and comfort.
          </motion.p>
        </div>

        {/* Swipers */}
        <div className="sm:w-full md:w-1/2 xl:w-2/3">
          <ServicesSwiper />
        </div>
      </div>

      {/* Counters */}
      <div className="mt-8 p-8 w-full bg-white text-red-600 flex justify-between items-center rounded-2xl">
        <div className="flex sm:flex-col md:flex-row sm:items-center md:items-start justify-evenly w-full gap-4 hero-font sm:text-3xl xl:text-6xl">
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
            <p className="sm:text-sm lg:text-sm w-full text-center py-4">
              Cars Serviced / Month
            </p>
          </div>
        </div>

        <div></div>
      </div>

      {/* Services Description */}
      <div className="mt-8 sm:p-4 md:p-12 bg-white rounded-2xl">
        <div className="flex sm:flex-col md:flex-row justify-between gap-8">
          <div className="md:w-1/2">
            <Image
              src={"/assets/services/service-1.jpg"}
              alt="services"
              height={1000}
              width={1000}
              priority
              className="w-full h-64 object-cover sm:rounded-t-2xl md:rounded-t-none md:rounded-tl-2xl"
            />
          </div>

          <div className="md:w-1/2">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ ease: "easeIn", delay: 0.5 }}
              className="flex justify-center items-center text-justify text-sm bg-main p-6 h-full md:rounded-tr-2xl"
            >
              We specialize in providing dedicated fitting services that elevate
              your driving experience to new heights. Our team of skilled
              professionals is committed to delivering top-notch craftsmanship
              and attention to detail with every installation. Whether you&apos;re
              looking to enhance the aesthetics of your vehicle or optimize its
              functionality, we have the expertise and resources to make it
              happen.
            </motion.p>
          </div>
        </div>

        <div className="flex sm:flex-col md:flex-row justify-between gap-8 mt-8">
          <div className="md:w-1/2">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ ease: "easeIn", delay: 0.5 }}
              className="flex justify-center items-center text-justify text-sm bg-main p-6 h-full"
            >
              At our establishment, quality and customer satisfaction are our
              top priorities. We understand that every vehicle is unique, and
              our tailored approach ensures that each fitting is precisely
              suited to your needs and preferences. From performance upgrades to
              custom interior modifications, we offer a comprehensive range of
              services to meet the diverse requirements of our clients.
            </motion.p>
          </div>

          <div className="md:w-1/2">
            <Image
              src={"/assets/services/service-2.jpg"}
              alt=""
              height={1300}
              width={1300}
              className="w-full h-64 object-cover"
            />
          </div>
        </div>

        <div className="flex sm:flex-col md:flex-row justify-between gap-8 mt-8">
          <div className="md:w-1/2">
            <Image
              src={"/assets/services/service-3.jpg"}
              alt=""
              height={1300}
              width={1300}
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="md:w-1/2">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ ease: "easeIn", delay: 0.5 }}
              className="flex justify-center items-center text-justify text-sm bg-main p-6 h-full"
            >
              Our commitment to excellence extends beyond the installation
              process. We source only the highest quality materials and
              components, ensuring durability and reliability in every product
              we offer. Additionally, our team stays up-to-date with the latest
              industry advancements and techniques to provide cutting-edge
              solutions that enhance both the performance and aesthetics of your
              vehicle.
            </motion.p>
          </div>
        </div>

        <div className="flex sm:flex-col md:flex-row justify-between gap-8 mt-8">
          <div className="md:w-1/2">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ ease: "easeIn", delay: 0.5 }}
              className="flex justify-center items-center text-justify text-sm bg-main p-6 h-full md:rounded-bl-2xl"
            >
              We understand that every vehicle is unique, and we approach each
              project with a bespoke mindset, ensuring that every aspect of our
              work is tailored to meet your individual preferences and
              requirements. With our dedication to craftsmanship and customer
              satisfaction, you can trust us to deliver results that exceed your
              expectations. Experience the difference of our premium fitting
              services and elevate your driving experience today.
            </motion.p>
          </div>
          <div className="md:w-1/2">
            <Image
              src={"/assets/services/service-4.jpg"}
              alt=""
              height={1300}
              width={1300}
              className="w-full h-64 object-cover sm:rounded-b-2xl md:rounded-b-none md:rounded-br-2xl"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
