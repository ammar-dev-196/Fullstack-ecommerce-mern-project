import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import CategoryCards from "./CategoryCards";

function Slider() {
  return (
    <div className="py-3">
      <div className="container">
        <Swiper
          spaceBetween={10}
          navigation={true}
          modules={[Navigation, Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          className="home-slider"
        >
          <SwiperSlide>
            <div className="item rounded-lg overflow-hidden">
              <img src={"./slider-1.jpg"} className="w-full shadow" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item rounded-lg overflow-hidden">
              <img src={"./slider-2.jpg"} className="w-full" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item rounded-lg overflow-hidden">
              <img src={"./slider-3.jpg"} className="w-full" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item rounded-lg overflow-hidden">
              <img src={"./slider-5.jpg"} className="w-full" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item rounded-lg overflow-hidden">
              <img src={"./slider-6.jpg"} className="w-full" />
            </div>
          </SwiperSlide>
        </Swiper>

        <CategoryCards />
      </div>
    </div>
  );
}

export default Slider;
