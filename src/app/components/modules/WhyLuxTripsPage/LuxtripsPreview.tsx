import Image from "next/image";
import { Manrope } from "next/font/google";

const manrope400 = Manrope({
  subsets: ["latin"],
  weight: "400",
});

const LuxtripsPreview = () => {
  return (
    <section className="luxtrips-preview">
      <div className="luxtrips-preview-bg">
        <div className="luxtrips-container luxtrips-preview__container">
          <h1 className="title-main luxtrips-preview__title">
            Why
            <br /> LuxTrips
          </h1>

          <ul className="luxtrips-preview-cards">
            <li className="luxtrips-preview-card">
              <div className="luxtrips-preview-card__picture luxtrips-preview-card__picture-left">
                <div className="luxtrips-preview-card__image-block luxtrips-preview-card__image-block-left">
                  <div className="luxtrips-preview-card__image-wrapper">
                    <picture className="preview-card__image preview-card__image-left">
                      <source
                        width={145}
                        height={324}
                        className="preview-card__img"
                        media="(min-width: 769px)"
                        srcSet="/img/why-lux-trips/img/preview-photo-1.webp"
                      />
                      <Image
                        width={83}
                        height={187}
                        className="preview-card__img"
                        src="/img/why-lux-trips/img/preview-photo-1-mob.webp"
                        alt="child"
                      />
                    </picture>
                  </div>
                  <picture className="preview-card__image preview-card__image-left">
                    <source
                      className="preview-card__img preview-card__img-blur"
                      media="(min-width: 769px)"
                      srcSet="/img/why-lux-trips/img/preview-photo-1.webp"
                      width={145}
                      height={324}
                    />
                    <Image
                      width={83}
                      height={187}
                      className="preview-card__img preview-card__img-blur"
                      src="/img/why-lux-trips/img/preview-photo-1-mob.webp"
                      alt="child"
                    />
                  </picture>
                </div>
              </div>

              <div className="luxtrips-preview-card__content">
                <h2 className="title preview-card__title">
                  Bespoke experience of travelling
                </h2>
                <p className={`${manrope400.className} preview-card__text`}>
                  Being expert Luxury Travel Designers, Lux Trips offers bespoke
                  experience of travelling.
                </p>
              </div>
            </li>

            <li className="luxtrips-preview-card preview-card-center">
              <div className="luxtrips-preview-card__picture">
                <div className="luxtrips-preview-card__image-block">
                  <div className="luxtrips-preview-card__image-wrapper">
                    <picture className="preview-card__image preview-card__image-center">
                      <Image
                        width={144}
                        height={323}
                        className="preview-card__img"
                        src="/img/why-lux-trips/img/preview-photo-2.webp"
                        alt="girl in asia"
                        loading="lazy"
                      />
                    </picture>
                  </div>
                  <picture className="preview-card__image preview-card__image-center">
                    <Image
                      width={144}
                      height={323}
                      className="preview-card__img preview-card__img-blur"
                      src="/img/why-lux-trips/img/preview-photo-2.webp"
                      alt="girl in asia"
                      loading="lazy"
                    />
                  </picture>
                </div>
              </div>

              <div className="luxtrips-preview-card__content">
                <h2 className="title preview-card__title preview-card__title-center">
                  Collecting precious moments is our utmost goal
                </h2>
                <p
                  className={`${manrope400.className} preview-card__text preview-card__text-center`}
                >
                  Our exclusive network of trusted local partners allows us to
                  carefully curate every detail.
                </p>
              </div>
            </li>

            <li className="luxtrips-preview-card">
              <div className="luxtrips-preview-card__picture luxtrips-preview-card__picture-right">
                <div className="luxtrips-preview-card__image-block luxtrips-preview-card__image-block-right">
                  <div className="luxtrips-preview-card__image-wrapper">
                    <picture className="preview-card__image preview-card__image-right">
                      <source
                        width={144}
                        height={323}
                        className="preview-card__img"
                        media="(min-width: 769px)"
                        srcSet="/img/why-lux-trips/img/preview-photo-3.webp"
                      />
                      <Image
                        width={83}
                        height={186}
                        className="preview-card__img"
                        src="/img/why-lux-trips/img/preview-photo-3-mob.webp"
                        alt="family on a mountain lake"
                        loading="lazy"
                      />
                    </picture>
                  </div>
                  <picture className="preview-card__image preview-card__image-right">
                    <source
                      width={144}
                      height={323}
                      className="preview-card__img preview-card__img-blur preview-card__img-blur-right"
                      media="(min-width: 769px)"
                      srcSet="/img/why-lux-trips/img/preview-photo-3.webp"
                    />
                    <Image
                      width={83}
                      height={186}
                      className="preview-card__img preview-card__img-blur preview-card__img-blur-right"
                      src="/img/why-lux-trips/img/preview-photo-3-mob.webp"
                      alt="family on a mountain lake"
                    />
                  </picture>
                </div>
              </div>

              <div className="luxtrips-preview-card__content">
                <h2 className="title preview-card__title">
                  We personalize each trip
                </h2>
                <p className={`${manrope400.className} preview-card__text`}>
                  Thanks to our extensive knowledge and operation in the
                  industry, we personalize each trip according to the needs and
                  wishes of our clients.
                </p>
              </div>
            </li>
          </ul>

          <ul className="luxtrips-preview-cards-mobile">
            <li className="luxtrips-preview-card-mobile">
              <div className="luxtrips-preview-card__content-mobile">
                <h2 className="title preview-card__title preview-card__title-center">
                  Collecting precious moments is our utmost goal
                </h2>
                <p className="preview-card__text preview-card__text-center">
                  Our exclusive network of trusted local partners allows us to
                  carefully curate every detail.
                </p>
              </div>
            </li>

            <li className="luxtrips-preview-card-mobile preview-card-mobile-center">
              <div className="luxtrips-preview-card__content-mobile">
                <h2 className="title preview-card__title">
                  Bespoke experience of travelling
                </h2>
                <p className="preview-card__text">
                  Being expert Luxury Travel Designers, Lux Trips offers bespoke
                  experience of travelling.
                </p>
              </div>
            </li>

            <li className="luxtrips-preview-card-mobile">
              <div className="luxtrips-preview-card__content-mobile">
                <h2 className="title preview-card__title">
                  We personalize each trip
                </h2>
                <p className="preview-card__text">
                  Thanks to our extensive knowledge and operation in the
                  industry, we personalize each trip according to the needs and
                  wishes of our clients.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default LuxtripsPreview;
