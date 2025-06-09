import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Pagination } from "swiper/modules";

import { Manrope } from "next/font/google";

import { dataReviews } from "../../../utils/data";
import { sliderReviewsSettings } from "../../../utils/common";

const manrope300 = Manrope({
  subsets: ["latin"],
  weight: "300",
});

const manrope400 = Manrope({
  subsets: ["latin"],
  weight: "400",
});

const manrope500 = Manrope({
  subsets: ["latin"],
  weight: "500",
});

const Reviews = () => {
  return (
    <section className="reviews">
      <div className="reviews__container">
        <h2 className="reviews__title main-slider__title title_h3">
          Customers reviews
        </h2>
        <div className="reviews__slider slider slider-2">
          <div className="reviews__slider-container slider-container">
            <button
              className="main-slider__slider-btn prev reviews__slider-prev btn_1 slider-prev"
              type="button"
            ></button>
            <button
              className="main-slider__slider-btn next reviews__slider-next btn_1 slider-next"
              type="button"
            ></button>
            <div className="reviews__slider-track slider-track">
              <Swiper
                {...sliderReviewsSettings}
                className="swiper-reviews"
                pagination={{
                  el: ".custom-pagination-2", // Вказуємо контейнер для пагінації
                  clickable: true,
                  renderBullet: (index, className) => {
                    return `<span class="${className} custom-bullet-2"></span>`;
                  },
                }}
                navigation={{
                  nextEl: ".reviews__slider-next",
                  prevEl: ".reviews__slider-prev",
                }}
                modules={[Navigation, Pagination]}
              >
                {dataReviews.map((item, i) => (
                  <SwiperSlide key={i}>
                    <div className="reviews__slider-item slider-item">
                      <fieldset className="review">
                        <legend className="review__legend"></legend>
                        <fieldset className="review__wrapper">
                          <legend className="review__wrapper-legend"></legend>
                          <div className="review__wrapper-img">
                            <Image
                              src={item.image}
                              alt="customer"
                              width={100}
                              height={100}
                            />
                          </div>
                          <p
                            className={`${manrope400.className} review__wrapper-text text_h1`}
                          >
                            {item.text}
                          </p>
                          <div className="review__wrapper-wrapper">
                            <div
                              className={`${manrope500.className} review__wrapper-name`}
                            >
                              {item.name}
                            </div>
                            <div
                              className={`${manrope300.className} review__wrapper-place`}
                            >
                              {item.place}
                            </div>
                          </div>
                        </fieldset>
                      </fieldset>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="reviews__slider__slider-pagination">
              <div className="custom-pagination-2"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="reviews__contact-container container-a">
        <div className="reviews__contact">
          <form action="#" className="reviews__contact-form">
            <h4 className="reviews__contact-title title_h3">Contact</h4>
            <label htmlFor="name" className="reviews__contact-input">
              <input
                id="name"
                type="text"
                name="user-name"
                required
                placeholder="Name"
              />
            </label>
            <label htmlFor="email" className="reviews__contact-input">
              <input
                id="email"
                type="tel"
                name="user-phone"
                required
                placeholder="Phone"
              />
            </label>
            <div className="reviews__contact-btn">
              <button className="btn__decor btn__decor_b" type="submit">
                <span>Call me back</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Reviews;