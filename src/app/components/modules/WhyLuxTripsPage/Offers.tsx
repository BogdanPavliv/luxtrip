import Link from "next/link";
import Image from "next/image";
import { Manrope } from "next/font/google";

const manrope400 = Manrope({
  subsets: ["latin"],
  weight: "400",
});

const Offers = () => {
  return (
    <section className="offers">
      <div className="luxtrips-container offers__container">
        <h2 className="title offers__title">
          In Lux Trips we plan, organize and manage tailor-made itineraries for
          our clients.
        </h2>
        <p className={`${manrope400.className} offers__text`}>
          Offering exclusive tours, exceptional accommodations and personalized
          journey-planning.
        </p>

        <div className="offers-box__wrapper">
          <div className="offers-box">
            <div className="offers-box__item-left">
              <div className="offers-box__image-block">
                <div className="offers-box__image-wrapper">
                  <picture className="offers-box__image">
                    <source
                      width={244}
                      height={546}
                      media="(min-width: 481px)"
                      srcSet="/img/why-lux-trips/img/offers.webp"
                    />
                    <Image
                      width={154}
                      height={370}
                      src="/img/why-lux-trips/img/offers-mob.webp"
                      alt="picture of boy and girl"
                    />
                  </picture>
                </div>
                <picture className="offers-box__image">
                  <source
                    width={244}
                    height={546}
                    className="offers-box__image-blur"
                    media="(min-width: 481px)"
                    srcSet="/img/why-lux-trips/img/offers-blur.webp"
                  />
                  <Image
                    width={154}
                    height={370}
                    className="offers-box__image-blur"
                    src="/img/why-lux-trips/img/offers-blur-mob.webp"
                    alt="picture of boy and girl"
                  />
                </picture>
              </div>
            </div>

            <div className="offers-box__content">
              <p className={`${manrope400.className} offers-box__text`}>
                We provide our clients with access to exclusive events and
                experiences, such as glamping or fishing on private islands,
                private vineyard wine-tasting and tours, or cruising a sea with
                a flock of dolphins, to name just a few.
              </p>
              <p className={`${manrope400.className} offers-box__text`}>
                Our location scouting for events and holidays encompasses
                diverse types of villas and chalets, luxury resorts and
                world-class hotels around the world.
              </p>

              <Link
                href={"/luxury-packages"}
                className="luxtrips-btn offers__btn"
              >
                Luxury packages
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offers;
