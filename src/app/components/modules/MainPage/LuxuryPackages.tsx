import Image from "next/image";
import Link from "next/link";

const LuxuryPackages = () => {
  return (
    <section className="luxary">
      <div className="luxary__container container">
        <div className="luxary__content">
          <div className="luxary__item-title">
            <div className="luxary__title-wrapper">
              <h2 className="luxary__title title_h3">Luxury Packages</h2>
              <Link href={"/luxury-packages"} className="luxary__link text_h4">
                view all
              </Link>
            </div>
          </div>

          <div className="luxary__item trip-link">
            <Image
              src="/img/section-extraordinary/catalog/luxary01.jpg"
              alt="luxary link"
              width={350}
              height={570}
            />
            <div className="trip-link__content">
              <div className="trip-link__title title_h5">
                Best Winter Destinations
              </div>
            </div>
            <a href="" className="trip-link__link">
              <span className="trip-link__link-wrapper">
                <span>
                  <output>34</output>
                  <b>places</b>
                </span>
              </span>
            </a>
          </div>

          <div className="luxary__item trip-link">
            <Image
              src="/img/section-extraordinary/catalog/luxary02.jpg"
              alt="luxary link"
              width={350}
              height={570}
            />
            <div className="trip-link__content">
              <div className="trip-link__title title_h5">
                The world&apos;s most extraordinary places
              </div>
            </div>
            <a href="" className="trip-link__link">
              <span className="trip-link__link-wrapper">
                <span>
                  <output>29</output>
                  <b>places</b>
                </span>
              </span>
            </a>
          </div>

          <div className="luxary__item trip-link">
            <Image
              src="/img/section-extraordinary/catalog/luxary03.jpg"
              alt="luxary link"
              width={350}
              height={570}
            />
            <div className="trip-link__content">
              <div className="trip-link__title title_h5">
                New destinations for 2022
              </div>
            </div>
            <a href="" className="trip-link__link">
              <span className="trip-link__link-wrapper">
                <span>
                  <output>47</output>
                  <b>places</b>
                </span>
              </span>
            </a>
          </div>

          <div className="luxary__item trip-link">
            <Image
              src="/img/section-extraordinary/catalog/luxary04.jpg"
              alt="luxary link"
              width={350}
              height={570}
            />
            <div className="trip-link__content">
              <div className="trip-link__title title_h5">
                Your health is matter
              </div>
            </div>
            <a href="" className="trip-link__link">
              <span className="trip-link__link-wrapper">
                <span>
                  <output>29</output>
                  <b>places</b>
                </span>
              </span>
            </a>
          </div>

          <div className="luxary__item trip-link">
            <Image
              src="/img/section-extraordinary/catalog/luxary05.jpg"
              alt="luxary link"
              width={350}
              height={570}
            />
            <div className="trip-link__content">
              <div className="trip-link__title title_h5">
                Experiences Away From Crowd
              </div>
            </div>
            <a href="" className="trip-link__link">
              <span className="trip-link__link-wrapper">
                <span>
                  <output>168</output>
                  <b>places</b>
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LuxuryPackages;
