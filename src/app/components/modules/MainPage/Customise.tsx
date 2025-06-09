import SubscribeForm from "../../../components/ui/SubscribeForm";
import { Manrope } from "next/font/google";

const manrope400 = Manrope({
  subsets: ["latin"],
  weight: "400"
});

const Customise = () => {
  return (
    <section className="customise">
      <div className="customise__container container">
        <div className="customise__block">
          <h2 className="customise__title title_h3">
            Customise your trip with us
          </h2>
          <div className="customise__item">
            <div className="customise__item-romb">1</div>
            <div className="customise__item-title">
              Describe your dream trip
            </div>
            <p
              className={`${manrope400.className} customise__item-text text_h5`}
            >
              Let us know what your perfect vacation is. Destinations,
              preferences, and personal interests.
            </p>
          </div>
          <div className="customise__item">
            <div className="customise__item-romb">2</div>
            <div className="customise__item-title">Get matched</div>
            <p
              className={`${manrope400.className} customise__item-text text_h5`}
            >
              Our team connects you with up to two vetted travel specialists,
              who will compete for your business.
            </p>
          </div>
          <div className="customise__item">
            <div className="customise__item-romb">3</div>
            <div className="customise__item-title">Book your vacation</div>
            <p
              className={`${manrope400.className} customise__item-text text_h5`}
            >
              Get your itinerary customized to fit your needs and preferences.
              book only when you’re happy with the travel specialist and the
              itinerary.
            </p>
          </div>
          <div className="customise__link">
            <a
              href="#"
              className="customise__link-link btn__decor btn__decor_b"
            >
              <span>Start a trip request</span>
            </a>
            <div className="customise__link-text text_h5">
              It’s Free! - no credit card required
            </div>
          </div>
        </div>
        <SubscribeForm />
      </div>
    </section>
  );
};

export default Customise;
