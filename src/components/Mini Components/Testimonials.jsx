import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import Image from "next/image";

// Icons
import { FaStar } from "react-icons/fa";
import { PiQuotesBold } from "react-icons/pi";

export default function TestimonialsSwiper() {
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
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1440: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          2560: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
        }}
        className="mySwiper rounded-xl mt-8"
      >
        {testimonialSwiper.map((testimonials, testimonialsKey) => (
          <SwiperSlide key={testimonialsKey}>
            <div className="w-96 bg-white sm:h-72 md:h-64 rounded-2xl p-4 text-main relative">
              <div className="flex justify-start items-center gap-3">
                <div className="h-12 w-12 rounded-full overflow-hidden">
                  <Image
                    src={`/assets/testimonials/${testimonials.src}`}
                    alt=""
                    height={70}
                    width={70}
                    className="h-12 w-12 object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <h1 className="sm:text-sm md:text-base">
                    {testimonials.name}
                  </h1>
                  <p className="text-xs">{testimonials.role}</p>
                </div>
              </div>

              <div className="flex justify-start items-center gap-2 mt-4 ml-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <p className="mt-4 text-sm sm:w-72 md:w-full">
                {testimonials.description}
              </p>

              <PiQuotesBold className="absolute top-5 right-5" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

const testimonialSwiper = [
  {
    src: "test-1.png",
    name: "PIRAMANAYAKAM SANTHANAM",
    role: "Customer",
    description: "Good communication and customer service excellent",
  },
  {
    src: "test-2.png",
    name: "A.Harish Suthan",
    role: "Customer",
    description:
      "Service is very good. Product quality is top notch. Owner and workers are very kind. Price is reasonable. If you are looking for quality, this shop is very good. All kind of accesories, speaker system , seat covers, mat are there and its quality is outstanding....",
  },
  {
    src: "test-3.png",
    name: "Jones Marx",
    role: "Customer",
    description:
      "Reasonably good car service station with extra accessories availability. The shop has an automatic water washer arrangement.",
  },
  {
    src: "test-4.png",
    name: "PIRAMANAYAKAM SANTHANAM",
    role: "Customer",
    description:
      "One of the best car decorative things and fittings in Tuticorin. Car washing service also available with advanced technology.",
  },
  {
    src: "test-5.png",
    name: "Augustin Joshua",
    role: "Customer",
    description:
      "Nakamichi Android system and projector halogen fog lamp for Honda amaze available ah bro",
  },
  {
    src: "test-6.png",
    name: "Elangovan S",
    role: "Customer",
    description:
      "Good place for car fittings and other car related services. Workers and the owners are friendly and good in their services. Loved the place to visit",
  },
  {
    src: "test-7.png",
    name: "Majuya Fernando",
    role: "Customer",
    description: "Best choice",
  },
];
