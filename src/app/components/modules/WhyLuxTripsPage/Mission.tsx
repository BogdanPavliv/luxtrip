import Link from "next/link";
import { Manrope } from "next/font/google";

const manrope400 = Manrope({
  subsets: ["latin"],
  weight: "400",
});

const Mission = () => {
  return (
    <section className="mission">
      <div className="luxtrips-container mission__container">
        <div className="mission__content">
          <p className={`${manrope400.className} mission__text`}>
            As a Luxury Travel Designer, we make it our mission to transform
            clients’ interests and dreams into one-of-a-kind travel experience
            through the provision of premium quality services.
          </p>
          <h2 className="title mission__title">
            Importantly, in Lux Trips we get to know our clients personally, and
            hence, we get to have a relationship with each of them.
          </h2>
          <p className={`${manrope400.className} mission__text`}>
            We construct long-lasting connections thanks to the unforgettable
            trips we design, as we believe that travel is all about feelings,
            and memories are the most precious gifts we want our customer to
            bring back with them.
          </p>
          <Link href={"/contact"} className="luxtrips-btn luxtrips-book__btn">
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Mission;
