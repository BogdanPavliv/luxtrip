"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState, useCallback } from "react";
import WhiteBtn from "../../../components/ui/WhiteBtn";
import { Manrope } from "next/font/google";
import { dataTrips } from "../../../utils/data";

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

const DirectionsProducts = () => {
  const [visibleItems, setVisibleItems] = useState<number>(
    ITEMS_TO_SHOW.desktop
  );

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
  return (
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
                    <Link
                      href={`/details/${item.id}`}
                      className="trip-card__name title_h5"
                    >
                      {item.text}
                    </Link>
                    <div className="trip-card__bottom">
                      <div className="trip-card__price">
                        <b className={`${manrope.className} text_h2`}>From</b>
                        <div className="trip-carddivice-price text_h3">
                          € <output>{item.price}</output>
                        </div>
                      </div>
                      <Link
                        href={`/details/${item.id}`}
                        className="trip-card__customise text_h4"
                      >
                        details
                      </Link>
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
  );
};

export default DirectionsProducts;
