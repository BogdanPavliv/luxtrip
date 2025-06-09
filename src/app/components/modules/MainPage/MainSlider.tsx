"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import FilterComponent from "../../../components/ui/FilterComponent";
import { Manrope } from "next/font/google";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Pagination } from "swiper/modules";

import { dataTrips } from "../../../utils/data";
import { sliderTripsSettings } from "../../../utils/common";

import { Category } from "../../../types/others";

const manrope500 = Manrope({
  subsets: ["latin"],
  weight: "500",
});

const MainSlider = () => {
  // Filter

  const [filteredCategory, setFilteredCategory] = useState<Category>("World");

  const handleFilterChange = (category: Category) => {
    setFilteredCategory(category);
  };

  const filteredTrips =
    filteredCategory === "World"
      ? dataTrips
      : dataTrips.filter((trip) => trip.category === filteredCategory);
  return (
    <section className="main-slider">
      <div className="main-slider__container container">
        <h2 className="main-slider__title title_h3">Top Rated Experiences</h2>
        <FilterComponent
          onFilterChange={handleFilterChange}
          categories={[
            "World",
            "Africa",
            "Asia",
            "Europe",
            "North America",
            "South America",
            "Antarctica",
            "Australia",
          ]}
        />
      </div>
      <div className="main-slider__slider slider">
        <div className="main-slider__slider-container slider-container">
          <button
            className="main-slider__slider-btn main-slider__prev prev btn_1 slider-prev"
            type="button"
          ></button>
          <button
            className="main-slider__slider-btn main-slider__next next btn_1 slider-next"
            type="button"
          ></button>
          <div className="main-slider__slider-track slider-track">
            <Swiper
              {...sliderTripsSettings}
              className="swiper-trips"
              pagination={{
                el: ".custom-pagination", // Вказуємо контейнер для пагінації
                clickable: true,
                renderBullet: (index, className) => {
                  return `<span class="${className} custom-bullet"></span>`;
                },
              }}
              navigation={{
                nextEl: ".main-slider__next",
                prevEl: ".main-slider__prev",
              }}
              modules={[Navigation, Pagination]}
            >
              {filteredTrips.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="main-slider__slider-item slider-item">
                    <div className="trip-card" id="trip01">
                      <Image
                        src={item.image}
                        width={350}
                        height={570}
                        alt="card"
                      />
                      <div className="trip-card__info">
                        <div className="trip-card__about">
                          <div
                            className={`${manrope500.className} trip-card__place text_h2`}
                          >
                            {item.place}
                          </div>
                          <Link
                            href={`/customise/${item.id}`}
                            className="trip-card__name title_h5"
                          >
                            {item.text}
                          </Link>
                          <div className="trip-card__bottom">
                            <div className="trip-card__price">
                              <b className={`${manrope500.className} text_h2`}>
                                From
                              </b>
                              <div className="trip-carddivice-price text_h3">
                                € <output>{item.price}</output>
                              </div>
                            </div>
                            <Link
                              href={`/customise/${item.id}`}
                              className="trip-card__customise text_h4"
                            >
                              customise{" "}
                            </Link>
                          </div>
                        </div>
                        <div className="trip-card__rating">
                          <div
                            className={`${manrope500.className} trip-card__rating-rating text_h2`}
                          >
                            {item.rating}.0
                          </div>
                          <div className="trip-card__rating-scale">
                            {Array.from({ length: 5 }, (_, index) => (
                              <div
                                key={index}
                                className={`trip-card__rating-point ${
                                  index < item.rating ? "active" : ""
                                }`}
                              ></div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="main-slider__slider-pagination">
            <div className="custom-pagination"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSlider;
