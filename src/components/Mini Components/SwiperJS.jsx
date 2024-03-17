import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import Image from "next/image";

export default function SwiperJS() {
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
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
        }}
        className="mySwiper"
      >
        {servicerSwiper.map((service, serviceKey) => (
          <SwiperSlide key={serviceKey}>
            <div className="h-fit w-fit">
              <Image
                src={service.image}
                alt={service.name}
                height={1000}
                width={1000}
                className="h-44 w-44 pointer-events-none object-cover rounded-lg"
              />

              <p className="text-center">{service.name}</p>
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
      "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Entertainments",
    image:
      "https://images.pexels.com/photos/17071529/pexels-photo-17071529/free-photo-of-sport-cars-on-a-parking-lot.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Alloy wheels",
    image:
      "https://images.pexels.com/photos/17918285/pexels-photo-17918285/free-photo-of-red-tuned-bmw-e30.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Alloy wheels",
    image:
      "https://images.pexels.com/photos/17304858/pexels-photo-17304858/free-photo-of-red-chevrolet-corvette.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Alloy wheels",
    image:
      "https://images.pexels.com/photos/1638459/pexels-photo-1638459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Luxury seats",
    image:
      "https://images.pexels.com/photos/366224/pexels-photo-366224.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];
