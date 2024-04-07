import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { Autoplay, FreeMode } from "swiper/modules";
import Image from "next/image";

export default function FeaturedProduct() {
  return (
    <>
      <Swiper
        loop={true}
        freeMode={true}
        modules={[Autoplay, FreeMode]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          200: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
        className="mySwiper rounded-xl"
      >
        {featuredProductsSwiper.map((featuredProduct, featuredProductKey) => (
          <SwiperSlide key={featuredProductKey}>
            <div className="h-fit w-fit">
              <Image
                src={`/assets/ft-products/${featuredProduct.image}`}
                alt={featuredProduct.name}
                height={1000}
                width={1000}
                className="sm:h-32 md:h-52 sm:w-32 md:w-52 pointer-events-none object-cover rounded-lg"
              />

              <p className="text-center sm:w-32 md:w-52 sm:text-xs md:text-sm mt-4">
                {featuredProduct.name}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

const featuredProductsSwiper = [
  {
    name: "Chrome Horn",
    image: "horn-chrome.jpg",
  },
  {
    name: "Woofers",
    image: "woofer-hypersonic.jpg",
  },
  {
    name: "LED Laser",
    image: "laser-led.jpg",
  },
  {
    name: "Rat Protection",
    image: "rat-protection.jpg",
  },
  {
    name: "Car Accessories",
    image: "stuff-cool-1.jpg",
  },
  {
    name: "Imported Horns",
    image: "horn-germany.jpg",
  },
  {
    name: "Car accessories",
    image: "accessories.jpg",
  },
  {
    name: "Blaupun Kt",
    image: "blaupunkt.jpg",
  },
  {
    name: "HeadLights",
    image: "headlight.jpg",
  },
  {
    name: "Ambience Light",
    image: "hypersonic-1.jpg",
  },
  {
    name: "NFS-7000 US",
    image: "seatwoofers.jpg",
  },
  {
    name: "K4 magic ultra lights",
    image: "ultralights.jpg",
  },
  {
    name: "Sony woofers",
    image: "sony-1.jpg",
  },
];
