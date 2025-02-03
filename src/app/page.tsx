"use client"

import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./page.module.scss";
import Link from 'next/link';
import { dataBook } from "./utils/data";
import { Manrope } from "next/font/google";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from 'swiper/modules';
import { Pagination } from 'swiper/modules';

import FilterComponent from "./components/ui/FilterComponent";
import SubscribeForm from "./components/ui/SubscribeForm";

import {Category} from "./utils/data"

import {dataTrips} from "./utils/data";
import {dataReviews} from "./utils/data";
import {sliderTripsSettings} from "./utils/common";
import {sliderReviewsSettings} from "./utils/common";

const manrope = Manrope({
  subsets: ["latin"],
  weight: "500"
});

const Home = () => {
  const [selectedOption1, setSelectedOption1] = useState('1 Adventure Travel');
  const [selectedOption2, setSelectedOption2] = useState('1 Person');

  // Parallax Animation

  const [activeStep, setActiveStep] = useState(1);

  useEffect(() => {
    const timer = () => setTimeout(setStep, 40000);

    const setStep = () => {
      switch (activeStep) {
        case 1:
          document.querySelector(".extraordinary__parallax-thailand")?.classList.remove("opacity");
          document.querySelector(".extraordinary__parallax-lakes")?.classList.remove("opacity");
          document.querySelector(".extraordinary__parallax-mountain")?.classList.remove("opacity");
          document.querySelector(".extraordinary__parallax-lakes")?.classList.add("opacity");
          setActiveStep(2);
          break;
        case 2:
          document.querySelector(".extraordinary__parallax-thailand")?.classList.remove("opacity");
          document.querySelector(".extraordinary__parallax-lakes")?.classList.remove("opacity");
          document.querySelector(".extraordinary__parallax-mountain")?.classList.remove("opacity");
          document.querySelector(".extraordinary__parallax-thailand")?.classList.add("opacity");
          document.querySelector(".extraordinary__parallax-lakes")?.classList.add("opacity");
          document.querySelector(".extraordinary__parallax-mountain")?.classList.add("opacity");
          setActiveStep(3);
          break;
        case 3:
          document.querySelector(".extraordinary__parallax-thailand")?.classList.remove("opacity");
          document.querySelector(".extraordinary__parallax-lakes")?.classList.remove("opacity");
          document.querySelector(".extraordinary__parallax-mountain")?.classList.remove("opacity");
          setActiveStep(1);
          break;
      }
    };

    const interval = timer();

    return () => clearTimeout(interval);
  }, [activeStep]);

  // Filter

  const [filteredCategory, setFilteredCategory] = useState<Category>('World');

  const handleFilterChange = (category: Category) => {
    setFilteredCategory(category);
  };

  const filteredTrips = filteredCategory === 'World' 
    ? dataTrips 
    : dataTrips.filter(trip => trip.category === filteredCategory);

  return (
    <main className="main padding-none">
        <section className="extraordinary">
          <div className="extraordinary__body">
            <div className="extraordinary__content container">
              <h1 className="extraordinary__content-title title_h1">
                <span className="extraordinary__content-sup-title title_h4">the world’s most</span>
                extra ordinary
              </h1>
              <h1 className="extraordinary__content-sub-title title_h2">Places</h1>
            </div>
            <div className="extraordinary__parallax">
              <div className="extraordinary__parallax-romb extraordinary__parallax-romb_01"></div>
              <div className="extraordinary__parallax-romb extraordinary__parallax-romb_02"></div>
              <div className="extraordinary__parallax-romb extraordinary__parallax-romb_03"></div>
              <div className="extraordinary__parallax-main"></div>
              <div className="extraordinary__parallax-thailand"></div>
              <div className="extraordinary__parallax-lakes"></div>
              <div className="extraordinary__parallax-mountain"></div>
              <div className="extraordinary__parallax-cloud1"></div>
              <div className="extraordinary__parallax-cloud2"></div>
            </div>
          </div>
        </section>
        <div className="extraordinary__content-block">
          <div className="main-form">
            <div className="main-form__container container">
              <button className="main-form__btn btn__decor btn__decor_w"><span>find your journey</span></button>
              {/* <div className="main-form__form-wrapper">
                  <form action="#" className="main-form__form">
                  <label className="main-form__label" htmlFor="Destination">
                    <span className="main-form__label-text main-form__label-text_01">Destination</span>
                    <input className={`${manrope.className} main-form__label-input`} id="Destination" name="place" type="text"  minLength={2} maxLength={30} placeholder="Where are you going?" required />
                  </label>
                  <label className="main-form__label" htmlFor="travel-type">
                    <span className="main-form__label-text main-form__label-text_02">Travel type</span>
                    <select value={selectedOption1} onChange={(e) => setSelectedOption1(e.target.value)} className={`${manrope.className} main-form__label-select`} name="travel-type" id="travel-type">
                      <option value="1 Adventure Travel">1 Adventure Travel</option>
                      <option value="2 Adventure Travel">2 Adventure Travel</option>
                      <option value="3 Adventure Travel">3 Adventure Travel</option>
                      <option value="4 Adventure Travel">4 Adventure Travel</option>
                    </select>
                  </label>
                  <label className="main-form__label" htmlFor="date">
                    <span className="main-form__label-text main-form__label-text_03">When</span>
                    <input className={`${manrope.className} main-form__label-input`} name="date" id="date" type="date" required />
                  </label>
                  <label className="main-form__label" htmlFor="Travellers">
                    <span className="main-form__label-text main-form__label-text_04">Travellers</span>
                    <select value={selectedOption2} onChange={(e) => setSelectedOption2(e.target.value)} className={`${manrope.className} main-form__label-select`} name="Travellers" id="Travellers">
                      <option value="1 Person">1 Person</option>
                      <option value="2 Persons">2 Persons</option>
                      <option value="3 Persons">3 Persons</option>
                      <option value="4 Persons">4 Persons</option>
                    </select>
                  </label>
                  <button className="main-form__form-btn" type="button"><span>Find</span></button>
                </form>
              </div> */}
            </div>
          </div>
          <section className="main-slider">
          <div className="main-slider__container container">
            <h2 className="main-slider__title title_h3">Top Rated Experiences</h2>
            <FilterComponent
              onFilterChange={handleFilterChange} 
              categories={['World', 'Africa', 'Asia', 'Europe', 'North America', 'South America', 'Antarctica', 'Australia']}
            />
          </div>
          <div className="main-slider__slider slider">
              <div className="main-slider__slider-container slider-container">
                <button className="main-slider__slider-btn main-slider__prev prev btn_1 slider-prev" type="button"></button>
                <button className="main-slider__slider-btn main-slider__next next btn_1 slider-next" type="button"></button>
                <div className="main-slider__slider-track slider-track">
                   <Swiper
                   {...sliderTripsSettings}
                   className="swiper-trips"
                   pagination={{
                    el: '.custom-pagination', // Вказуємо контейнер для пагінації
                    clickable: true,
                    renderBullet: (index, className) => {
                      return `<span class="${className} custom-bullet"></span>`;
                    },
                  }}
                   navigation={{
                    nextEl: '.main-slider__next',
                    prevEl: '.main-slider__prev',
                   }}
                   modules={[Navigation, Pagination]}
                   >
                   {filteredTrips.map((item) => (
                    <SwiperSlide key={item.id}>
                      <div  className="main-slider__slider-item slider-item">
                        <div className="trip-card" id="trip01">
                        <Image src={item.image} width={350} height={570} alt="card" />
                        <div className="trip-card__info">
                          <div className="trip-card__about">
                            <div className={`${manrope.className} trip-card__place text_h2`}>{item.place}</div>
                            <Link href={`/customise/${item.id}`} className="trip-card__name title_h5">{item.text}</Link>
                            <div className="trip-card__bottom">
                              <div className="trip-card__price">
                                <b className={`${manrope.className} text_h2`}>From</b>
                                <div className="trip-carddivice-price text_h3">€ <output>{item.price}</output></div>
                              </div>
                              <Link href={`/customise/${item.id}`} className="trip-card__customise text_h4">customise </Link>
                            </div>
                          </div>
                          <div className="trip-card__rating">
                            <div className={`${manrope.className} trip-card__rating-rating text_h2`}>{item.rating}.0</div>
                            <div className="trip-card__rating-scale">
                              {Array.from({ length: 5 }, (_, index) => (
                                <div 
                                  key={index} 
                                  className={`trip-card__rating-point ${index < item.rating ? 'active' : ''}`} 
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
          <div className="content-block__sub-block">
				    <div className="content-block__bg-beach"></div>

            <section className="luxary">
              <div className="luxary__container container">
                <div className="luxary__content">
                <div className="luxary__item-title">
                  <div className="luxary__title-wrapper">
                    <h2 className="luxary__title title_h3">Luxury Packages</h2>
                    <Link href={"/luxury-packages"} className="luxary__link text_h4">view all</Link>
                  </div>
                </div>

                <div className="luxary__item trip-link">
                  <Image src="/img/section-extraordinary/catalog/luxary01.jpg" alt="luxary link" width={350} height={570} />
                  <div className="trip-link__content">
                    <div className="trip-link__title title_h5">Best Winter Destinations</div>
                  </div>
                  <a href="" className="trip-link__link">
                    <span className="trip-link__link-wrapper">
                      <span>
                        <output>34</output>
                        <b>places</b>
                      </span>
                    </span>
                  </a>
                </div>

                <div className="luxary__item trip-link">
                  <Image src="/img/section-extraordinary/catalog/luxary02.jpg" alt="luxary link" width={350} height={570} />
                  <div className="trip-link__content">
                    <div className="trip-link__title title_h5">The world's most extraordinary places</div>
                  </div>
                  <a href="" className="trip-link__link">
                    <span className="trip-link__link-wrapper">
                      <span>
                        <output>29</output>
                        <b>places</b>
                      </span>
                    </span>
                  </a>
                </div>

                <div className="luxary__item trip-link">
                  <Image src="/img/section-extraordinary/catalog/luxary03.jpg" alt="luxary link" width={350} height={570} />
                  <div className="trip-link__content">
                    <div className="trip-link__title title_h5">New destinations for 2022</div>
                  </div>
                  <a href="" className="trip-link__link">
                    <span className="trip-link__link-wrapper">
                      <span>
                        <output>47</output>
                        <b>places</b>
                      </span>
                    </span>
                  </a>
                </div>

                <div className="luxary__item trip-link">
                  <Image src="/img/section-extraordinary/catalog/luxary04.jpg" alt="luxary link" width={350} height={570} />
                  <div className="trip-link__content">
                    <div className="trip-link__title title_h5">Your health is matter</div>
                  </div>
                  <a href="" className="trip-link__link">
                    <span className="trip-link__link-wrapper">
                      <span>
                        <output>29</output>
                        <b>places</b>
                      </span>
                    </span>
                  </a>
                </div>

                <div className="luxary__item trip-link">
                  <Image src="/img/section-extraordinary/catalog/luxary05.jpg" alt="luxary link" width={350} height={570} />
                  <div className="trip-link__content">
                    <div className="trip-link__title title_h5">Experiences Away From Crowd</div>
                  </div>
                  <a href="" className="trip-link__link">
                    <span className="trip-link__link-wrapper">
                      <span>
                        <output>168</output>
                        <b>places</b>
                      </span>
                    </span>
                  </a>
                </div>
                </div>
                
              </div>
            </section>

            <section className="book">
              <div className="book__container container">
                <h2 className="book__title title_h3">Book With Us</h2>
                <div className="book__block">
                  {dataBook.map((item) => (
                    <Link 
                     key={item.id}
                     className="book__link" 
                     href={`/book-form/${item.id}`}
                    >
                      <Image width={540} height={190} src={item.image} alt="booking" />
                      <span className="book__link-title title_h6">{item.title}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
			    </div>
          <div className="content-block__sub-block01">
            <div className="content-block__cloud01"></div>
            <div className="content-block__cloud02"></div>
            <div className="content-block__cloud03"></div>
            <div className="content-block__cloud04"></div>
            <div className="content-block__cloud05"></div>
            <section className="why">
              <div className="why__parallax">
                <div className="why__parallax-container container">
                  <div className="why__parallax-pic"></div>
                  <div className="why__parallax-icon why__parallax-icon_01">
                    <div className="why__parallax-icon-wrapper">
                      <Image src="/img/section-extraordinary/why01.jpg" alt="why lux" width={145} height={325} />
                    </div>
                    <Image className="why__parallax-blur" src="/img/section-extraordinary/why01.jpg" alt="why lux" width={145} height={325} />
                  </div>
                  <div className="why__parallax-icon why__parallax-icon_02">
                    <div className="why__parallax-icon-wrapper">
                      <Image src="/img/section-extraordinary/why02.jpg" alt="why lux" width={145} height={325} />
                    </div>
                    <Image className="why__parallax-blur" src="/img/section-extraordinary/why02.jpg" alt="why lux" width={145} height={325} />
                  </div>
                  <div className="why__parallax-icon why__parallax-icon_03">
                    <div className="why__parallax-icon-wrapper">
                      <Image src="/img/section-extraordinary/why03.jpg" alt="why lux" width={145} height={325} />
                    </div>
                    <Image className="why__parallax-blur" src="/img/section-extraordinary/why03.jpg" alt="why lux" width={145} height={325} />
                  </div>
                </div>
              </div>
              <div className="why__body">
                <div className="why__container container">
                  <div className="why__title">
                    <h2 className="why__title-title title_h3">Why Lux Trips</h2>
                    <p className="why__title-text text_h5">As Travel Designer, we know the ins and outs of travel from who to work with, where to go, when to book, and which restaurant provides the most authentic cuisine. </p>
                  </div>
                  <div className="why__content">
                    <div className="why__content-text01 text_h6">Exclusive knowledge to provide the best of the best to clients</div>
                    <div className="why__content-text02 text_h5">Our area of expertise ranges from luxury resorts and villas/chalets holiday bookings, private yacht and jet charters, to exclusive tours and personalized journey planning. </div>
                    <div className="why__content-pic">
                      <div className="why__parallax-icon-wrapper">
                        <Image src="/img/section-extraordinary/why04.jpg" alt="why lux" width={245} height={545} />
                      </div>
                      <Image className="why__parallax-blur" src="/img/section-extraordinary/why04.jpg" alt="why lux" width={145} height={325} />
                    </div>
                    <div className="why__content-text03 text_h7">We craft and plan unique itineraries tailored to customers’ interests and with strong attention to detail.</div>
                    <Link href={"/why-lux-trips"} className="why__content-link title_h7">help me plan a trip</Link>
                  </div>
                </div>
              </div>
            </section>

            <section className="customise">
              <div className="customise__container container">
                <div className="customise__block">
                  <h2 className="customise__title title_h3">Customise your trip with us</h2>
                  <div className="customise__item">
                    <div className="customise__item-romb">1</div>
                    <div className="customise__item-title">Describe your dream trip</div>
                    <p className="customise__item-text text_h5">Let us know what your perfect vacation is. Destinations, preferences, and personal interests.</p>
                  </div>
                  <div className="customise__item">
                    <div className="customise__item-romb">2</div>
                    <div className="customise__item-title">Get matched</div>
                    <p className="customise__item-text text_h5">Our team connects you with up to two vetted travel specialists, who will compete for your business.</p>
                  </div>
                  <div className="customise__item">
                    <div className="customise__item-romb">3</div>
                    <div className="customise__item-title">Book your vacation</div>
                    <p className="customise__item-text text_h5">Get your itinerary customized to fit your needs and preferences. book only when you’re happy with the travel specialist and the itinerary.</p>
                  </div>
                  <div className="customise__link">
                    <a href="#" className="customise__link-link btn__decor btn__decor_b"><span>Start a trip request</span></a>
                    <div className="customise__link-text text_h5">It’s Free! - no credit card required</div>
                  </div>
                </div>
                <SubscribeForm />
              </div>
            </section>
			   </div>
         <section className="reviews">
            <div className="reviews__container">
              <h2 className="reviews__title main-slider__title title_h3">Customers reviews</h2>
              <div className="reviews__slider slider slider-2">
                <div className="reviews__slider-container slider-container">
                  <button className="main-slider__slider-btn prev reviews__slider-prev btn_1 slider-prev" type="button"></button>
                  <button className="main-slider__slider-btn next reviews__slider-next btn_1 slider-next" type="button"></button>
                  <div className="reviews__slider-track slider-track">
                    <Swiper
                    {...sliderReviewsSettings}
                    className="swiper-reviews"
                    pagination={{
                      el: '.custom-pagination-2', // Вказуємо контейнер для пагінації
                      clickable: true,
                      renderBullet: (index, className) => {
                        return `<span class="${className} custom-bullet-2"></span>`;
                      },
                    }}
                    navigation={{
                      nextEl: '.reviews__slider-next',
                      prevEl: '.reviews__slider-prev',
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
                              <Image src={item.image} alt="customer" width={100} height={100} />
                            </div>
                            <p className="review__wrapper-text text_h1">{item.text}</p>
                            <div className="review__wrapper-wrapper">
                              <div className="review__wrapper-name">{item.name}</div>
                              <div className="review__wrapper-place">{item.place}</div>
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
                    <input id="name" type="text" name="user-name" required placeholder="Name" />
                  </label>
                  <label htmlFor="email" className="reviews__contact-input">
                    <input id="email" type="tel" name="user-phone" required placeholder="Phone" />
                  </label>
                  <div className="reviews__contact-btn">
                    <button className="btn__decor btn__decor_b" type="submit"><span>Call me back</span></button>
                  </div>
                </form>
              </div>
            </div>
			   </section>
        </div>
    </main>
  );
}

export default Home;