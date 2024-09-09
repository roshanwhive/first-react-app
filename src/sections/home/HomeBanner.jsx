import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SliderCard from "../../components/SliderCard";

const HomeBanner = () => {
  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <SliderCard />
        </SwiperSlide>

        <SwiperSlide>
          <SliderCard />
        </SwiperSlide>

        <SwiperSlide>
          <SliderCard />
        </SwiperSlide>

        <SwiperSlide>
          <SliderCard />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default HomeBanner;
