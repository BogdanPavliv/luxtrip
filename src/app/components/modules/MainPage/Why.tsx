import Image from "next/image";
import Link from "next/link";
import { Manrope } from "next/font/google";

const manrope400 = Manrope({
  subsets: ["latin"],
  weight: "400",
});

const Why = () => {
  return (
    <section className="why">
      <div className="why__parallax">
        <div className="why__parallax-container container">
          <div className="why__parallax-pic"></div>
          <div className="why__parallax-icon why__parallax-icon_01">
            <div className="why__parallax-icon-wrapper">
              <Image
                src="/img/section-extraordinary/why01.jpg"
                alt="why lux"
                width={145}
                height={325}
              />
            </div>
            <Image
              className="why__parallax-blur"
              src="/img/section-extraordinary/why01.jpg"
              alt="why lux"
              width={145}
              height={325}
            />
          </div>
          <div className="why__parallax-icon why__parallax-icon_02">
            <div className="why__parallax-icon-wrapper">
              <Image
                src="/img/section-extraordinary/why02.jpg"
                alt="why lux"
                width={145}
                height={325}
              />
            </div>
            <Image
              className="why__parallax-blur"
              src="/img/section-extraordinary/why02.jpg"
              alt="why lux"
              width={145}
              height={325}
            />
          </div>
          <div className="why__parallax-icon why__parallax-icon_03">
            <div className="why__parallax-icon-wrapper">
              <Image
                src="/img/section-extraordinary/why03.jpg"
                alt="why lux"
                width={145}
                height={325}
              />
            </div>
            <Image
              className="why__parallax-blur"
              src="/img/section-extraordinary/why03.jpg"
              alt="why lux"
              width={145}
              height={325}
            />
          </div>
        </div>
      </div>
      <div className="why__body">
        <div className="why__container container">
          <div className="why__title">
            <h2 className="why__title-title title_h3">Why Lux Trips</h2>
            <p className="why__title-text text_h5">
              As Travel Designer, we know the ins and outs of travel from who to
              work with, where to go, when to book, and which restaurant
              provides the most authentic cuisine.{" "}
            </p>
          </div>
          <div className="why__content">
            <div className="why__content-text01 text_h6">
              Exclusive knowledge to provide the best of the best to clients
            </div>
            <div
              className={`${manrope400.className} why__content-text02 text_h5`}
            >
              Our area of expertise ranges from luxury resorts and
              villas/chalets holiday bookings, private yacht and jet charters,
              to exclusive tours and personalized journey planning.{" "}
            </div>
            <div className="why__content-pic">
              <div className="why__parallax-icon-wrapper">
                <Image
                  src="/img/section-extraordinary/why04.jpg"
                  alt="why lux"
                  width={245}
                  height={545}
                />
              </div>
              <Image
                className="why__parallax-blur"
                src="/img/section-extraordinary/why04.jpg"
                alt="why lux"
                width={145}
                height={325}
              />
            </div>
            <div className="why__content-text03 text_h7">
              We craft and plan unique itineraries tailored to customers’
              interests and with strong attention to detail.
            </div>
            <Link
              href={"/why-lux-trips"}
              className="why__content-link title_h7"
            >
              help me plan a trip
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why;
