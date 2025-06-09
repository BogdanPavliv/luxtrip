import { Manrope } from "next/font/google";

const manrope400 = Manrope({
  subsets: ["latin"],
  weight: "400",
});

const Experience = () => {
  return (
    <section className="experience">
      <div className="luxtrips-container experience__container">
        <div className="experience-box">
          <div className="experience-box__info">
            <h2 className="title experience__title">
              Creating a unique experience for each client
            </h2>
            <p className={`${manrope400.className} experience__text`}>
              Starting from suggesting destinations to visit in the current
              season, to the selection of the most exquisite locations for a
              special event or a family dinner.
            </p>
          </div>

          <ul className="experience-box__statistics">
            <li className="statistics-block statistics-block-left">
              <dl className="statistics-block__item">
                <dt>985</dt>
                <dd>
                  Luxury trips
                  <br /> provided
                </dd>
              </dl>
            </li>

            <li className="statistics-block statistics-block-center">
              <dl className="statistics-block__item">
                <dt>68</dt>
                <dd>Destinations</dd>
              </dl>
            </li>

            <li className="statistics-block statistics-block-right">
              <dl className="statistics-block__item">
                <dt>812</dt>
                <dd>
                  Happy
                  <br /> Customers
                </dd>
              </dl>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
