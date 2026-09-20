import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router";

function CategoryCards() {
  return (
    <div className="home-cat-slider py-15">
      <div className="container">
        <div className="flex flex-row gap-2">
          <Swiper
            slidesPerView={7}
            spaceBetween={5}
            navigation={true}
            // loop={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="bg-white item w-40 h-40  items-center justify-center rounded-sm text-center flex flex-col">
                <img
                  src="https://res.cloudinary.com/hyno2enn/image/upload/v1789474506/1783055942833_file_1734525204708_fash.png"
                  alt=""
                  className="w-16 transition-all"
                />
                <Link to="#" className="mt-5">
                  Fashion
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-white item w-40 h-40  items-center justify-center rounded-sm text-center flex flex-col">
                <img
                  src="https://res.cloudinary.com/hyno2enn/image/upload/v1789474506/1783055942833_file_1734525204708_fash.png"
                  alt=""
                  className="w-16 transition-all"
                />
                <Link to="#" className="mt-5">
                  Fashion
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-white item w-40 h-40  items-center justify-center rounded-sm text-center flex flex-col">
                <img
                  src="https://res.cloudinary.com/hyno2enn/image/upload/v1789474506/1783055942833_file_1734525204708_fash.png"
                  alt=""
                  className="w-16 transition-all"
                />
                <Link to="#" className="mt-5">
                  Fashion
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-white item w-40 h-40  items-center justify-center rounded-sm text-center flex flex-col">
                <img
                  src="https://res.cloudinary.com/hyno2enn/image/upload/v1789474506/1783055942833_file_1734525204708_fash.png"
                  alt=""
                  className="w-16 transition-all"
                />
                <Link to="#" className="mt-5">
                  Fashion
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-white item w-40 h-40  items-center justify-center rounded-sm text-center flex flex-col">
                <img
                  src="https://res.cloudinary.com/hyno2enn/image/upload/v1789474506/1783055942833_file_1734525204708_fash.png"
                  alt=""
                  className="w-16 transition-all"
                />
                <Link to="#" className="mt-5">
                  Fashion
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-white item w-40 h-40  items-center justify-center rounded-sm text-center flex flex-col">
                <img
                  src="https://res.cloudinary.com/hyno2enn/image/upload/v1789474506/1783055942833_file_1734525204708_fash.png"
                  alt=""
                  className="w-16 transition-all"
                />
                <Link to="#" className="mt-5">
                  Fashion
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-white item w-40 h-40  items-center justify-center rounded-sm text-center flex flex-col">
                <img
                  src="https://res.cloudinary.com/hyno2enn/image/upload/v1789474506/1783055942833_file_1734525204708_fash.png"
                  alt=""
                  className="w-16 transition-all"
                />
                <Link to="#" className="mt-5">
                  Fashion
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-white item w-40 h-40  items-center justify-center rounded-sm text-center flex flex-col">
                <img
                  src="https://res.cloudinary.com/hyno2enn/image/upload/v1789474506/1783055942833_file_1734525204708_fash.png"
                  alt=""
                  className="w-16 transition-all"
                />
                <Link to="#" className="mt-5">
                  Fashion
                </Link>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default CategoryCards;
