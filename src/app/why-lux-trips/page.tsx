"use client";

import React from 'react';
import "./why-lux-trips.scss";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Link from 'next/link';
import SubscribeForm from "../components/ui/SubscribeForm";
import {dataBook} from "../utils/data";
import {sliderLuxtripsSettings} from "../utils/common";

type Props = {}

const WhyLuxTripsPage = (props: Props) => {
  return (
    <main className='main why-lux-page-bg'>
        <section className="luxtrips-preview">
                    <div className="luxtrips-preview-bg">
                        <div className="luxtrips-container luxtrips-preview__container">
                            <h1 className="title-main luxtrips-preview__title">Why<br /> LuxTrips</h1>
        
                            <ul className="luxtrips-preview-cards">
                                <li className="luxtrips-preview-card">
                                    <div className="luxtrips-preview-card__picture luxtrips-preview-card__picture-left">
                                        <div className="luxtrips-preview-card__image-block luxtrips-preview-card__image-block-left">
                                            <div className="luxtrips-preview-card__image-wrapper">
                                                <picture className="preview-card__image preview-card__image-left">
                                                    <source width={145} height={324} className="preview-card__img" media="(min-width: 769px)" srcSet="/img/why-lux-trips/img/preview-photo-1.webp" />
                                                    <Image width={83} height={187} className="preview-card__img" src="/img/why-lux-trips/img/preview-photo-1-mob.webp" alt="child" />
                                                </picture>
                                            </div>
                                            <picture className="preview-card__image preview-card__image-left">
                                                <source className="preview-card__img preview-card__img-blur" media="(min-width: 769px)" srcSet="/img/why-lux-trips/img/preview-photo-1.webp" width={145} height={324} />
                                                <Image width={83} height={187} className="preview-card__img preview-card__img-blur"
                                                    src="/img/why-lux-trips/img/preview-photo-1-mob.webp" alt="child" />
                                            </picture>
                                        </div>
                                    </div>
        
                                    <div className="luxtrips-preview-card__content">
                                        <h2 className="title preview-card__title">Bespoke experience of travelling</h2>
                                        <p className="preview-card__text">Being expert Luxury Travel Designers, Lux Trips offers
                                            bespoke experience of travelling.</p>
                                    </div>
                                </li>
        
                                <li className="luxtrips-preview-card preview-card-center">
                                    <div className="luxtrips-preview-card__picture">
                                        <div className="luxtrips-preview-card__image-block">
                                            <div className="luxtrips-preview-card__image-wrapper">
                                                <picture className="preview-card__image preview-card__image-center">
                                                    <Image width={144} height={323} className="preview-card__img"
                                                        src="/img/why-lux-trips/img/preview-photo-2.webp" alt="girl in asia"
                                                        loading="lazy" />
                                                </picture>
                                            </div>
                                            <picture className="preview-card__image preview-card__image-center">
                                                <Image width={144} height={323} className="preview-card__img preview-card__img-blur"
                                                    src="/img/why-lux-trips/img/preview-photo-2.webp" alt="girl in asia"
                                                    loading="lazy" />
                                            </picture>
                                        </div>
                                    </div>
        
                                    <div className="luxtrips-preview-card__content">
                                        <h2 className="title preview-card__title preview-card__title-center">Collecting precious
                                            moments is our utmost goal</h2>
                                        <p className="preview-card__text preview-card__text-center">Our exclusive network of trusted
                                            local partners allows us to carefully curate every detail.</p>
                                    </div>
                                </li>
        
                                <li className="luxtrips-preview-card">
                                    <div className="luxtrips-preview-card__picture luxtrips-preview-card__picture-right">
                                        <div
                                            className="luxtrips-preview-card__image-block luxtrips-preview-card__image-block-right">
                                            <div className="luxtrips-preview-card__image-wrapper">
                                                <picture className="preview-card__image preview-card__image-right">
                                                    <source width={144} height={323} className="preview-card__img" media="(min-width: 769px)" srcSet="/img/why-lux-trips/img/preview-photo-3.webp" />
                                                    <Image width={83} height={186} className="preview-card__img" src="/img/why-lux-trips/img/preview-photo-3-mob.webp" alt="family on a mountain lake" loading="lazy" />
                                                </picture>
                                            </div>
                                            <picture className="preview-card__image preview-card__image-right">
                                                <source width={144} height={323} className="preview-card__img preview-card__img-blur preview-card__img-blur-right" media="(min-width: 769px)" srcSet="/img/why-lux-trips/img/preview-photo-3.webp"/>
                                                <Image width={83} height={186} className="preview-card__img preview-card__img-blur preview-card__img-blur-right" src="/img/why-lux-trips/img/preview-photo-3-mob.webp" alt="family on a mountain lake" />
                                            </picture>
                                        </div>
                                    </div>
        
                                    <div className="luxtrips-preview-card__content">
                                        <h2 className="title preview-card__title">We personalize each trip</h2>
                                        <p className="preview-card__text">Thanks to our extensive knowledge and operation in the
                                            industry, we personalize each trip according to the needs and wishes of our clients.
                                        </p>
                                    </div>
                                </li>
                            </ul>
        
                            <ul className="luxtrips-preview-cards-mobile">
                                <li className="luxtrips-preview-card-mobile">
                                    <div className="luxtrips-preview-card__content-mobile">
                                        <h2 className="title preview-card__title preview-card__title-center">Collecting precious
                                            moments is our utmost goal</h2>
                                        <p className="preview-card__text preview-card__text-center">Our exclusive network of trusted
                                            local partners allows us to carefully curate every detail.</p>
                                    </div>
                                </li>
        
                                <li className="luxtrips-preview-card-mobile preview-card-mobile-center">
                                    <div className="luxtrips-preview-card__content-mobile">
                                        <h2 className="title preview-card__title">Bespoke experience of travelling</h2>
                                        <p className="preview-card__text">Being expert Luxury Travel Designers, Lux Trips offers
                                            bespoke experience of travelling.</p>
                                    </div>
                                </li>
        
                                <li className="luxtrips-preview-card-mobile">
                                    <div className="luxtrips-preview-card__content-mobile">
                                        <h2 className="title preview-card__title">We personalize each trip</h2>
                                        <p className="preview-card__text">Thanks to our extensive knowledge and operation in the
                                            industry, we personalize each trip according to the needs and wishes of our clients.
                                        </p>
                                    </div>
                                </li>
                            </ul>

                        </div>
                    </div>
        </section>
        <section className="experience">
                <div className="luxtrips-container experience__container">
                    <div className="experience-box">
                        <div className="experience-box__info">
                            <h2 className="title experience__title">Creating a unique experience for each client</h2>
                            <p className="experience__text">
                                Starting from suggesting destinations to visit in the current season, to the selection
                                of the most exquisite locations for a special event or a family dinner.
                            </p>
                        </div>

                        <ul className="experience-box__statistics">
                            <li className="statistics-block statistics-block-left">
                                <dl className="statistics-block__item">
                                    <dt>985</dt>
                                    <dd>Luxury trips<br/> provided</dd>
                                </dl>
                            </li>

                            <li className="statistics-block statistics-block-center">
                                <dl className="statistics-block__item">
                                    <dt>68</dt>
                                    <dd>Destinations</dd>
                                </dl>
                            </li>

                            <li className="statistics-block statistics-block-right">
                                <dl className="statistics-block__item">
                                    <dt>812</dt>
                                    <dd>Happy<br/> Customers</dd>
                                </dl>
                            </li>
                        </ul>
                    </div>
                </div>
        </section>
        <section className="offers">
                <div className="luxtrips-container offers__container">
                <h2 className="title offers__title">In Lux Trips we plan, organize and manage tailor-made itineraries
                    for our clients.</h2>
                <p className="offers__text">
                    Offering exclusive tours, exceptional accommodations and personalized journey-planning.
                </p>

                <div className="offers-box__wrapper">
                    <div className="offers-box">
                        <div className="offers-box__item-left">
                        <div className="offers-box__image-block">
                                    <div className="offers-box__image-wrapper">
                                        <picture className="offers-box__image">
                                            <source width={244} height={546} media="(min-width: 481px)"
                                                srcSet="/img/why-lux-trips/img/offers.webp" />
                                            <Image width={154} height={370} src="/img/why-lux-trips/img/offers-mob.webp" alt="picture of boy and girl" />
                                        </picture>
                                    </div>
                                    <picture className="offers-box__image">
                                        <source width={244} height={546} className="offers-box__image-blur" media="(min-width: 481px)" srcSet="/img/why-lux-trips/img/offers-blur.webp" />
                                        <Image width={154} height={370} className="offers-box__image-blur" src="/img/why-lux-trips/img/offers-blur-mob.webp" alt="picture of boy and girl"  />
                                    </picture>
                                </div>
                        </div>

                        <div className="offers-box__content">
                            <p className="offers-box__text">
                                We provide our clients with access to exclusive events and experiences, such as
                                glamping or fishing on private islands, private vineyard wine-tasting and tours, or
                                cruising a sea with a flock of dolphins, to name just a few.
                            </p>
                            <p className="offers-box__text">
                                Our location scouting for events and holidays encompasses diverse types of villas
                                and chalets, luxury resorts and world-class hotels around the world.
                            </p>

                            <Link href={"/luxury-packages"} className="luxtrips-btn offers__btn">Luxury packages</Link>
                        </div>
                    </div>
                </div>
                </div>
        </section>
        <section className="luxtrips-book">
                <div className="luxtrips-container luxtrips-book__container">
                    <h2 className="title luxtrips-book__title">
                        We customize your journey by selecting the most convenient travelling options, including private
                        yachts, jets, charter flights and supercars.
                    </h2>
                </div>

                <div className="luxtrips-book-slider">
                    <Swiper 
                    {...sliderLuxtripsSettings}
                    className="swiper-luxtrips"
                    >
                        {dataBook.map((item, i) => (
                            <SwiperSlide key={item.id} className="luxtrips-book-slide" style={{ backgroundImage: `url('${item.image}')` }}>
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
                    <Link href={"/book-with-us"} className="luxtrips-btn luxtrips-book__btn">Book now</Link>
                </div>
        </section>
        <section className="mission">
                <div className="luxtrips-container mission__container">
                    <div className="mission__content">
                        <p className="mission__text">
                            As a Luxury Travel Designer, we make it our mission to transform clients’ interests and
                            dreams into one-of-a-kind travel experience through the provision of premium quality
                            services.
                        </p>
                        <h2 className="title mission__title">
                            Importantly, in Lux Trips we get to know our clients personally, and hence, we get to have a
                            relationship with each of them.
                        </h2>
                        <p className="mission__text">
                            We construct long-lasting connections thanks to the unforgettable trips we design, as we
                            believe that travel is all about feelings, and memories are the most precious gifts we want
                            our customer to bring back with them.
                        </p>
                        <Link href={"/contact"} className="luxtrips-btn luxtrips-book__btn">Contact us</Link>
                    </div>
                </div>
        </section>
        <div className="newsletter-wrapper">
            <SubscribeForm />
        </div>
    </main>
  );
}

export default WhyLuxTripsPage;