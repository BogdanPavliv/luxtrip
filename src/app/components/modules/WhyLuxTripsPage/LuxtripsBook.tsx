"use client";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { dataBook } from "../../../utils/data";
import { sliderLuxtripsSettings } from "../../../utils/common";

const LuxtripsBook = () => {
  return (
    <section className="luxtrips-book">
      <div className="luxtrips-container luxtrips-book__container">
        <h2 className="title luxtrips-book__title">
          We customize your journey by selecting the most convenient travelling
          options, including private yachts, jets, charter flights and
          supercars.
        </h2>
      </div>

      <div className="luxtrips-book-slider">
        <Swiper {...sliderLuxtripsSettings} className="swiper-luxtrips">
          {dataBook.map((item) => (
            <SwiperSlide
              key={item.id}
              className="luxtrips-book-slide"
              style={{ backgroundImage: `url('${item.image}')` }}
            >
              <Link
                className="luxtrips-book-slide__link"
                href={`/book-form/${item.id}`}
              >
                <p className="luxtrips-book-slide__title">{item.title}</p>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="slider__pagination swiper-pagination"></div>

      <div className="luxtrips-container luxtrips-book__container">
        <Link
          href={"/book-with-us"}
          className="luxtrips-btn luxtrips-book__btn"
        >
          Book now
        </Link>
      </div>
    </section>
  );
};

export default LuxtripsBook;
