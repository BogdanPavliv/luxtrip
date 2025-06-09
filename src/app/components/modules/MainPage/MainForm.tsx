import React, { useState } from "react";

import { Manrope } from "next/font/google";
const manrope500 = Manrope({
  subsets: ["latin"],
  weight: "500"
});

const MainForm = () => {
    const [toggleForm, setToggleForm] = useState<boolean>(false);
    
      const [selectedOption1, setSelectedOption1] = useState('1 Adventure Travel');
      const [selectedOption2, setSelectedOption2] = useState('1 Person');
  return (
    <div className="main-form">
            <div className="main-form__container container">
              <button 
               className="main-form__btn btn__decor btn__decor_w"
               onClick={() => setToggleForm(toggleForm => !toggleForm)}
              >
                <span>find your journey</span>
              </button>
              <div className={toggleForm ? "main-form__form-wrapper active" : "main-form__form-wrapper"}>
                    <form action="#" className="main-form__form">
                    <label className="main-form__label" htmlFor="Destination">
                      <span className="main-form__label-text main-form__label-text_01">Destination</span>
                      <input className={`${manrope500.className} main-form__label-input`} id="Destination" name="place" type="text"  minLength={2} maxLength={30} placeholder="Where are you going?" required />
                    </label>
                    <label className="main-form__label" htmlFor="travel-type">
                      <span className="main-form__label-text main-form__label-text_02">Travel type</span>
                      <select value={selectedOption1} onChange={(e) => setSelectedOption1(e.target.value)} className={`${manrope500.className} main-form__label-select`} name="travel-type" id="travel-type">
                        <option value="1 Adventure Travel">1 Adventure Travel</option>
                        <option value="2 Adventure Travel">2 Adventure Travel</option>
                        <option value="3 Adventure Travel">3 Adventure Travel</option>
                        <option value="4 Adventure Travel">4 Adventure Travel</option>
                      </select>
                    </label>
                    <label className="main-form__label" htmlFor="date">
                      <span className="main-form__label-text main-form__label-text_03">When</span>
                      <input className={`${manrope500.className} main-form__label-input`} name="date" id="date" type="date" required />
                    </label>
                    <label className="main-form__label" htmlFor="Travellers">
                      <span className="main-form__label-text main-form__label-text_04">Travellers</span>
                      <select value={selectedOption2} onChange={(e) => setSelectedOption2(e.target.value)} className={`${manrope500.className} main-form__label-select`} name="Travellers" id="Travellers">
                        <option value="1 Person">1 Person</option>
                        <option value="2 Persons">2 Persons</option>
                        <option value="3 Persons">3 Persons</option>
                        <option value="4 Persons">4 Persons</option>
                      </select>
                    </label>
                    <button className="main-form__form-btn" type="button"><span>Find</span></button>
                  </form>
              </div>
            </div>
          </div>
  )
};

export default MainForm;