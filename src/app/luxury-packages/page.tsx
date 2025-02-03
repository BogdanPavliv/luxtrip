"use client";

import React, { useEffect, useState, useCallback } from "react";
import "./luxury-packages.scss";
import Image from "next/image";
import Link from 'next/link';

import { Manrope } from "next/font/google";
import { dataTrips } from "../utils/data";

import SubscribeForm from "../components/ui/SubscribeForm";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import WhiteBtn from "../components/ui/WhiteBtn";

const manrope = Manrope({
  subsets: ["latin"],
  weight: "500",
});

const BREAKPOINTS = {
  desktop: 1120,
  tablet: 768,
  mobile: 659,
};

const ITEMS_TO_SHOW = {
  desktop: 12,
  tablet: 8,
  mobile: 4,
};

const LuxuryPackagesPage: React.FC = () => {
  const [visibleItems, setVisibleItems] = useState<number>(ITEMS_TO_SHOW.desktop);
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([
    new Date("2022-12-14"),
    new Date("2022-12-28"),
  ]);
  const [customiseTour, setCustomiseTour] = useState(true);
  const [groupTour, setGroupTour] = useState(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const [selectedOption1, setSelectedOption1] = useState('1 Person');
  const [selectedOption2, setSelectedOption2] = useState('Romantic Winter Destinations');

  const handleResize = useCallback(() => {
    const width = window.innerWidth;
    if (width > BREAKPOINTS.desktop) setVisibleItems(ITEMS_TO_SHOW.desktop);
    else if (width > BREAKPOINTS.tablet) setVisibleItems(ITEMS_TO_SHOW.tablet);
    else setVisibleItems(ITEMS_TO_SHOW.mobile);
  }, []);

  useEffect(() => {
    handleResize(); // Initial setup
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  const loadMoreItems = () => setVisibleItems(dataTrips.length);

  const handleDateChange = (dates: [Date | null, Date | null]) => setDateRange(dates);

  const toggleCalendar = () => setIsCalendarOpen((prev) => !prev);

  const handleTourTypeChange = (type: "customise" | "group") => (event: React.ChangeEvent<HTMLInputElement>) => {
    if (type === "customise") setCustomiseTour(event.target.checked);
    if (type === "group") setGroupTour(event.target.checked);
  };

  return (
    <main className="main luxury-packages-page luxury-packages-page-bg">
      <div className="luxury-packages-page__wrapper">
        <section className="luxury-packages container">
          <h1 className="luxury-packages__title">Luxury packages</h1>

          <div className="luxury-packages__form">
            <h2 className="luxury-packages__form-title">
              <span></span> Find your journey
            </h2>
            <form className="luxury-packages__selection-form" action="#" method="get">
              <div className="luxury">
                <div className="luxury__img"></div>
                <label className="luxury-packages__description" htmlFor="destinations-tour">
                  Luxury Tours
                </label>
                <select value={selectedOption2} onChange={(e) => setSelectedOption2(e.target.value)} className="luxury-packages__text cell-position" name="destinations" id="destinations-tour">
                  <option value="Romantic Winter Destinations">Romantic Winter Destinations</option>
                  <option value="New destinations for 2022">New destinations for 2022</option>
                  <option value="Best Winter Destinations">Best Winter Destinations</option>
                  <option value="Your health is matter">Your health is matter</option>
                  <option value="The world's most extraordinary places">The world&apos;s most extraordinary places</option>
                  <option value="Experiences Away From Crowd">Experiences Away From Crowd</option>
                </select>
              </div>
              <div className="tour-date">
                <div className="tour-date__img"></div>
                <label className="luxury-packages__description" htmlFor="calendar">
                  When
                </label>
                <button
                  onClick={toggleCalendar}
                  className="luxury-packages__text cell-position"
                  id="calendar"
                  type="button"
                  name="daterange"
                >
                  {dateRange[0]?.toLocaleDateString("en-US", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  }) || "Start Date"} -
                  {dateRange[1]?.toLocaleDateString("en-US", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  }) || "End Date"}
                </button>
                {isCalendarOpen && (
                  <div className="datepicker-tour-date-wrapper">
                    <DatePicker
                      className="datepicker-tour-date"
                      selected={dateRange[0] || undefined}
                      onChange={handleDateChange}
                      startDate={dateRange[0] || undefined}
                      endDate={dateRange[1] || undefined}
                      selectsRange
                      inline
                      dateFormat="dd MMM yyyy"
                    />
                  </div>
                )}
              </div>
              <div className="quantity-tеravellers">
                <div className="quantity-tеravellers__img"></div>
                <label className="luxury-packages__description" htmlFor="tеravellers-counter">
                  Travellers
                </label>
                <select
                  value={selectedOption1} 
                  onChange={(e) => setSelectedOption1(e.target.value)}
                  className="luxury-packages__text cell-position"
                  name="num"
                  id="tеravellers-counter"
                >
                  {[...Array(6)].map((_, i) => (
                    <option key={i} value={`${i + 1} ${i === 0 ? "Person" : "Persons"}`}>
                      {i + 1} {i === 0 ? "Person" : "Persons"}
                    </option>
                  ))}
                </select>
              </div>
              <div className="type_tour">
                <div className="row-position">
                  <input
                    className="luxury-packages__input group"
                    id="group-type"
                    type="checkbox"
                    name="group"
                    checked={groupTour}
                    onChange={handleTourTypeChange("group")}
                  />
                  <label className="luxury-packages__text" htmlFor="group-type">
                    Group tours
                  </label>
                </div>
                <div className="row-position">
                  <input
                    className="luxury-packages__input customise"
                    id="customise-type"
                    type="checkbox"
                    name="customise"
                    checked={customiseTour}
                    onChange={handleTourTypeChange("customise")}
                  />
                  <label className="luxury-packages__text" htmlFor="customise-type">
                    Customise tours
                  </label>
                </div>
              </div>
            </form>
            <div className="luxury-packages__button-wrapper">
              <button className="luxury-packages__button" type="button">
                Find
              </button>
            </div>
          </div>
        </section>
        <section className="directions-products container">
          <div className="directions-products__list-wrapper">
            <ul className="directions-products__list">
              {dataTrips.slice(0, visibleItems).map((item) => (
                <li className="main-slider__slider-item slider-item" key={item.id}>
                  <div className="trip-card">
                    <Image src={item.image} width={350} height={570} alt="card" />
                    <div className="trip-card__info">
                      <div className="trip-card__about">
                        <div
                          className={`${manrope.className} trip-card__place text_h2`}
                        >
                          {item.place}
                        </div>
                        <Link href={`/details/${item.id}`} className="trip-card__name title_h5">{item.text}</Link>
                        <div className="trip-card__bottom">
                          <div className="trip-card__price">
                            <b className={`${manrope.className} text_h2`}>From</b>
                            <div className="trip-carddivice-price text_h3">
                              € <output>{item.price}</output>
                            </div>
                          </div>
                          <Link href={`/details/${item.id}`} className="trip-card__customise text_h4">details</Link>
                        </div>
                      </div>
                      <div className="trip-card__rating">
                        <div
                          className={`${manrope.className} trip-card__rating-rating text_h2`}
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
                </li>
              ))}
            </ul>
            {visibleItems < dataTrips.length && (
              <div className="wrap-btn">
                {/* <div className="btn-products-wrapper">
                  <button className="btn-products" type="button" onClick={loadMoreItems}>
                    <span></span> Load more
                  </button>
                </div> */}
                <WhiteBtn loadMoreItems={loadMoreItems}>Load more</WhiteBtn>
              </div>
            )}
          </div>
        </section>
        <SubscribeForm />
      </div>
    </main>
  );
};

export default LuxuryPackagesPage;
