import { Manrope } from "next/font/google";
import BlackBtn from "../../../components/ui/BlackBtn";

const manrope400 = Manrope({
  subsets: ["latin"],
  weight: "400",
});

const manrope600 = Manrope({
  subsets: ["latin"],
  weight: "600",
});

const LuxuryTourPlan = () => {
  return (
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
                <p
                  className={`${manrope400.className} luxury-tour-plan__item-text`}
                >
                  On arrival at Keflavik International Airport, you will be
                  greeted by a driver who will transfer you to your hotel in the
                  city centre of Reykjavík. After settling in, the rest of the
                  day is free for you to explore the vibrant capital city with
                  its abundance of museums, restaurants and bars to suit all
                  tastes. If you&apos;re interested in checking out Icelandic
                  design or experiencing the city&apos;s thriving coffee
                  culture, head to the main street, Laugavegur, and enjoy its
                  various shops and cosy cafes.
                </p>
                <p
                  className={`${manrope400.className} luxury-tour-plan__item-text`}
                >
                  At 18:00, you will meet your group and guide for a welcome
                  drink and a short introduction about the itinerary and some
                  useful information about the coming days. Spend the night at
                  Center Hotel Laugavegur or similar. For those arriving early
                  today you have the option to upgrade your journey from the
                  airport with a visit to the Blue Lagoon geothermal spa before
                  heading to the city. It´s the perfect way to start your
                  Iceland adventure!
                </p>
                <h6
                  className={`${manrope600.className} luxury-tour-plan__title`}
                >
                  Included:
                </h6>
                <ul
                  className={`${manrope400.className} luxury-tour-plan__item-list`}
                >
                  <li className="luxury-tour-plan__item-item">
                    Private meet and greet airport transfer on arrival
                  </li>
                  <li className="luxury-tour-plan__item-item">
                    Welcome drink and group information meeting with your guide
                  </li>
                </ul>
                <p
                  className={`${manrope400.className} luxury-tour-plan__item-text`}
                >
                  Average Driving Distance: 49 km / 30 mi. Average Travel &
                  Exploring Duration: 50 Minutes
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
                <p
                  className={`${manrope400.className} luxury-tour-plan__item-text`}
                >
                  This morning your guide will pick you and your fellow
                  travellers up at the hotel. The first leg of the journey takes
                  you around the famous Golden Circle, a popular route
                  containing some of the best-known natural sites in Iceland.
                  Highlights include Þingvellir National Park, a UNESCO heritage
                  site; the Geysir geothermal hot spring area and the powerful
                  Gullfoss waterfall.
                </p>
                <p
                  className={`${manrope400.className} luxury-tour-plan__item-text`}
                >
                  The tour will also visit the geothermally-heated greenhouses
                  at the Friðheimar tomato farm, where we will get to taste the
                  fresh tomato products. Spend the night at Hótel Selfoss or
                  similar.
                </p>
                <h6
                  className={`${manrope600.className} luxury-tour-plan__title`}
                >
                  Included:
                </h6>
                <ul
                  className={`${manrope400.className} luxury-tour-plan__item-list`}
                >
                  <li className="luxury-tour-plan__item-item">
                    Visit to the Friðheimar Tomato Farm Greenhouse
                  </li>
                  <li className="luxury-tour-plan__item-item">
                    Breakfast: Continental Breakfast Buffet at the Hotel
                  </li>
                </ul>
                <p className="luxury-tour-plan__item-notice">
                  *Please note that the northern lights are a natural
                  phenomenon. If weather conditions and visibility are not
                  favourable, the guide will inform you about the matter.
                </p>
                <p
                  className={`${manrope400.className} luxury-tour-plan__item-text`}
                >
                  Average Driving Distance: 49 km / 30 mi. Average Travel &
                  Exploring Duration: 50 Minutes
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
                <p
                  className={`${manrope400.className} luxury-tour-plan__item-text`}
                >
                  Today you will explore majestic waterfalls, black sand beaches
                  and learn about the unique geology of Iceland. You will start
                  with a visit to the Lava Centre, a one of a kind interactive
                  exhibition about Iceland’s volcanic activity, its frequent
                  earthquakes and how Iceland evolved over millions of years.
                  Next up is the fairy tale-like Seljalandsfoss waterfall, where
                  you can walk behind the icy cascade on a footpath.
                </p>
                <p
                  className={`${manrope400.className} luxury-tour-plan__item-text`}
                >
                  Close by your guide will take you to Skógarfoss, an empressive
                  60-metre high waterfall located at the foot of a mountain
                  range, followed by a visit to the Skógar Folk Museum. The last
                  stop before continuing to your accommodation is at the black
                  sand volcanic beach near the village of Vík í Mýrdal. Here,
                  you will be able to see the spectacular rock arch and steep
                  cliffs of along with the Reynisdrangar basalt columns just off
                  the shore.
                </p>
                <p
                  className={`${manrope400.className} luxury-tour-plan__item-text`}
                >
                  Next, you will travel to your carefully selected charming
                  boutique hotel, situated far from the city lights to give you
                  the best chance of seeing the northern lights. Enjoy dinner at
                  Magma Hotel with the group. Spend the night at the Magma
                  Hotel.
                </p>
                <h6
                  className={`${manrope600.className} luxury-tour-plan__title`}
                >
                  Included:
                </h6>
                <ul
                  className={`${manrope400.className} luxury-tour-plan__item-list`}
                >
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
                <p
                  className={`${manrope400.className} luxury-tour-plan__item-text`}
                >
                  Average Driving Distance: 49 km / 30 mi. Average Travel &
                  Exploring Duration: 50 Minutes
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
                <p
                  className={`${manrope400.className} luxury-tour-plan__item-text`}
                >
                  When it’s time for your Iceland adventure to end, you will be
                  picked up from your hotel by a shuttle bus about three hours
                  before your flight. If you’re flying in the afternoon, you
                  have the option to visit the Blue Lagoon geothermal spa to
                  relax in the warm mineral waters before continuing to the
                  airport &#40;optional: not included&#41; . If you are
                  interested in extending your stay, we can book extra nights
                  and activities in the Reykjavík area or even combine this tour
                  with a visit to one of our other Nordic destinations.
                </p>
                <h6
                  className={`${manrope600.className} luxury-tour-plan__title`}
                >
                  Included:
                </h6>
                <ul
                  className={`${manrope400.className} luxury-tour-plan__item-list`}
                >
                  <li className="luxury-tour-plan__item-item">
                    Breakfast: Continental Breakfast Buffet at the Hotel
                  </li>
                  <li className="luxury-tour-plan__item-item">
                    Shuttle Transfer to Keflavík International Airport on
                    Departure
                  </li>
                </ul>

                <p
                  className={`${manrope400.className} luxury-tour-plan__item-text`}
                >
                  Average Driving Distance: 49 km / 30 mi. Average Travel &
                  Exploring Duration: 50 Minutes
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
              <li>
                Meals, drinks & entrance fees &#40;unless otherwise stated&#41;{" "}
              </li>
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
  );
};

export default LuxuryTourPlan;
