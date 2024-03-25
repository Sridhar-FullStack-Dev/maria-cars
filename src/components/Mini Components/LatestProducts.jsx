import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import Image from "next/image";

export default function LatestProducts() {
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
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 10,
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
                className="sm:h-32 md:h-52 sm:w-32 md:w-52 pointer-events-none object-cover rounded-lg"
              />

              <p className="text-center sm:w-32 md:w-52 sm:text-xs md:text-sm mt-4">{service.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

const servicerSwiper = [
  {
    name: "Horns",
    image:
      "https://images.pexels.com/photos/6527701/pexels-photo-6527701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Speakers",
    image:
      "https://images.pexels.com/photos/6527701/pexels-photo-6527701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Woofers",
    image:
      "https://images.pexels.com/photos/6527701/pexels-photo-6527701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Seats",
    image:
      "https://images.pexels.com/photos/6527701/pexels-photo-6527701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Car Accessories",
    image:
      "https://images.pexels.com/photos/6527701/pexels-photo-6527701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Car Props",
    image:
      "https://images.pexels.com/photos/6527701/pexels-photo-6527701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Aesthetic elements",
    image:
      "https://images.pexels.com/photos/6527701/pexels-photo-6527701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];
