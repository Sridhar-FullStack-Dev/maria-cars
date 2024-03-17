"use client";

// Icons
import { FaMapLocationDot } from "react-icons/fa6";

export default function Hero() {
  return (
    <section id="home" className="bg-red-600 px-4 py-8">
      <div>
        <div className="text-6xl flex flex-col justify-center items-center font-light text-white">
          <div className="flex justify-center items-center gap-4 tracking-wide">
            The Best <span className="font-bold">Car Fitting</span>{" "}
            Company
          </div>
          <div className="flex items-center justify-center gap-4 mt-4">
            <FaMapLocationDot className="text-white" />
            In <span className="font-bold">Thoothukudi.</span>
          </div>
        </div>
      </div>

      <div className="px-4 mt-10">
        <video src="/assets/video2.mp4" autoPlay muted loop className="h-96 w-full object-cover rounded-[30px] pointer-events-none">
          video advertisement
        </video>
      </div>
    </section>
  );
}
