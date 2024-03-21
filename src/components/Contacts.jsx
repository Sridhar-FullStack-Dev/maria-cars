import gsap from "gsap";
import Link from "next/link";
import { useEffect, useRef } from "react";

// Icons
import { BiPhoneCall } from "react-icons/bi";
import { SiFacebook } from "react-icons/si";
import { RiInstagramFill } from "react-icons/ri";

export default function Contacts() {
  const textRef = useRef(null);
  const contactsTextRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          gsap.fromTo(
            textRef.current.childNodes,
            { autoAlpha: 0 },
            {
              duration: 0.6,
              autoAlpha: 1,
              ease: "power3.inOut",
              stagger: 0.05,
            }
          );
        }
      });
    });

    observer.observe(textRef.current);
    return () => observer.unobserve(textRef.current);
  }, []);

  useEffect(() => {
    const textElement = contactsTextRef.current;

    const tl = gsap.timeline();
    tl.to(textElement, { xPercent: -100, duration: 70, ease: "power1.in" });
    tl.repeat(-1);

    return () => {
      tl.kill();
    };
  }, []);

  const contactHeading = "Contacts ".repeat(50);
  const text =
    "Don't Hesitate. Contact now and start fitting your cars and make your ride style and cool";

  return (
    <section className="relative text-[#DC2C2C] px-8 py-16 contacts-font overflow-hidden">
      <div
        ref={contactsTextRef}
        className="absolute top-0 left-0 flex justify-between items-center w-auto py-4 text-5xl whitespace-nowrap"
      >
        {contactHeading}
      </div>

      <div className="flex justify-between items-between mt-10 tracking-wider">
        <div className="text-xl w-1/2 flex flex-col items-start justify-center gap-10">
          {contactsLink.map((contactLink, contactLinkKey) => (
            <Link
              key={contactLinkKey}
              href={contactLink.href}
              className="flex justify-start items-center gap-4"
            >
              <div className="text-3xl">
                <contactLink.icon />
              </div>
              <div> {contactLink.links}</div>
            </Link>
          ))}
        </div>

        <div ref={textRef} className="w-1/2 text-justify text-3xl">
          {text.split("").map((char, index) => {
            return <span key={index}>{char}</span>;
          })}
        </div>
      </div>
    </section>
  );
}

const contactsLink = [
  {
    href: "/",
    icon: SiFacebook,
    links: "Facebook",
  },
  {
    href: "/",
    icon: RiInstagramFill,
    links: "Instagram",
  },
  {
    href: "/",
    icon: BiPhoneCall,
    links: "Call Now",
  },
];
