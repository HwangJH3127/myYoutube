import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { developerText } from "../../data/developer";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/navigation";

import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Developer = ({ id }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  const developerClass = loading ? "isLoading" : "isLoaded";
  return (
    <section id={id} className={developerClass}>
      <h2>🥰 추천 개발자를 소개합니다.</h2>

      <div className="developer__inner">
        <Swiper
          slidesPerView={4}
          spaceBetween={15}
          navigation={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 5,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 6,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 7,
              spaceBetween: 20,
            },
            1240: {
              slidesPerView: 8,
              spaceBetween: 20,
            },
            1640: {
              slidesPerView: 9,
              spaceBetween: 20,
            },
            2000: {
              slidesPerView: 10,
              spaceBetween: 20,
            },
          }}
          modules={[Navigation, Autoplay]}
          className="mySwiper"
        >
          {developerText.map((developer, key) => (
            <SwiperSlide key={key}>
              <div className="developer">
                <div className="developer__img play__icon">
                  <Link to={`/channel/${developer.channelId}`}>
                    <img src={developer.img} alt={developer.name} />
                  </Link>
                </div>
                <div className="developer__info">
                  <Link to={`/channel/${developer.channelId}`}>
                    {developer.name}
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Developer;
