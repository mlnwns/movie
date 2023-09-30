import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./custom-carousel.css";

export const HomeCarousel = () => {
  const carouselData = [
    { img: { src: "https://placehold.co/600x400", alt: "placeholder1" } },
    { img: { src: "https://placehold.co/600x400", alt: "placeholder2" } },
    { img: { src: "https://placehold.co/600x400", alt: "placeholder3" } },
  ];

  return (
    <Swiper
      className="home-carousel rounded-lg"
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
    >
      {carouselData.map((data) => (
        <SwiperSlide key={data.img.alt}>
          <img src={data.img.src} alt={data.img.alt} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
