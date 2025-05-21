import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  A11y,
  Autoplay,
  Keyboard,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";

const GardenOfTheMonth = () => {
  const [gardenOfMonth, setGardenOfMonth] = useState([]);
  useEffect(() => {
    fetch("gardenOfTheMonth.json")
      .then((res) => res.json())
      .then((data) => setGardenOfMonth(data));
  }, []);
  console.log(gardenOfMonth);
  return (
    <div className="space-y-10 my-10">
      <h1 className="text-2xl md:text-4xl font-semibold text-secondary text-center">
        Garden Of The Month:
      </h1>
      <div className="relative md:w-full">
        <Swiper
          className="bg-base-200 border-2 rounded-2xl border-secondary"
          modules={[Navigation, Pagination, A11y, Autoplay, Keyboard]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={gardenOfMonth.length > 3}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          keyboard={{ enabled: true }}
        >
          {gardenOfMonth.map((slider) => (
            <SwiperSlide key={slider.id}>
              <div className="md:flex items-center gap-5 p-11 space-y-5">
                <img
                  className="md:h-[500px] w-[500px] object-cover rounded-2xl"
                  src={slider.image}
                  alt="slider-images"
                />
                <div className="space-y-4">
                  <h1 className="md:text-4xl text-2xl font-bold">
                    {slider.title}
                  </h1>
                  <p>Location: {slider.location}</p>
                  <p>Gardener: {slider.gardener}</p>
                  <p>Type: {slider.type}</p>
                  <p className="md:text-xl lg:w-[600px]">
                    {slider.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default GardenOfTheMonth;
