"use client";
import { Roboto } from "next/font/google";
import Image from "next/image";

const roboto = Roboto({ subsets: ["cyrillic"], weight: ["400", "300"] });

export default function Hero() {
  return (
    <section className={`${roboto.className} mt-8`}>
      <div className="flex justify-center px-8">
        <div className="text-5xl flex flex-col text-start">
          <div className="flex items-center gap-4">
            <span className="text-gray-400 font-light">Efficiency</span>{" "}
            <span className="font-bold text-red-600 flex justify-center items-center gap-1">
              Ev
              <Image
                src={"/assets/flash.png"}
                alt="o"
                height={512}
                width={512}
                className="w-9 pointer-events-none"
              />
              lved: The Best Car
            </span>{" "}
            <Image
              src={"/assets/flash-wave.png"}
              alt=""
              height={512}
              width={512}
              className="w-9 pointer-events-none opacity-30"
            />
            <Image
              src={"/assets/tools.png"}
              alt=""
              height={512}
              width={512}
              className="h-9 w-9 ml-4 pointer-events-none opacity-30"
            />
          </div>

          <div className="flex items-center gap-4 mt-4">
            <span className="font-bold text-red-600">- Fitting</span>{" "}
            <span className="text-gray-400 font-light">Company </span>In
            Tuticorin.
            <div>
              <video
                src="/assets/video1.mp4"
                autoPlay
                muted
                loop
                className="h-20 w-60 rounded-full object-cover pointer-events-none"
              >
                your device doesn&apos;t support videos
              </video>
            </div>
          </div>

          <div className="mt-4 text-gray-300 text-sm whitespace-nowrap">
            <p>
              We provide car fitting service in world class standards. All type
              of imported car accessories are available.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full mt-16">
        <div className="px-20 relative">
          <video
            src="/assets/video2.mp4"
            autoPlay
            muted
            loop
            className="h-96 w-full rounded-[30px] object-cover"
          >
            your device doesn&apos;t support videos
          </video>

          <div className="absolute -top-10 right-32 border-[5px] border-white h-32 w-32 bg-red-600 rounded-full flex justify-center items-center">
            <div className="text-white text-xl">M</div>
          </div>
        </div>
      </div>
    </section>
  );
}
