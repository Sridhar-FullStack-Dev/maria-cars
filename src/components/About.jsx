import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLenis } from "@studio-freight/react-lenis";

// Icons
import { GiCarWheel } from "react-icons/gi";
import { TbTrendingUp } from "react-icons/tb";
import { FaUserFriends } from "react-icons/fa";
import { MdLocalCarWash } from "react-icons/md";
import { GoArrowUpRight } from "react-icons/go";
import { MdWorkspacePremium } from "react-icons/md";

export default function About() {
  // Lenis
  const lenis = useLenis();

  return (
    <section id="about" className="px-8 py-16 text-main">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, x: "-20px" }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ ease: "easeInOut", duration: 1, delay: 1 }}
        className="hero-font sm:text-4xl lg:text-5xl contacts-font"
      >
        About Us.
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 1, delay: 2 }}
        className="mt-1 h-1 sm:w-72 lg:w-96 bg-main"
      ></motion.div>

      <div className="flex justify-between items-end gap-4">
        <div className="w-[40%] flex flex-col justify-end">
          <Link
            href={"#contacts"}
            onClick={() => lenis.scrollTo("#contacts", { lerp: 0.02 })}
            className="flex items-center justify-center gap-2 p-2 border border-main bg-white w-fit text-sm transition-all duration-500 ease-in-out hover:bg-main hover:text-white hero-font whitespace-nowrap"
          >
            Talk to Us <GoArrowUpRight className="text-3xl" />
          </Link>

          <div className="mt-8">
            <Image
              src={"/assets/about/about-1.jpg"}
              alt=""
              height={1000}
              width={1000}
              priority
              className="w-full h-[40vh] object-cover"
            />
          </div>
        </div>

        <div className="w-[60%]">
          <div className="flex justify-between items-center py-4">
            <div className="w-1/2"></div>
            <div className="w-1/2 text-xs">
              At Maria cars & Extra Fitting, we pride ourselves on setting world
              class standards in car fittings, offering a comprehensive range of
              luxury customizations. Best car fitting service in thoothukudi.
              Best car fitting services in tiruchendur. Best car fitting
              services near tiruchendur. Best car fitting services near
              tirunelveli
            </div>
          </div>
          <Image
            src={"/assets/about/about-2.jpg"}
            alt=""
            height={1000}
            width={1000}
            priority
            className="w-full h-[60vh] object-cover"
          />
        </div>
      </div>

      {/* Why Choose Us */}
      <h1 className="text-lg mt-12">Why Choose Us</h1>
      <div className="flex justify-between items-center gap-4 mt-4">
        {aboutLabels.map((labels, labelsKey) => (
          <div
            key={labelsKey}
            className="w-1/5 border border-main rounded-sm p-4"
          >
            <labels.icon className="text-5xl" />
            <h1 className="font-bold text-lg py-2">{labels.title}</h1>
            <p className="text-justify text-sm">{labels.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const aboutLabels = [
  {
    icon: FaUserFriends,
    title: "Customer Relations",
    description:
      "We prioritize maintaining positive and courteous relationships with our customers, ensuring that we always fulfill their desires without disappointment.",
  },
  {
    icon: MdWorkspacePremium,
    title: "Service Standards",
    description:
      "Our services consistently meet international standards, guaranteeing top-notch quality and satisfaction for our valued customers.",
  },
  {
    icon: GiCarWheel,
    title: "Best Fittings",
    description:
      "Our service excels in neatness and precision fitting, great attending to every detail to ensure your complete satisfaction in every aspect of our work.",
  },
  {
    icon: TbTrendingUp,
    title: "Trending Products",
    description:
      "We offer the most up-to-date, latest trending products at unbeatable prices, ensuring you access the best deals available in the current market.",
  },
  {
    icon: MdLocalCarWash,
    title: "Handle with care",
    description:
      "Our service is meticulously designed to handle your car with the utmost care, guaranteeing no damage while consistently delivering exceptional results.",
  },
];
