import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import Image from "next/image";

export default function ServicesSwiper() {
  return (
    <>
      <Swiper
        loop={true}
        freeMode={true}
        modules={[Autoplay, FreeMode, Pagination]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          200: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1440: {
            slidesPerView: 3,
          },
        }}
        className="mySwiper rounded-xl"
      >
        {servicerSwiper.map((service, serviceKey) => (
          <SwiperSlide key={serviceKey}>
            <div className="h-fit w-fit">
              <Image
                src={service.image}
                alt={service.name}
                height={1000}
                width={1000}
                className="sm:h-32 md:h-40 lg:h-32 xl:h-52 sm:w-32 md:w-40 lg:w-32 xl:w-52 pointer-events-none object-cover rounded-lg"
              />

              <p className="text-center sm:w-32 md:w-40 lg:w-32 xl:w-52 sm:text-xs xl:text-sm mt-4">
                {service.name}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

const servicerSwiper = [
  {
    name: "Alloy wheels",
    image:
      "https://images.pexels.com/photos/5623498/pexels-photo-5623498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Entertainments With Top Notch Bass",
    image:
      "https://images.pexels.com/photos/373632/pexels-photo-373632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Jeep Fittings",
    image:
      "https://images.pexels.com/photos/1638459/pexels-photo-1638459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Retro Cars Fitting",
    image:
      "https://images.pexels.com/photos/19310209/pexels-photo-19310209/free-photo-of-headlights-and-grill-of-vintage-car.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Luxury Interiors Fitting",
    image:
      "https://images.pexels.com/photos/193999/pexels-photo-193999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Customizable RGB Lights",
    image:
      "https://images.pexels.com/photos/2127022/pexels-photo-2127022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Varities Of Imported Horns",
    image:
      "https://images.pexels.com/photos/137600/pexels-photo-137600.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];
