"use client";

import React from 'react';
import "../details.scss";
import Image from "next/image";
import { Manrope } from "next/font/google";
import SubscribeForm from "../../components/ui/SubscribeForm";
import WhiteBtn from "../../components/ui/WhiteBtn";
import BlackBtn from "../../components/ui/BlackBtn";
import Link from 'next/link';
import { dataTrips } from "../../utils/data";

import { Input } from "../../components/ui/Input";
import { Formik, Form } from "formik";
import { initialValues, schemas } from "../../utils/helper";

const manrope300 = Manrope({
  subsets: ["latin"],
  weight: "300"
});

const manrope400 = Manrope({
  subsets: ["latin"],
  weight: "400"
});

const manrope500 = Manrope({
  subsets: ["latin"],
  weight: "500"
});

const manrope600 = Manrope({
  subsets: ["latin"],
  weight: "600"
});

const Details = ({ params }: { params: Promise<{ id: string }> }) => {

  // Розкриваємо params за допомогою React API
  const { id } = React.use(params);
  
  // Конвертуємо ID в число
  const detailsId = parseInt(id, 10);
  
  // Знаходимо відповідний запис
  const details = dataTrips.find((item) => item.id === detailsId);
   
  if (!details) return <p>Details not found</p>;

  return (
    <main className='main details-bg'> 
      <section className="section-top">
        <div className="container">
          <h1 className='section-top-title'>Romantic Winter Destinations</h1>
          <div className="section-top__bg" style={{ backgroundImage: `url('${details.imageWide}')` }}>
                  <div className="section-top__snake-rhombs">
                    <h6>5.0</h6>
                    <svg width="10" height="19" viewBox="0 0 10 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g filter="url(#filter0_b_9560_751)">
                      <path d="M5 0.651856C3.1579 3.96462 1.88259 6.24334 -1.07324e-07 9.65185L2.51012 14.1519L5 18.6519L7.51012 14.1519L10 9.65185L5 0.651856Z" fill="white"></path>
                      </g>
                      <defs>
                      <filter id="filter0_b_9560_751" x="-10" y="-9.34814" width="30" height="38" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                      <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                      <feGaussianBlur in="BackgroundImageFix" stdDeviation="5"></feGaussianBlur>
                      <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_9560_751"></feComposite>
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_9560_751" result="shape"></feBlend>
                      </filter>
                      </defs>
                    </svg>
                    <svg width="10" height="19" viewBox="0 0 10 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g filter="url(#filter0_b_9560_751)">
                      <path d="M5 0.651856C3.1579 3.96462 1.88259 6.24334 -1.07324e-07 9.65185L2.51012 14.1519L5 18.6519L7.51012 14.1519L10 9.65185L5 0.651856Z" fill="white"></path>
                      </g>
                      <defs>
                      <filter id="filter0_b_9560_751" x="-10" y="-9.34814" width="30" height="38" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                      <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                      <feGaussianBlur in="BackgroundImageFix" stdDeviation="5"></feGaussianBlur>
                      <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_9560_751"></feComposite>
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_9560_751" result="shape"></feBlend>
                      </filter>
                      </defs>
                    </svg>
                    <svg width="10" height="19" viewBox="0 0 10 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g filter="url(#filter0_b_9560_751)">
                      <path d="M5 0.651856C3.1579 3.96462 1.88259 6.24334 -1.07324e-07 9.65185L2.51012 14.1519L5 18.6519L7.51012 14.1519L10 9.65185L5 0.651856Z" fill="white"></path>
                      </g>
                      <defs>
                      <filter id="filter0_b_9560_751" x="-10" y="-9.34814" width="30" height="38" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                      <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                      <feGaussianBlur in="BackgroundImageFix" stdDeviation="5"></feGaussianBlur>
                      <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_9560_751"></feComposite>
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_9560_751" result="shape"></feBlend>
                      </filter>
                      </defs>
                    </svg>
                    <svg width="10" height="19" viewBox="0 0 10 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g filter="url(#filter0_b_9560_751)">
                      <path d="M5 0.651856C3.1579 3.96462 1.88259 6.24334 -1.07324e-07 9.65185L2.51012 14.1519L5 18.6519L7.51012 14.1519L10 9.65185L5 0.651856Z" fill="white"></path>
                      </g>
                      <defs>
                      <filter id="filter0_b_9560_751" x="-10" y="-9.34814" width="30" height="38" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                      <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                      <feGaussianBlur in="BackgroundImageFix" stdDeviation="5"></feGaussianBlur>
                      <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_9560_751"></feComposite>
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_9560_751" result="shape"></feBlend>
                      </filter>
                      </defs>
                    </svg>
                    <svg width="10" height="19" viewBox="0 0 10 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g filter="url(#filter0_b_9560_751)">
                      <path d="M5 0.651856C3.1579 3.96462 1.88259 6.24334 -1.07324e-07 9.65185L2.51012 14.1519L5 18.6519L7.51012 14.1519L10 9.65185L5 0.651856Z" fill="white"></path>
                      </g>
                      <defs>
                      <filter id="filter0_b_9560_751" x="-10" y="-9.34814" width="30" height="38" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                      <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                      <feGaussianBlur in="BackgroundImageFix" stdDeviation="5"></feGaussianBlur>
                      <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_9560_751"></feComposite>
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_9560_751" result="shape"></feBlend>
                      </filter>
                      </defs>
                    </svg>
                  </div>
                  <div className="section-top__name-location">&nbsp;{details.place}</div>
                  <h2>{details.text}</h2>
                  <p>from<br /><span>€ {details.price}</span></p>
                  <Link href={`/customise/${details.id}`}>customise</Link>
                  <div className="container-button">
                    <WhiteBtn>book now</WhiteBtn>
                  </div>
          </div>
        </div>
      </section>
      <section className="section-navigation">
        <div className="container">
          <div className="section-navigation__inner">
            <ul>
              <li><a href="#information">information</a></li>
              <li><a href="#luxury-tour-plan">luxury tour plan</a></li>
              <li><a href="#location">location</a></li>
              <li><a href="#travel-tips">travel Tips</a></li>
              <li><a href="#gallery">gallery</a></li>
              <li><a href="#reviews">reviews</a></li>
              <li><a href="#cancellation-policy">cancellation policy</a></li>
            </ul>
          </div>
        </div>
      </section>
      <section className="information">
          <div className="container">
            <div className="information__inner">
              <div className="col-1">
                <div  className="main-slider__slider-item slider-item">
                  <div className="trip-card" id="trip01">
                      <Image width={350} height={570} src={details.image} alt="card" />
                      <div className="trip-card__info">
                        <WhiteBtn>book now</WhiteBtn>
                      </div>
                  </div>
                </div>
              </div>
              <div className="col-2">
                <div className="col-1">
                  <h2>{details.text}</h2>
                  <div className="info">
                    <div className={`${manrope600.className} col-1`}>
                      <ul>
                        <li>duration</li>
                        <li>travel style</li>
                        <li>max group size</li>
                        <li>activity level</li>
                        <li>season</li>
                      </ul>
                    </div>
                    <div className={`${manrope400.className} col-2`}>
                      <ul>
                        <li>8 days / 7 nights</li>
                        <li>guided small groups</li>
                        <li>16</li>
                        <li>level 1/4  &#40;easy&#41; </li>
                        <li>sep - mar</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className={`${manrope400.className} col-2 list`}>
                  <h6>tour highlights</h6>
                  <ul>
                    <li>Watch the northern lights dance and flicker in the sky</li>
                    <li>
                      Visit the massive floating icebergs at the glacier lagoon
                    </li>
                    <li>
                      Marvel at the moon-like landscapes of the Lake Mývatn area
                    </li>
                    <li>
                      Walk the quaint streets of Akureyri, the unofficial capital of
                      north Iceland
                    </li>
                    <li>
                      Photograph the jagged basalt columns & sweeping black sand
                      beaches
                    </li>
                    <li>Tour the famous Golden Circle attractions</li>
                    <li>
                      Roam beautiful Borgarfjörður, a scenic slice of West Iceland
                    </li>
                    <li>
                      Enjoy the cascading waterfalls of Seljalandsfoss & Skógafoss
                    </li>
                    <li>
                      Stay at Magma Hotel, one of the 10 best-rated hotels in
                      Iceland
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
      </section>   
      <section className="section-navigation">
        <div className="container">
          <div className="section-navigation__inner">
            <ul>
              <li><a href="#information">information</a></li>
              <li><a href="#luxury-tour-plan">luxury tour plan</a></li>
              <li><a href="#location">location</a></li>
              <li><a href="#travel-tips">travel Tips</a></li>
              <li><a href="#gallery">gallery</a></li>
              <li><a href="#reviews">reviews</a></li>
              <li><a href="#cancellation-policy">cancellation policy</a></li>
            </ul>
          </div>
        </div>
      </section>
      <section className="luxury-tour-plan">
      <div className="container">
        <div id="luxury-tour-plan" className="section luxury-tour-plan__inner">
                <h2>Luxury Tour Plan</h2>
                

                <div className="luxury-tour-plan__grid">
                  <div className="luxury-tour-plan__item">
                    <div className="luxury-tour-plan__item-left">
                      <h3 className="luxury-tour-plan__item-title">
                        Day 1: <br /> Arrival & Sightseeing in Reykjavík
                      </h3>
                    </div>
                    <div className="luxury-tour-plan__item-right">
                      <p className={`${manrope400.className} luxury-tour-plan__item-text`}>
                        On arrival at Keflavik International Airport, you will be greeted by a driver who will transfer you to your hotel in the city centre of Reykjavík. After settling in, the rest of the day is free for you to explore the vibrant capital city with its abundance of museums, restaurants and bars to suit all tastes. If you&apos;re interested in checking out Icelandic design or experiencing the city&apos;s thriving coffee culture, head to the main street, Laugavegur, and enjoy its various shops and cosy cafes.
                      </p>
                      <p className={`${manrope400.className} luxury-tour-plan__item-text`}>
                        At 18:00, you will meet your group and guide for a welcome drink and a short introduction about the itinerary and some useful information about the coming days. Spend the night at Center Hotel Laugavegur or similar. For those arriving early today you have the option to upgrade your journey from the airport with a visit to the Blue Lagoon geothermal spa before heading to the city. It´s the perfect way to start your Iceland adventure!
                      </p>
                      <h6 className={`${manrope600.className} luxury-tour-plan__title`}>Included:</h6>
                      <ul className={`${manrope400.className} luxury-tour-plan__item-list`}>
                        <li className="luxury-tour-plan__item-item">
                          Private meet and greet airport transfer on arrival
                        </li>
                        <li className="luxury-tour-plan__item-item">
                          Welcome drink and group information meeting with your guide
                        </li>
                      </ul>
                      <p className={`${manrope400.className} luxury-tour-plan__item-text`}>
                        Average Driving Distance: 49 km / 30 mi.
                        Average Travel & Exploring Duration: 50 Minutes
                      </p>
                    </div>
                  </div>
                  <div className="luxury-tour-plan__item">
                    <div className="luxury-tour-plan__item-left">
                      <h3 className="luxury-tour-plan__item-title">
                        Day 2: <br /> Wonders of the golden circle
                      </h3>
                    </div>
                    <div className="luxury-tour-plan__item-right">
                      <p className={`${manrope400.className} luxury-tour-plan__item-text`}>
                        This morning your guide will pick you and your fellow travellers up at the hotel. The first leg of the journey takes you around the famous Golden Circle, a popular route containing some of the best-known natural sites in Iceland. Highlights include Þingvellir National Park, a UNESCO heritage site; the Geysir geothermal hot spring area and the powerful Gullfoss waterfall.
                      </p>
                      <p className={`${manrope400.className} luxury-tour-plan__item-text`}>
                        The tour will also visit the geothermally-heated greenhouses at the Friðheimar tomato farm, where we will get to taste the fresh tomato products. Spend the night at Hótel Selfoss or similar.
                      </p>
                      <h6 className={`${manrope600.className} luxury-tour-plan__title`}>Included:</h6>
                      <ul className={`${manrope400.className} luxury-tour-plan__item-list`}>
                        <li className="luxury-tour-plan__item-item">
                          Visit to the Friðheimar Tomato Farm Greenhouse
                        </li>
                        <li className="luxury-tour-plan__item-item">
                          Breakfast: Continental Breakfast Buffet at the Hotel
                        </li>
                      </ul>
                      <p className="luxury-tour-plan__item-notice">
                        *Please note that the northern lights are a natural phenomenon. If weather conditions and visibility are not favourable, the guide will inform you about the matter.
                      </p>
                      <p className={`${manrope400.className} luxury-tour-plan__item-text`}>
                        Average Driving Distance: 49 km / 30 mi.
                        Average Travel & Exploring Duration: 50 Minutes
                      </p>
                    </div>
                  </div>
                  <div className="luxury-tour-plan__item">
                    <div className="luxury-tour-plan__item-left">
                      <h3 className="luxury-tour-plan__item-title">
                        Day 3: <br /> Waterfalls, volcanic beaches & northern lights
                      </h3>
                    </div>
                    <div className="luxury-tour-plan__item-right">
                      <p className={`${manrope400.className} luxury-tour-plan__item-text`}>
                        Today you will explore majestic waterfalls, black sand beaches and learn about the unique geology of Iceland. You will start with a visit to the Lava Centre, a one of a kind interactive exhibition about Iceland’s volcanic activity, its frequent earthquakes and how Iceland evolved over millions of years. Next up is the fairy tale-like Seljalandsfoss waterfall, where you can walk behind the icy cascade on a footpath.
                      </p>
                      <p className={`${manrope400.className} luxury-tour-plan__item-text`}>
                        Close by your guide will take you to Skógarfoss, an empressive 60-metre high waterfall located at the foot of a mountain range, followed by a visit to the Skógar Folk Museum. The last stop before continuing to your accommodation is at the black sand volcanic beach near the village of Vík í Mýrdal. Here, you will be able to see the spectacular rock arch and steep cliffs of along with the Reynisdrangar basalt columns just off the shore.
                      </p>
                      <p className={`${manrope400.className} luxury-tour-plan__item-text`}>
                        Next, you will travel to your carefully selected charming boutique hotel, situated far from the city lights to give you the best chance of seeing the northern lights. Enjoy dinner at Magma Hotel with the group. Spend the night at the Magma Hotel.
                      </p>
                      <h6 className={`${manrope600.className} luxury-tour-plan__title`}>Included:</h6>
                      <ul className={`${manrope400.className} luxury-tour-plan__item-list`}>
                        <li className="luxury-tour-plan__item-item">
                          Entrance fee to the Lava Center
                        </li>
                        <li className="luxury-tour-plan__item-item">
                          Entrance fee to the Skógar Folk Museum
                        </li>
                        <li className="luxury-tour-plan__item-item">
                          Breakfast: Continental Breakfast Buffet at the Hotel
                        </li>
                        <li className="luxury-tour-plan__item-item">
                          Dinner at Magma Hotel
                        </li>
                      </ul>
                      <p className={`${manrope400.className} luxury-tour-plan__item-text`}>
                        Average Driving Distance: 49 km / 30 mi.
                        Average Travel & Exploring Duration: 50 Minutes
                      </p>
                    </div>
                  </div>
                  <div className="luxury-tour-plan__item">
                    <div className="luxury-tour-plan__item-left">
                      <h3 className="luxury-tour-plan__item-title">
                        Day 8: <br /> Departure from Reykjavik
                      </h3>
                    </div>
                    <div className="luxury-tour-plan__item-right">
                      <p className={`${manrope400.className} luxury-tour-plan__item-text`}>
                        When it’s time for your Iceland adventure to end, you will be picked up from your hotel by a shuttle bus about three hours before your flight. If you’re flying in the afternoon, you have the option to visit the Blue Lagoon geothermal spa to relax in the warm mineral waters before continuing to the airport &#40;optional: not included&#41; . If you are interested in extending your stay, we can book extra nights and activities in the Reykjavík area or even combine this tour with a visit to one of our other Nordic destinations.
                      </p>
                      <h6 className={`${manrope600.className} luxury-tour-plan__title`}>Included:</h6>
                      <ul className={`${manrope400.className} luxury-tour-plan__item-list`}>
                        <li className="luxury-tour-plan__item-item">
                          Breakfast: Continental Breakfast Buffet at the Hotel
                        </li>
                        <li className="luxury-tour-plan__item-item">
                          Shuttle Transfer to Keflavík International Airport on Departure
                        </li>
                      </ul>

                      <p className={`${manrope400.className} luxury-tour-plan__item-text`}>
                        Average Driving Distance: 49 km / 30 mi.
                        Average Travel & Exploring Duration: 50 Minutes
                      </p>
                    </div>
                  </div>
                </div>

                <div className="included-section list">
                  <h5>Included</h5>
                  <ul className={`${manrope400.className}`}>
                    <li>One private transfer from Keflavík Airport to Reykjavík</li>
                    <li>Accommodation &#40;Comfort Plus&#41; for 7 nights</li>
                    <li>Daily Breakfast</li>
                    <li>Three Dinners</li>
                    <li>Welcome drink on the day of arrival</li>
                    <li>Professional English-speaking guide, as per itinerary</li>
                    <li>Transportation in a premium mini-coach, as per itinerary</li>
                    <li>
                      Entrance fee to the Northern Lights Photo Exhibition in
                      Fáskrúðsfjörður
                    </li>
                    <li>Entrance to Friðheimar Farm</li>
                    <li>Entrance to the Skógar Folk Museum</li>
                    <li>Entrance to the Lava Centre</li>
                    <li>Group information meeting with your tour guide</li>
                    <li>
                      One semi-private transfer from Reykjavík to Keflavík Airport on
                      departure
                    </li>
                    <li>Map of Iceland & Personal Itinerary</li>
                    <li>Iceland Travel Guide</li>
                    <li>24/7 helpline</li>
                    <li>Taxes & service fees</li>
                  </ul>
                </div>

                <div className="included-section list">
                  <h5>Included</h5>
                  <ul className={`${manrope400.className}`}>
                    <li>Flights to/from Iceland</li>
                    <li>Meals, drinks & entrance fees &#40;unless otherwise stated&#41; </li>
                    <li>Personal travel insurance</li>
                    <li>Any services not listed above as “Included”</li>
                  </ul>
                </div>

                <div className="extras-section list">
                  <h5>Optional Extras</h5>
                  <ul className={`${manrope400.className}`}>
                    <li>Extras</li>
                    <li>Cancellation Insurance</li>
                  </ul>
                </div>

                <div className="end-content">
                  
                  <BlackBtn>download pdf</BlackBtn>
                
                  <p className={`${manrope400.className}`}>
                    Whatever your needs, we are here to help. If you have any
                    questions about our packages and services, or if you want
                    customised privately guided tours, please do not hesitate to
                    contact us.
                  </p>
                  <p className={`${manrope400.className}`}>
                    Lux Trips | Tel: +41 78 205 83 88 | info@luxtrips.co |
                    www.luxtrips.co
                  </p>
                </div>
        </div>
      </div>
      </section>
      <section className="section-navigation">
        <div className="container">
          <div className="section-navigation__inner">
            <ul>
              <li><a href="#information">information</a></li>
              <li><a href="#luxury-tour-plan">luxury tour plan</a></li>
              <li><a href="#location">location</a></li>
              <li><a href="#travel-tips">travel Tips</a></li>
              <li><a href="#gallery">gallery</a></li>
              <li><a href="#reviews">reviews</a></li>
              <li><a href="#cancellation-policy">cancellation policy</a></li>
            </ul>
          </div>
        </div>
      </section>
      <section className="location">
      <div className="container">
            <div id="location" className="section location__inner">
              <h2>Location</h2>
              <p className={`${manrope400.className}`}>
                Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
                aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
                imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
                mollis pretium.
              </p>
              <div className="location__map"></div>
            </div>
      </div>
      </section>
      <section className="section-navigation">
        <div className="container">
          <div className="section-navigation__inner">
            <ul>
              <li><a href="#information">information</a></li>
              <li><a href="#luxury-tour-plan">luxury tour plan</a></li>
              <li><a href="#location">location</a></li>
              <li><a href="#travel-tips">travel Tips</a></li>
              <li><a href="#gallery">gallery</a></li>
              <li><a href="#reviews">reviews</a></li>
              <li><a href="#cancellation-policy">cancellation policy</a></li>
            </ul>
          </div>
        </div>
      </section>
      <section className="travel-tips">
      <div className="container">
        <div id="travel-tips" className="section travel-tips__inner">
          <h2>Travel Tips</h2>
            <div className="section-wrapper">
              <div className="row row-1">
                <h3>Buy a small backpack/suitcase</h3>
                <p className={`${manrope400.className}`}>
                    By purchasing a small backpack &#40;I like something around 35/40
                    liters&#41; , you will be forced you to pack light and avoid carrying
                    too much stuff. Humans have a natural tendency to want to fill
                    space so if you pack light but have lots of extra room in your
                    bag, you’ll end up going “well, I guess I can take more” and
                    then regret it.
                </p>
              </div>
              <hr />
              <div className="row row-2">
                <h3>But take extra socks</h3>
                <p className={`${manrope400.className}`}>
                    You’ll lose a bunch to laundry gremlins, wear and tear, and
                    hiking so packing extra will come in handy. I only take a few
                    more than I need. Nothing beats a fresh pair of socks!
                </p>
              </div>
              <hr />
              <div className="row row-3">
                <h3>Take an extra bank card and credit card with you</h3>
                <p className={`${manrope400.className}`}>
                    Disasters happen. It’s always good to have a backup in case you
                    get robbed or lose a card. You don’t want to be stuck somewhere
                    new without access to your funds. I once had a card duplicated
                    and a freeze put on it. I couldn’t use it for the rest of my
                    trip. I was very happy I had an extra and not like my friend,
                    who didn’t and was forced to borrow money from me all the time!
                </p>
              </div>
              <hr />
              <div className="row row-4">
                <h3>Travel by yourself at least once</h3>
                <p className={`${manrope400.className}`}>
                    By purchasing a small backpack &#40;I like something around 35/40
                    liters&#41; , you will be forced you to pack light and avoid carrying
                    too much stuff. Humans have a natural tendency to want to fill
                    space so if you pack light but have lots of extra room in your
                    bag, you’ll end up going “well, I guess I can take more” and
                    then regret it.
                </p>
              </div>
            </div>
        </div>
      </div>
      </section>
      <section className="section-navigation">
        <div className="container">
          <div className="section-navigation__inner">
            <ul>
              <li><a href="#information">information</a></li>
              <li><a href="#luxury-tour-plan">luxury tour plan</a></li>
              <li><a href="#location">location</a></li>
              <li><a href="#travel-tips">travel Tips</a></li>
              <li><a href="#gallery">gallery</a></li>
              <li><a href="#reviews">reviews</a></li>
              <li><a href="#cancellation-policy">cancellation policy</a></li>
            </ul>
          </div>
        </div>
      </section>
      <section className="gallery">
      <div className="container">
        <div id="gallery" className="section gallery__inner">
          <h2>Gallery</h2>
          <div className="gallery__images">
            <div className="gallery__images-top">
              <Image width={920} height={456} className="gallery__images-image" src={details.images.image} alt="" />
            </div>
            <div className="gallery__images-middle">
             <div className="gallery__images-middle-left">
                <Image width={350} height={571} className="gallery__images-image" src={details.images.image2} alt="" />
                <Image width={350} height={268} className="gallery__images-image" src={details.images.image5} alt="" />
             </div>
             <div className="gallery__images-middle-right">
                <Image width={540} height={268} className="gallery__images-image" src={details.images.image3} alt="" />
                <Image width={540} height={571} className="gallery__images-image" src={details.images.image4} alt="" />
             </div>
            </div>
            <div className="gallery__images-bottom">
              <Image width={920} height={456} className="gallery__images-image" src={details.images.image6} alt="" />
            </div>
          </div>
        </div>
      </div>
      </section>
      <section className="section-navigation">
        <div className="container">
          <div className="section-navigation__inner">
            <ul>
              <li><a href="#information">information</a></li>
              <li><a href="#luxury-tour-plan">luxury tour plan</a></li>
              <li><a href="#location">location</a></li>
              <li><a href="#travel-tips">travel Tips</a></li>
              <li><a href="#gallery">gallery</a></li>
              <li><a href="#reviews">reviews</a></li>
              <li><a href="#cancellation-policy">cancellation policy</a></li>
            </ul>
          </div>
        </div>
      </section>
      <section className="reviews-scores">
      <div className="container">
      <div id="reviews" className="section reviews-scores__inner">
              <h2>Reviews Scores and Score Breakdown</h2>
              <button>post comment</button>
              <div className="container-snakes-rhomb">
                <div className="snake snake-rhomb-1">
                  <h6 className="title-absolute">35 reviews</h6>
                  <svg width="17" height="31" viewBox="0 0 17 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.44526 0.512692C5.33381 6.1082 3.17972 9.95712 -0.000112715 15.7143L4.23966 23.3152L8.44526 30.916L12.685 23.3152L16.8906 15.7144L8.44526 0.512692Z" fill="#79655E"></path>
                  </svg>
                  <svg width="17" height="31" viewBox="0 0 17 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.44526 0.512692C5.33381 6.1082 3.17972 9.95712 -0.000112715 15.7143L4.23966 23.3152L8.44526 30.916L12.685 23.3152L16.8906 15.7144L8.44526 0.512692Z" fill="#79655E"></path>
                  </svg>
                  <svg width="17" height="31" viewBox="0 0 17 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.44526 0.512692C5.33381 6.1082 3.17972 9.95712 -0.000112715 15.7143L4.23966 23.3152L8.44526 30.916L12.685 23.3152L16.8906 15.7144L8.44526 0.512692Z" fill="#79655E"></path>
                  </svg>
                  <svg width="17" height="31" viewBox="0 0 17 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.44526 0.512692C5.33381 6.1082 3.17972 9.95712 -0.000112715 15.7143L4.23966 23.3152L8.44526 30.916L12.685 23.3152L16.8906 15.7144L8.44526 0.512692Z" fill="#79655E"></path>
                  </svg>
                  <svg width="17" height="31" viewBox="0 0 17 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.44526 0.512692C5.33381 6.1082 3.17972 9.95712 -0.000112715 15.7143L4.23966 23.3152L8.44526 30.916L12.685 23.3152L16.8906 15.7144L8.44526 0.512692Z" fill="#79655E"></path>
                  </svg>
                </div>
                <div className="snake snake-rhomb-2">
                  <h6>Comfort</h6>
                  <svg width="17" height="31" viewBox="0 0 17 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.44526 0.512692C5.33381 6.1082 3.17972 9.95712 -0.000112715 15.7143L4.23966 23.3152L8.44526 30.916L12.685 23.3152L16.8906 15.7144L8.44526 0.512692Z" fill="#79655E"></path>
                  </svg>
                  <svg width="17" height="31" viewBox="0 0 17 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.44526 0.512692C5.33381 6.1082 3.17972 9.95712 -0.000112715 15.7143L4.23966 23.3152L8.44526 30.916L12.685 23.3152L16.8906 15.7144L8.44526 0.512692Z" fill="#79655E"></path>
                  </svg>
                  <svg width="17" height="31" viewBox="0 0 17 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.44526 0.512692C5.33381 6.1082 3.17972 9.95712 -0.000112715 15.7143L4.23966 23.3152L8.44526 30.916L12.685 23.3152L16.8906 15.7144L8.44526 0.512692Z" fill="#79655E"></path>
                  </svg>
                  <svg width="17" height="31" viewBox="0 0 17 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.44526 0.512692C5.33381 6.1082 3.17972 9.95712 -0.000112715 15.7143L4.23966 23.3152L8.44526 30.916L12.685 23.3152L16.8906 15.7144L8.44526 0.512692Z" fill="#79655E"></path>
                  </svg>
                  <svg width="17" height="31" viewBox="0 0 17 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.44526 0.512692C5.33381 6.1082 3.17972 9.95712 -0.000112715 15.7143L4.23966 23.3152L8.44526 30.916L12.685 23.3152L16.8906 15.7144L8.44526 0.512692Z" fill="#79655E"></path>
                  </svg>
                </div>
                <div className="snake snake-rhomb-3">
                  <h6>Hospitality</h6>
                  <svg width="17" height="31" viewBox="0 0 17 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.44526 0.512692C5.33381 6.1082 3.17972 9.95712 -0.000112715 15.7143L4.23966 23.3152L8.44526 30.916L12.685 23.3152L16.8906 15.7144L8.44526 0.512692Z" fill="#79655E"></path>
                  </svg>
                  <svg width="17" height="31" viewBox="0 0 17 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.44526 0.512692C5.33381 6.1082 3.17972 9.95712 -0.000112715 15.7143L4.23966 23.3152L8.44526 30.916L12.685 23.3152L16.8906 15.7144L8.44526 0.512692Z" fill="#79655E"></path>
                  </svg>
                  <svg width="17" height="31" viewBox="0 0 17 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.44526 0.512692C5.33381 6.1082 3.17972 9.95712 -0.000112715 15.7143L4.23966 23.3152L8.44526 30.916L12.685 23.3152L16.8906 15.7144L8.44526 0.512692Z" fill="#79655E"></path>
                  </svg>
                  <svg width="17" height="31" viewBox="0 0 17 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.44526 0.512692C5.33381 6.1082 3.17972 9.95712 -0.000112715 15.7143L4.23966 23.3152L8.44526 30.916L12.685 23.3152L16.8906 15.7144L8.44526 0.512692Z" fill="#79655E"></path>
                  </svg>
                  <svg width="17" height="31" viewBox="0 0 17 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.74371 23.0716L4.74454 23.0731L8.51441 29.8865L12.3149 23.0731L12.3158 23.0716L16.3863 15.7148L8.5124 1.54181C7.77213 2.87255 7.08362 4.10897 6.41779 5.30466C4.53013 8.69451 2.82478 11.757 0.639135 15.7132L4.74371 23.0716Z" stroke="#79655E"></path>
                  </svg>
                </div>
                <div className="snake snake-rhomb-4">
                  <h6>Hygiene</h6>
                  <svg width="17" height="31" viewBox="0 0 17 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.44526 0.512692C5.33381 6.1082 3.17972 9.95712 -0.000112715 15.7143L4.23966 23.3152L8.44526 30.916L12.685 23.3152L16.8906 15.7144L8.44526 0.512692Z" fill="#79655E"></path>
                  </svg>
                  <svg width="17" height="31" viewBox="0 0 17 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.44526 0.512692C5.33381 6.1082 3.17972 9.95712 -0.000112715 15.7143L4.23966 23.3152L8.44526 30.916L12.685 23.3152L16.8906 15.7144L8.44526 0.512692Z" fill="#79655E"></path>
                  </svg>
                  <svg width="17" height="31" viewBox="0 0 17 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.44526 0.512692C5.33381 6.1082 3.17972 9.95712 -0.000112715 15.7143L4.23966 23.3152L8.44526 30.916L12.685 23.3152L16.8906 15.7144L8.44526 0.512692Z" fill="#79655E"></path>
                  </svg>
                  <svg width="17" height="31" viewBox="0 0 17 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.44526 0.512692C5.33381 6.1082 3.17972 9.95712 -0.000112715 15.7143L4.23966 23.3152L8.44526 30.916L12.685 23.3152L16.8906 15.7144L8.44526 0.512692Z" fill="#79655E"></path>
                  </svg>
                  <svg width="17" height="31" viewBox="0 0 17 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.74371 23.0716L4.74454 23.0731L8.51441 29.8865L12.3149 23.0731L12.3158 23.0716L16.3863 15.7148L8.5124 1.54181C7.77213 2.87255 7.08362 4.10897 6.41779 5.30466C4.53013 8.69451 2.82478 11.757 0.639135 15.7132L4.74371 23.0716Z" stroke="#79655E"></path>
                  </svg>
                </div>
                <div className="snake snake-rhomb-5">
                  <h6>Reception</h6>
                  <svg width="17" height="31" viewBox="0 0 17 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.44526 0.512692C5.33381 6.1082 3.17972 9.95712 -0.000112715 15.7143L4.23966 23.3152L8.44526 30.916L12.685 23.3152L16.8906 15.7144L8.44526 0.512692Z" fill="#79655E"></path>
                  </svg>
                  <svg width="17" height="31" viewBox="0 0 17 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.44526 0.512692C5.33381 6.1082 3.17972 9.95712 -0.000112715 15.7143L4.23966 23.3152L8.44526 30.916L12.685 23.3152L16.8906 15.7144L8.44526 0.512692Z" fill="#79655E"></path>
                  </svg>
                  <svg width="17" height="31" viewBox="0 0 17 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.44526 0.512692C5.33381 6.1082 3.17972 9.95712 -0.000112715 15.7143L4.23966 23.3152L8.44526 30.916L12.685 23.3152L16.8906 15.7144L8.44526 0.512692Z" fill="#79655E"></path>
                  </svg>
                  <svg width="17" height="31" viewBox="0 0 17 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.44526 0.512692C5.33381 6.1082 3.17972 9.95712 -0.000112715 15.7143L4.23966 23.3152L8.44526 30.916L12.685 23.3152L16.8906 15.7144L8.44526 0.512692Z" fill="#79655E"></path>
                  </svg>
                  <svg width="17" height="31" viewBox="0 0 17 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.44526 0.512692C5.33381 6.1082 3.17972 9.95712 -0.000112715 15.7143L4.23966 23.3152L8.44526 30.916L12.685 23.3152L16.8906 15.7144L8.44526 0.512692Z" fill="#79655E"></path>
                  </svg>
                </div>
              </div>
              <div className="card-review card-1">
                <div className="col col-1">
                  <p className={`${manrope400.className} col-2`}>
                    “Well organized trip, All arranged well by Arooz. Special thanks
                    to Aijaz Bhai for the service and support given to us, all
                    explained well and take us to all places as per our wish. It was
                    a wonderful experience .... Thank you team”
                  </p>
                  <p className={`${manrope500.className} col-2`}>Eduard Hand<br /><span className={`${manrope300.className} col-2`}>Oct 15, 2021 at 8:27 am</span></p>
                </div>
                <div className="col-2">
                  <div className="container-snakes-rhomb rhomb-small">
                    <div className="snake snake-rhomb-1-small">
                      <h6>Comfort</h6>
                      <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.52364 0.481402C3.75429 3.66333 2.52935 5.85206 0.721112 9.12595L3.1321 13.4482L5.52364 17.7705L7.93463 13.4482L10.3262 9.12595L5.52364 0.481402Z" fill="#79655E"></path>
                      </svg>
                      <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.52364 0.481402C3.75429 3.66333 2.52935 5.85206 0.721112 9.12595L3.1321 13.4482L5.52364 17.7705L7.93463 13.4482L10.3262 9.12595L5.52364 0.481402Z" fill="#79655E"></path>
                      </svg>
                      <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.52364 0.481402C3.75429 3.66333 2.52935 5.85206 0.721112 9.12595L3.1321 13.4482L5.52364 17.7705L7.93463 13.4482L10.3262 9.12595L5.52364 0.481402Z" fill="#79655E"></path>
                      </svg>
                      <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.52364 0.481402C3.75429 3.66333 2.52935 5.85206 0.721112 9.12595L3.1321 13.4482L5.52364 17.7705L7.93463 13.4482L10.3262 9.12595L5.52364 0.481402Z" fill="#79655E"></path>
                      </svg>
                      <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.52364 0.481402C3.75429 3.66333 2.52935 5.85206 0.721112 9.12595L3.1321 13.4482L5.52364 17.7705L7.93463 13.4482L10.3262 9.12595L5.52364 0.481402Z" fill="#79655E"></path>
                      </svg>
                    </div>
                    <div className="snake snake-rhomb-2-small">
                      <h6>Hospitality</h6>
                      <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.52364 0.481402C3.75429 3.66333 2.52935 5.85206 0.721112 9.12595L3.1321 13.4482L5.52364 17.7705L7.93463 13.4482L10.3262 9.12595L5.52364 0.481402Z" fill="#79655E"></path>
                      </svg>
                      <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.52364 0.481402C3.75429 3.66333 2.52935 5.85206 0.721112 9.12595L3.1321 13.4482L5.52364 17.7705L7.93463 13.4482L10.3262 9.12595L5.52364 0.481402Z" fill="#79655E"></path>
                      </svg>
                      <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.52364 0.481402C3.75429 3.66333 2.52935 5.85206 0.721112 9.12595L3.1321 13.4482L5.52364 17.7705L7.93463 13.4482L10.3262 9.12595L5.52364 0.481402Z" fill="#79655E"></path>
                      </svg>
                      <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.52364 0.481402C3.75429 3.66333 2.52935 5.85206 0.721112 9.12595L3.1321 13.4482L5.52364 17.7705L7.93463 13.4482L10.3262 9.12595L5.52364 0.481402Z" fill="#79655E"></path>
                      </svg>
                      <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.52364 0.481402C3.75429 3.66333 2.52935 5.85206 0.721112 9.12595L3.1321 13.4482L5.52364 17.7705L7.93463 13.4482L10.3262 9.12595L5.52364 0.481402Z" fill="#79655E"></path>
                      </svg>
                    </div>
                    <div className="snake snake-rhomb-3-small">
                      <h6>Hygiene</h6>
                      <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.52364 0.481402C3.75429 3.66333 2.52935 5.85206 0.721112 9.12595L3.1321 13.4482L5.52364 17.7705L7.93463 13.4482L10.3262 9.12595L5.52364 0.481402Z" fill="#79655E"></path>
                      </svg>
                      <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.52364 0.481402C3.75429 3.66333 2.52935 5.85206 0.721112 9.12595L3.1321 13.4482L5.52364 17.7705L7.93463 13.4482L10.3262 9.12595L5.52364 0.481402Z" fill="#79655E"></path>
                      </svg>
                      <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.52364 0.481402C3.75429 3.66333 2.52935 5.85206 0.721112 9.12595L3.1321 13.4482L5.52364 17.7705L7.93463 13.4482L10.3262 9.12595L5.52364 0.481402Z" fill="#79655E"></path>
                      </svg>
                      <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.52364 0.481402C3.75429 3.66333 2.52935 5.85206 0.721112 9.12595L3.1321 13.4482L5.52364 17.7705L7.93463 13.4482L10.3262 9.12595L5.52364 0.481402Z" fill="#79655E"></path>
                      </svg>
                      <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.52364 0.481402C3.75429 3.66333 2.52935 5.85206 0.721112 9.12595L3.1321 13.4482L5.52364 17.7705L7.93463 13.4482L10.3262 9.12595L5.52364 0.481402Z" fill="#79655E"></path>
                      </svg>
                    </div>
                    <div className="snake snake-rhomb-4-small">
                      <h6>Reception</h6>
                      <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.52364 0.481402C3.75429 3.66333 2.52935 5.85206 0.721112 9.12595L3.1321 13.4482L5.52364 17.7705L7.93463 13.4482L10.3262 9.12595L5.52364 0.481402Z" fill="#79655E"></path>
                      </svg>
                      <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.52364 0.481402C3.75429 3.66333 2.52935 5.85206 0.721112 9.12595L3.1321 13.4482L5.52364 17.7705L7.93463 13.4482L10.3262 9.12595L5.52364 0.481402Z" fill="#79655E"></path>
                      </svg>
                      <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.52364 0.481402C3.75429 3.66333 2.52935 5.85206 0.721112 9.12595L3.1321 13.4482L5.52364 17.7705L7.93463 13.4482L10.3262 9.12595L5.52364 0.481402Z" fill="#79655E"></path>
                      </svg>
                      <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.52364 0.481402C3.75429 3.66333 2.52935 5.85206 0.721112 9.12595L3.1321 13.4482L5.52364 17.7705L7.93463 13.4482L10.3262 9.12595L5.52364 0.481402Z" fill="#79655E"></path>
                      </svg>
                      <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.52364 0.481402C3.75429 3.66333 2.52935 5.85206 0.721112 9.12595L3.1321 13.4482L5.52364 17.7705L7.93463 13.4482L10.3262 9.12595L5.52364 0.481402Z" fill="#79655E"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-review card-2">
                <div className="col col-1">
                  <p className={`${manrope400.className} col-2`}> 
                    “Well organized trip, All arranged well by Arooz. Special thanks
                    to Aijaz Bhai for the service and support given to us, all
                    explained well and take us to .
                  </p>
                  <p className={`${manrope500.className} col-2`}>Brandon Mango<br /><span className={`${manrope300.className} col-2`}>Oct 12, 2021 at 8:27 am</span></p>
                </div>
                <div className="col-2">
                <div className="container-snakes-rhomb rhomb-small">
                    <div className="snake snake-rhomb-1-small">
                      <h6>Comfort</h6>
                      <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.52364 0.481402C3.75429 3.66333 2.52935 5.85206 0.721112 9.12595L3.1321 13.4482L5.52364 17.7705L7.93463 13.4482L10.3262 9.12595L5.52364 0.481402Z" fill="#79655E"></path>
                      </svg>
                      <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.52364 0.481402C3.75429 3.66333 2.52935 5.85206 0.721112 9.12595L3.1321 13.4482L5.52364 17.7705L7.93463 13.4482L10.3262 9.12595L5.52364 0.481402Z" fill="#79655E"></path>
                      </svg>
                      <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.52364 0.481402C3.75429 3.66333 2.52935 5.85206 0.721112 9.12595L3.1321 13.4482L5.52364 17.7705L7.93463 13.4482L10.3262 9.12595L5.52364 0.481402Z" fill="#79655E"></path>
                      </svg>
                      <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.52364 0.481402C3.75429 3.66333 2.52935 5.85206 0.721112 9.12595L3.1321 13.4482L5.52364 17.7705L7.93463 13.4482L10.3262 9.12595L5.52364 0.481402Z" fill="#79655E"></path>
                      </svg>
                      <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.52364 0.481402C3.75429 3.66333 2.52935 5.85206 0.721112 9.12595L3.1321 13.4482L5.52364 17.7705L7.93463 13.4482L10.3262 9.12595L5.52364 0.481402Z" fill="#79655E"></path>
                      </svg>
                    </div>
                    <div className="snake snake-rhomb-2-small">
                      <h6>Hospitality</h6>
                      <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.52364 0.481402C3.75429 3.66333 2.52935 5.85206 0.721112 9.12595L3.1321 13.4482L5.52364 17.7705L7.93463 13.4482L10.3262 9.12595L5.52364 0.481402Z" fill="#79655E"></path>
                      </svg>
                      <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.52364 0.481402C3.75429 3.66333 2.52935 5.85206 0.721112 9.12595L3.1321 13.4482L5.52364 17.7705L7.93463 13.4482L10.3262 9.12595L5.52364 0.481402Z" fill="#79655E"></path>
                      </svg>
                      <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.52364 0.481402C3.75429 3.66333 2.52935 5.85206 0.721112 9.12595L3.1321 13.4482L5.52364 17.7705L7.93463 13.4482L10.3262 9.12595L5.52364 0.481402Z" fill="#79655E"></path>
                      </svg>
                      <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.52364 0.481402C3.75429 3.66333 2.52935 5.85206 0.721112 9.12595L3.1321 13.4482L5.52364 17.7705L7.93463 13.4482L10.3262 9.12595L5.52364 0.481402Z" fill="#79655E"></path>
                      </svg>
                      <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.52364 0.481402C3.75429 3.66333 2.52935 5.85206 0.721112 9.12595L3.1321 13.4482L5.52364 17.7705L7.93463 13.4482L10.3262 9.12595L5.52364 0.481402Z" fill="#79655E"></path>
                      </svg>
                    </div>
                    <div className="snake snake-rhomb-3-small">
                      <h6>Hygiene</h6>
                      <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.52364 0.481402C3.75429 3.66333 2.52935 5.85206 0.721112 9.12595L3.1321 13.4482L5.52364 17.7705L7.93463 13.4482L10.3262 9.12595L5.52364 0.481402Z" fill="#79655E"></path>
                      </svg>
                      <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.52364 0.481402C3.75429 3.66333 2.52935 5.85206 0.721112 9.12595L3.1321 13.4482L5.52364 17.7705L7.93463 13.4482L10.3262 9.12595L5.52364 0.481402Z" fill="#79655E"></path>
                      </svg>
                      <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.52364 0.481402C3.75429 3.66333 2.52935 5.85206 0.721112 9.12595L3.1321 13.4482L5.52364 17.7705L7.93463 13.4482L10.3262 9.12595L5.52364 0.481402Z" fill="#79655E"></path>
                      </svg>
                      <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.52364 0.481402C3.75429 3.66333 2.52935 5.85206 0.721112 9.12595L3.1321 13.4482L5.52364 17.7705L7.93463 13.4482L10.3262 9.12595L5.52364 0.481402Z" fill="#79655E"></path>
                      </svg>
                      <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.52364 0.481402C3.75429 3.66333 2.52935 5.85206 0.721112 9.12595L3.1321 13.4482L5.52364 17.7705L7.93463 13.4482L10.3262 9.12595L5.52364 0.481402Z" fill="#79655E"></path>
                      </svg>
                    </div>
                    <div className="snake snake-rhomb-4-small">
                      <h6>Reception</h6>
                      <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.52364 0.481402C3.75429 3.66333 2.52935 5.85206 0.721112 9.12595L3.1321 13.4482L5.52364 17.7705L7.93463 13.4482L10.3262 9.12595L5.52364 0.481402Z" fill="#79655E"></path>
                      </svg>
                      <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.52364 0.481402C3.75429 3.66333 2.52935 5.85206 0.721112 9.12595L3.1321 13.4482L5.52364 17.7705L7.93463 13.4482L10.3262 9.12595L5.52364 0.481402Z" fill="#79655E"></path>
                      </svg>
                      <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.52364 0.481402C3.75429 3.66333 2.52935 5.85206 0.721112 9.12595L3.1321 13.4482L5.52364 17.7705L7.93463 13.4482L10.3262 9.12595L5.52364 0.481402Z" fill="#79655E"></path>
                      </svg>
                      <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.52364 0.481402C3.75429 3.66333 2.52935 5.85206 0.721112 9.12595L3.1321 13.4482L5.52364 17.7705L7.93463 13.4482L10.3262 9.12595L5.52364 0.481402Z" fill="#79655E"></path>
                      </svg>
                      <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.52364 0.481402C3.75429 3.66333 2.52935 5.85206 0.721112 9.12595L3.1321 13.4482L5.52364 17.7705L7.93463 13.4482L10.3262 9.12595L5.52364 0.481402Z" fill="#79655E"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-review card-3">
                <div className="col col-1">
                  <p className={`${manrope400.className} col-2`}>
                    Aijaz Bhai for the service and support given to us, all
                    explained well and take us to all places as per our wish. It was
                    a wonderful experience .... Thank you team”
                  </p>
                  <p className={`${manrope500.className} col-2`}>Maren Westervelt<br /><span className={`${manrope300.className} col-2`}>Oct 02, 2021 at 8:27 am</span></p>
                </div>
                <div className="col-2">
                <div className="container-snakes-rhomb rhomb-small">
                    <div className="snake snake-rhomb-1-small">
                      <h6>Comfort</h6>
                      <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.52364 0.481402C3.75429 3.66333 2.52935 5.85206 0.721112 9.12595L3.1321 13.4482L5.52364 17.7705L7.93463 13.4482L10.3262 9.12595L5.52364 0.481402Z" fill="#79655E"></path>
                      </svg>
                      <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.52364 0.481402C3.75429 3.66333 2.52935 5.85206 0.721112 9.12595L3.1321 13.4482L5.52364 17.7705L7.93463 13.4482L10.3262 9.12595L5.52364 0.481402Z" fill="#79655E"></path>
                      </svg>
                      <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.52364 0.481402C3.75429 3.66333 2.52935 5.85206 0.721112 9.12595L3.1321 13.4482L5.52364 17.7705L7.93463 13.4482L10.3262 9.12595L5.52364 0.481402Z" fill="#79655E"></path>
                      </svg>
                      <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.52364 0.481402C3.75429 3.66333 2.52935 5.85206 0.721112 9.12595L3.1321 13.4482L5.52364 17.7705L7.93463 13.4482L10.3262 9.12595L5.52364 0.481402Z" fill="#79655E"></path>
                      </svg>
                      <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.52364 0.481402C3.75429 3.66333 2.52935 5.85206 0.721112 9.12595L3.1321 13.4482L5.52364 17.7705L7.93463 13.4482L10.3262 9.12595L5.52364 0.481402Z" fill="#79655E"></path>
                      </svg>
                    </div>
                    <div className="snake snake-rhomb-2-small">
                      <h6>Hospitality</h6>
                      <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.52364 0.481402C3.75429 3.66333 2.52935 5.85206 0.721112 9.12595L3.1321 13.4482L5.52364 17.7705L7.93463 13.4482L10.3262 9.12595L5.52364 0.481402Z" fill="#79655E"></path>
                      </svg>
                      <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.52364 0.481402C3.75429 3.66333 2.52935 5.85206 0.721112 9.12595L3.1321 13.4482L5.52364 17.7705L7.93463 13.4482L10.3262 9.12595L5.52364 0.481402Z" fill="#79655E"></path>
                      </svg>
                      <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.52364 0.481402C3.75429 3.66333 2.52935 5.85206 0.721112 9.12595L3.1321 13.4482L5.52364 17.7705L7.93463 13.4482L10.3262 9.12595L5.52364 0.481402Z" fill="#79655E"></path>
                      </svg>
                      <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.52364 0.481402C3.75429 3.66333 2.52935 5.85206 0.721112 9.12595L3.1321 13.4482L5.52364 17.7705L7.93463 13.4482L10.3262 9.12595L5.52364 0.481402Z" fill="#79655E"></path>
                      </svg>
                      <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.52364 0.481402C3.75429 3.66333 2.52935 5.85206 0.721112 9.12595L3.1321 13.4482L5.52364 17.7705L7.93463 13.4482L10.3262 9.12595L5.52364 0.481402Z" fill="#79655E"></path>
                      </svg>
                    </div>
                    <div className="snake snake-rhomb-3-small">
                      <h6>Hygiene</h6>
                      <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.52364 0.481402C3.75429 3.66333 2.52935 5.85206 0.721112 9.12595L3.1321 13.4482L5.52364 17.7705L7.93463 13.4482L10.3262 9.12595L5.52364 0.481402Z" fill="#79655E"></path>
                      </svg>
                      <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.52364 0.481402C3.75429 3.66333 2.52935 5.85206 0.721112 9.12595L3.1321 13.4482L5.52364 17.7705L7.93463 13.4482L10.3262 9.12595L5.52364 0.481402Z" fill="#79655E"></path>
                      </svg>
                      <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.52364 0.481402C3.75429 3.66333 2.52935 5.85206 0.721112 9.12595L3.1321 13.4482L5.52364 17.7705L7.93463 13.4482L10.3262 9.12595L5.52364 0.481402Z" fill="#79655E"></path>
                      </svg>
                      <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.52364 0.481402C3.75429 3.66333 2.52935 5.85206 0.721112 9.12595L3.1321 13.4482L5.52364 17.7705L7.93463 13.4482L10.3262 9.12595L5.52364 0.481402Z" fill="#79655E"></path>
                      </svg>
                      <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.52364 0.481402C3.75429 3.66333 2.52935 5.85206 0.721112 9.12595L3.1321 13.4482L5.52364 17.7705L7.93463 13.4482L10.3262 9.12595L5.52364 0.481402Z" fill="#79655E"></path>
                      </svg>
                    </div>
                    <div className="snake snake-rhomb-4-small">
                      <h6>Reception</h6>
                      <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.52364 0.481402C3.75429 3.66333 2.52935 5.85206 0.721112 9.12595L3.1321 13.4482L5.52364 17.7705L7.93463 13.4482L10.3262 9.12595L5.52364 0.481402Z" fill="#79655E"></path>
                      </svg>
                      <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.52364 0.481402C3.75429 3.66333 2.52935 5.85206 0.721112 9.12595L3.1321 13.4482L5.52364 17.7705L7.93463 13.4482L10.3262 9.12595L5.52364 0.481402Z" fill="#79655E"></path>
                      </svg>
                      <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.52364 0.481402C3.75429 3.66333 2.52935 5.85206 0.721112 9.12595L3.1321 13.4482L5.52364 17.7705L7.93463 13.4482L10.3262 9.12595L5.52364 0.481402Z" fill="#79655E"></path>
                      </svg>
                      <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.52364 0.481402C3.75429 3.66333 2.52935 5.85206 0.721112 9.12595L3.1321 13.4482L5.52364 17.7705L7.93463 13.4482L10.3262 9.12595L5.52364 0.481402Z" fill="#79655E"></path>
                      </svg>
                      <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.52364 0.481402C3.75429 3.66333 2.52935 5.85206 0.721112 9.12595L3.1321 13.4482L5.52364 17.7705L7.93463 13.4482L10.3262 9.12595L5.52364 0.481402Z" fill="#79655E"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <h3>Post a Comment</h3>
              <div className="container-form">
                <div className="container-form__left">
                  <Formik
                    initialValues={initialValues}
                    validationSchema={schemas.custom}
                    onSubmit={() => console.log("Success")}
                  >
                    <Form action="#" className='comment-form'>
                      <Input
                        name="name"
                        id="name"
                        placeholder="Name"
                      />
                      <Input
                        name="email"
                        id="email"
                        placeholder="Email"
                      />
                      <div className="customise-page__column direction-column margin-change">
                        <textarea id='textarea' className="customise-page__text-area" placeholder='Comment'></textarea>
                      </div>
                      <div className="container-button">
                      <BlackBtn>post comment</BlackBtn>
                      </div>
                    </Form>
                  </Formik>
                </div>
                <div className="container-form__right">
                  <div className="container-snakes-empty-rhomb">
                    <div className="snake snake-rhomb-1-mid-small">
                      <h6>Comfort</h6>
                      <svg width="15" height="25" viewBox="0 0 15 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.59014 18.313L4.5908 18.3142L7.58854 23.7321L10.6106 18.3142L10.6113 18.3131L13.8481 12.4631L7.58694 1.19293C6.99834 2.25101 6.4509 3.2341 5.92149 4.18481C4.42039 6.88046 3.0643 9.31573 1.32625 12.4617L4.59014 18.313Z" stroke="#79655E" strokeWidth="0.795182"></path>
                      </svg>
                      <svg width="15" height="25" viewBox="0 0 15 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.59014 18.313L4.5908 18.3142L7.58854 23.7321L10.6106 18.3142L10.6113 18.3131L13.8481 12.4631L7.58694 1.19293C6.99834 2.25101 6.4509 3.2341 5.92149 4.18481C4.42039 6.88046 3.0643 9.31573 1.32625 12.4617L4.59014 18.313Z" stroke="#79655E" strokeWidth="0.795182"></path>
                      </svg>
                      <svg width="15" height="25" viewBox="0 0 15 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.59014 18.313L4.5908 18.3142L7.58854 23.7321L10.6106 18.3142L10.6113 18.3131L13.8481 12.4631L7.58694 1.19293C6.99834 2.25101 6.4509 3.2341 5.92149 4.18481C4.42039 6.88046 3.0643 9.31573 1.32625 12.4617L4.59014 18.313Z" stroke="#79655E" strokeWidth="0.795182"></path>
                      </svg>
                      <svg width="15" height="25" viewBox="0 0 15 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.59014 18.313L4.5908 18.3142L7.58854 23.7321L10.6106 18.3142L10.6113 18.3131L13.8481 12.4631L7.58694 1.19293C6.99834 2.25101 6.4509 3.2341 5.92149 4.18481C4.42039 6.88046 3.0643 9.31573 1.32625 12.4617L4.59014 18.313Z" stroke="#79655E" strokeWidth="0.795182"></path>
                      </svg>
                      <svg width="15" height="25" viewBox="0 0 15 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.59014 18.313L4.5908 18.3142L7.58854 23.7321L10.6106 18.3142L10.6113 18.3131L13.8481 12.4631L7.58694 1.19293C6.99834 2.25101 6.4509 3.2341 5.92149 4.18481C4.42039 6.88046 3.0643 9.31573 1.32625 12.4617L4.59014 18.313Z" stroke="#79655E" strokeWidth="0.795182"></path>
                      </svg>
                    </div>
                    <div className="snake snake-rhomb-2-mid-small">
                      <h6>Hospitality</h6>
                      <svg width="15" height="25" viewBox="0 0 15 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.59014 18.313L4.5908 18.3142L7.58854 23.7321L10.6106 18.3142L10.6113 18.3131L13.8481 12.4631L7.58694 1.19293C6.99834 2.25101 6.4509 3.2341 5.92149 4.18481C4.42039 6.88046 3.0643 9.31573 1.32625 12.4617L4.59014 18.313Z" stroke="#79655E" strokeWidth="0.795182"></path>
                      </svg>
                      <svg width="15" height="25" viewBox="0 0 15 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.59014 18.313L4.5908 18.3142L7.58854 23.7321L10.6106 18.3142L10.6113 18.3131L13.8481 12.4631L7.58694 1.19293C6.99834 2.25101 6.4509 3.2341 5.92149 4.18481C4.42039 6.88046 3.0643 9.31573 1.32625 12.4617L4.59014 18.313Z" stroke="#79655E" strokeWidth="0.795182"></path>
                      </svg>
                      <svg width="15" height="25" viewBox="0 0 15 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.59014 18.313L4.5908 18.3142L7.58854 23.7321L10.6106 18.3142L10.6113 18.3131L13.8481 12.4631L7.58694 1.19293C6.99834 2.25101 6.4509 3.2341 5.92149 4.18481C4.42039 6.88046 3.0643 9.31573 1.32625 12.4617L4.59014 18.313Z" stroke="#79655E" strokeWidth="0.795182"></path>
                      </svg>
                      <svg width="15" height="25" viewBox="0 0 15 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.59014 18.313L4.5908 18.3142L7.58854 23.7321L10.6106 18.3142L10.6113 18.3131L13.8481 12.4631L7.58694 1.19293C6.99834 2.25101 6.4509 3.2341 5.92149 4.18481C4.42039 6.88046 3.0643 9.31573 1.32625 12.4617L4.59014 18.313Z" stroke="#79655E" strokeWidth="0.795182"></path>
                      </svg>
                      <svg width="15" height="25" viewBox="0 0 15 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.59014 18.313L4.5908 18.3142L7.58854 23.7321L10.6106 18.3142L10.6113 18.3131L13.8481 12.4631L7.58694 1.19293C6.99834 2.25101 6.4509 3.2341 5.92149 4.18481C4.42039 6.88046 3.0643 9.31573 1.32625 12.4617L4.59014 18.313Z" stroke="#79655E" strokeWidth="0.795182"></path>
                      </svg>
                    </div>
                    <div className="snake snake-rhomb-3-mid-small">
                      <h6>Hygiene</h6>
                      <svg width="15" height="25" viewBox="0 0 15 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.59014 18.313L4.5908 18.3142L7.58854 23.7321L10.6106 18.3142L10.6113 18.3131L13.8481 12.4631L7.58694 1.19293C6.99834 2.25101 6.4509 3.2341 5.92149 4.18481C4.42039 6.88046 3.0643 9.31573 1.32625 12.4617L4.59014 18.313Z" stroke="#79655E" strokeWidth="0.795182"></path>
                      </svg>
                      <svg width="15" height="25" viewBox="0 0 15 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.59014 18.313L4.5908 18.3142L7.58854 23.7321L10.6106 18.3142L10.6113 18.3131L13.8481 12.4631L7.58694 1.19293C6.99834 2.25101 6.4509 3.2341 5.92149 4.18481C4.42039 6.88046 3.0643 9.31573 1.32625 12.4617L4.59014 18.313Z" stroke="#79655E" strokeWidth="0.795182"></path>
                      </svg>
                      <svg width="15" height="25" viewBox="0 0 15 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.59014 18.313L4.5908 18.3142L7.58854 23.7321L10.6106 18.3142L10.6113 18.3131L13.8481 12.4631L7.58694 1.19293C6.99834 2.25101 6.4509 3.2341 5.92149 4.18481C4.42039 6.88046 3.0643 9.31573 1.32625 12.4617L4.59014 18.313Z" stroke="#79655E" strokeWidth="0.795182"></path>
                      </svg>
                      <svg width="15" height="25" viewBox="0 0 15 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.59014 18.313L4.5908 18.3142L7.58854 23.7321L10.6106 18.3142L10.6113 18.3131L13.8481 12.4631L7.58694 1.19293C6.99834 2.25101 6.4509 3.2341 5.92149 4.18481C4.42039 6.88046 3.0643 9.31573 1.32625 12.4617L4.59014 18.313Z" stroke="#79655E" strokeWidth="0.795182"></path>
                      </svg>
                      <svg width="15" height="25" viewBox="0 0 15 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.59014 18.313L4.5908 18.3142L7.58854 23.7321L10.6106 18.3142L10.6113 18.3131L13.8481 12.4631L7.58694 1.19293C6.99834 2.25101 6.4509 3.2341 5.92149 4.18481C4.42039 6.88046 3.0643 9.31573 1.32625 12.4617L4.59014 18.313Z" stroke="#79655E" strokeWidth="0.795182"></path>
                      </svg>
                    </div>
                    <div className="snake snake-rhomb-4-mid-small">
                      <h6>Reception</h6>
                      <svg width="15" height="25" viewBox="0 0 15 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.59014 18.313L4.5908 18.3142L7.58854 23.7321L10.6106 18.3142L10.6113 18.3131L13.8481 12.4631L7.58694 1.19293C6.99834 2.25101 6.4509 3.2341 5.92149 4.18481C4.42039 6.88046 3.0643 9.31573 1.32625 12.4617L4.59014 18.313Z" stroke="#79655E" strokeWidth="0.795182"></path>
                      </svg>
                      <svg width="15" height="25" viewBox="0 0 15 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.59014 18.313L4.5908 18.3142L7.58854 23.7321L10.6106 18.3142L10.6113 18.3131L13.8481 12.4631L7.58694 1.19293C6.99834 2.25101 6.4509 3.2341 5.92149 4.18481C4.42039 6.88046 3.0643 9.31573 1.32625 12.4617L4.59014 18.313Z" stroke="#79655E" strokeWidth="0.795182"></path>
                      </svg>
                      <svg width="15" height="25" viewBox="0 0 15 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.59014 18.313L4.5908 18.3142L7.58854 23.7321L10.6106 18.3142L10.6113 18.3131L13.8481 12.4631L7.58694 1.19293C6.99834 2.25101 6.4509 3.2341 5.92149 4.18481C4.42039 6.88046 3.0643 9.31573 1.32625 12.4617L4.59014 18.313Z" stroke="#79655E" strokeWidth="0.795182"></path>
                      </svg>
                      <svg width="15" height="25" viewBox="0 0 15 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.59014 18.313L4.5908 18.3142L7.58854 23.7321L10.6106 18.3142L10.6113 18.3131L13.8481 12.4631L7.58694 1.19293C6.99834 2.25101 6.4509 3.2341 5.92149 4.18481C4.42039 6.88046 3.0643 9.31573 1.32625 12.4617L4.59014 18.313Z" stroke="#79655E" strokeWidth="0.795182"></path>
                      </svg>
                      <svg width="15" height="25" viewBox="0 0 15 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.59014 18.313L4.5908 18.3142L7.58854 23.7321L10.6106 18.3142L10.6113 18.3131L13.8481 12.4631L7.58694 1.19293C6.99834 2.25101 6.4509 3.2341 5.92149 4.18481C4.42039 6.88046 3.0643 9.31573 1.32625 12.4617L4.59014 18.313Z" stroke="#79655E" strokeWidth="0.795182"></path>
                      </svg>
                    </div>
                  </div>
                </div>
               
              </div>
              
              
              
      </div>
      </div>
      </section>
      <section className="section-navigation">
        <div className="container">
          <div className="section-navigation__inner">
            <ul>
              <li><a href="#information">information</a></li>
              <li><a href="#luxury-tour-plan">luxury tour plan</a></li>
              <li><a href="#location">location</a></li>
              <li><a href="#travel-tips">travel Tips</a></li>
              <li><a href="#gallery">gallery</a></li>
              <li><a href="#reviews">reviews</a></li>
              <li><a href="#cancellation-policy">cancellation policy</a></li>
            </ul>
          </div>
        </div>
      </section>
      <section className="cancellation-policy">
      <div className="container">
        <div id="cancellation-policy" className="section cancellation-policy__inner">
              <h2>Cancellation policy</h2>
              <div className="section-wrapper">
                <p>
                  You can cancel your purchase of a subscription service and request
                  a refund within 14 days from the initial transaction date.
                </p>
                <p className={`${manrope400.className}`}>
                  The refund may be reduced pro-rata to reflect the use you have had
                  of the service. This may show as two transactions in your account
                  transaction history: a refund to your wallet of the full amount
                  originally paid and then a debit of a charge for the period of the
                  service you received.
                  <br />
                  <br />

                  If you take advantage of a free trial when you sign up to a
                  service, the 14-day cancellation period will commence on the day
                  we accept your order of the free trial and the duration of the
                  free trial will be included in the 14-day period. For example, you
                  sign up for a free trial which lasts 7 days and your wallet is
                  debited for the subscription at the end of the trial, you will
                  have 7 days after your wallet was debited to cancel.
                  <br />
                  <br />

                  Note: When you purchase a subscription service such as
                  PlayStation®Plus, you agree to a rolling subscription with
                  periodic billing &#40;e.g. annual billing&#41; . You can stop making
                  payments at any time by turning off [Auto-renewal] &#40;click here for
                  more information&#41; but, beyond the initial 14-day cancellation
                  period, you will not receive a refund for payments already made.
                  When you turn off [Auto-renewal], your subscription will continue
                  until the next payment is due, at which point it will end.
                </p>
                <h3>Further Information</h3>
                <p className={`${manrope400.className}`}>
                  We recommend that you take care when you top up your wallet or
                  make a purchase on PlayStation™Store. A number of account features
                  are available so you can keep track of your account activity.
                  <br />
                  <br />
                  To control the purchases made from the PlayStation™Store, via your
                  account and console ensure you &#40;i&#41; use our password and passcode
                  tools to control unauthorised log-in to and purchases via your
                  account and &#40;ii&#41; if you have children, set up a separate account
                  for each child and use our parental controls to limit their
                  expenditure or prevent them shopping at all.
                </p>
              </div>
        </div>
      </div>
      </section>
      <SubscribeForm />
    </main>
  );
};

export default Details;