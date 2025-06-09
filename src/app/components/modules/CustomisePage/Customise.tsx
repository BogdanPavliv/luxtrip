"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Manrope } from "next/font/google";
// import "../customise.scss";
import BlackBtn from "../../../components/ui/BlackBtn";
import { Input } from "../../../components/ui/Input";
import { dataTrips } from "../../../utils/data";
import { Formik, Form } from "formik";
import { initialValues, schemas } from "../../../utils/helper";

const manrope500 = Manrope({
  subsets: ["latin"],
  weight: "500",
});

const Customise = ({ params }: { params: Promise<{ id: string }> }) => {
  // Розкриваємо params за допомогою React API
  const { id } = React.use(params);

  // Конвертуємо ID в число
  const customiseId = parseInt(id, 10);

  // Знаходимо відповідний запис
  const customise = dataTrips.find((item) => item.id === customiseId);

  const [selectedOption1, setSelectedOption1] = useState(customise?.place);
  console.log(selectedOption1);

  if (!customise) return <p>Trip not found</p>;
  return (
    <section className="customise-page">
      <div className="container">
        <h1 className="customise-title">Customise trip</h1>
        <div className="customise-page__top flex">
          <Image
            width={63}
            height={27}
            src="/img/customise-img/Layer 3.png"
            alt="layer"
            className="bg-top"
          />
          <Image
            width={358}
            height={79}
            src="/img/customise-img/Subtract.png"
            alt="subtract"
            className="bg-wrapper"
          />
          <Image
            width={419}
            height={71}
            src="/img/customise-img/Rectangle 30.png"
            alt="rectangle"
            className="bg-bottom"
          />
          <h2 className="forms-title">Customise</h2>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={schemas.custom}
          onSubmit={() => console.log("Success")}
        >
          <Form action="#" className="customise-page__form">
            <div className="customise-page__column">
              <div className="customise-page__row">
                <label className="customise-page__label" htmlFor="location1">
                  Location from
                </label>
                <div className="customise-page__select--wrapper">
                  <select
                    className={`${manrope500.className} customise-page__select-md romb`}
                    name="country"
                    id="location1"
                  >
                    <option value="Choose">Choose</option>
                    <option value="Ankara">Ankara</option>
                    <option value="Moscow">Moscow</option>
                    <option value="Kiev">Kiev</option>
                  </select>
                </div>
              </div>
              <div className="customise-page__row">
                <label className="customise-page__label" htmlFor="location2">
                  to
                </label>
                <div className="customise-page__select--wrapper">
                  <select
                    value={selectedOption1}
                    onChange={(e) => setSelectedOption1(e.target.value)}
                    className={`${manrope500.className} customise-page__select-md romb`}
                    name="country"
                    id="location2"
                  >
                    <option value="Austria">Austria</option>
                    <option value="Peru">Peru</option>
                    <option value="Croatia">Croatia</option>
                    <option value="Jordan">Jordan</option>
                    <option value="Anyplace">Anyplace</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="customise-page__column">
              <div className="customise-page__row">
                <label className="customise-page__label" htmlFor="date1">
                  Dates
                </label>
                <div className="customise-page__select--wrapper">
                  <select
                    className={`${manrope500.className} customise-page__select-md calendar`}
                    name="date"
                    id="date1"
                  >
                    <option value="date-1">14-04-22</option>
                    <option value="date-2">18-04-22</option>
                  </select>
                </div>
              </div>
              <div className="customise-page__row">
                <label className="customise-page__label" htmlFor="date-end">
                  <span className="span-wrapper"></span>
                </label>
                <div className="customise-page__select--wrapper">
                  <select
                    className={`${manrope500.className} customise-page__select-md calendar`}
                    name="date"
                    id="date-end"
                  >
                    <option value="date-3">26-04-22</option>
                    <option value="date-4">28-04-22</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="customise-page__column direction-column">
              <label className="customise-page__label" htmlFor="cars">
                Model of supercar
              </label>
              <div className="customise-page__select--wrapper">
                <select
                  className={`${manrope500.className} customise-page__select-lg`}
                  name="model-of-car"
                  id="cars"
                >
                  <option value="Surprise me">Surprise me</option>
                  <option value="Lamborgini">Lamborgini</option>
                  <option value="Bentley">Bentley</option>
                  <option value="Aston-martin">Aston-martin</option>
                  <option value="Bugatti-veiron">Bugatti-veiron</option>
                </select>
              </div>
            </div>
            <div className="customise-page__column">
              <div className="customise-page__row-2">
                <label className="customise-page__label" htmlFor="pick-up">
                  Pick-up location
                </label>
                <div className="customise-page__select--wrapper">
                  <select
                    className={`${manrope500.className} customise-page__select-md-2 romb`}
                    name="pick-up"
                  >
                    <option value="Choose">Choose</option>
                    <option value="Italy">Italy</option>
                    <option value="France">France</option>
                    <option value="Spain">Spain</option>
                  </select>
                </div>
              </div>
              <div className="customise-page__row-3">
                <label className="customise-page__label" htmlFor="pick-up-time">
                  Pick up time
                </label>
                <div className="customise-page__select--wrapper">
                  <select
                    className={`${manrope500.className} customise-page__select-sm`}
                    name="pick-up-time"
                  >
                    <option value="09.00">09.00</option>
                    <option value="10.00">10.00</option>
                    <option value="11.00">11.00</option>
                    <option value="12.00">12.00</option>
                    <option value="13.00">13.00</option>
                    <option value="14.00">14.00</option>
                    <option value="15.00">15.00</option>
                    <option value="16.00">16.00</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="customise-page__column">
              <div className="customise-page__row-2">
                <label className="customise-page__label" htmlFor="pick-up">
                  Drop off location
                </label>
                <div className="customise-page__select--wrapper">
                  <select
                    className={`${manrope500.className} customise-page__select-md-2 romb`}
                    name="pick-up"
                    id="pick-up"
                  >
                    <option value="Choose">Choose</option>
                    <option value="Pome">Pome</option>
                    <option value="Paris">Paris</option>
                    <option value="Berlin">Berlin</option>
                  </select>
                </div>
              </div>
              <div className="customise-page__row-3">
                <label className="customise-page__label" htmlFor="pick-up-time">
                  Pick up time
                </label>
                <div className="customise-page__select--wrapper">
                  <select
                    className={`${manrope500.className} customise-page__select-sm`}
                    name="pick-up-time"
                    id="pick-up-time"
                  >
                    <option value="09.00">10.00</option>
                    <option value="10.00">10.00</option>
                    <option value="11.00">11.00</option>
                    <option value="12.00">12.00</option>
                    <option value="13.00">13.00</option>
                    <option value="14.00">14.00</option>
                    <option value="15.00">15.00</option>
                    <option value="16.00">16.00</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="customise-page__column">
              <div className="customise-page__row">
                <label
                  className="customise-page__label"
                  htmlFor="number-of-people"
                >
                  Number of people
                </label>
                <div className="customise-page__select--wrapper">
                  <select
                    className={`${manrope500.className} customise-page__select-md-3`}
                    name="number-people"
                  >
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                  </select>
                </div>
              </div>
              <div className="customise-page__row">
                <label className="customise-page__label" htmlFor="driver">
                  Driver
                </label>
                <label className="switch" id="driver">
                  <input type="checkbox" />
                  <div className={`${manrope500.className} switcher round`}>
                    <div className="switch-item yes">Yes</div>
                    <div className="switch-item no">No</div>
                  </div>
                </label>
              </div>
            </div>
            <Input label="Name" name="name" id="name" />
            <Input label="Email" name="email" id="email" />
            <div className="customise-page__column direction-column">
              <label className="customise-page__label" htmlFor="textarea">
                Special requests
              </label>
              <textarea
                id="textarea"
                className={`${manrope500.className} customise-page__text-area`}
              ></textarea>
            </div>
            <div
              className="customise-page__img"
              style={{ backgroundImage: `url('${customise.image}')` }}
            >
              <p className="customise-page__img-text">{customise.text}</p>
              <p className="customise-page__img-price">€ {customise.price}</p>
            </div>
            <div className="card-btn-wrapper">
              <BlackBtn>Book now</BlackBtn>
            </div>
            <div className="or-wrap">
              <p className="or">or</p>
            </div>
            <div className="customise-page__buttons">
              <button className="customise-page__activity-btn">
                call me back
              </button>
              <button className="customise-page__activity-btn">
                <a href="#">email me back</a>
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </section>
  );
};

export default Customise;
