"use client";

import React, { useState } from "react";
import Image from "next/image";
import "../book-form.scss";
import BlackBtn from "../../components/ui/BlackBtn";
import { Input } from "../../components/ui/Input";
import { dataBook } from "../../utils/data";

import { Formik, Form } from "formik";
import { initialValues, schemas } from "../../utils/helper";

type Props = {}

const BookFormPage = ({ params }: { params: Promise<{ id: string }> }) => {
  const [selectedOption1, setSelectedOption1] = useState('Choose');
  const [selectedOption2, setSelectedOption2] = useState('Adults');
  const [selectedOption3, setSelectedOption3] = useState('Kids (0-10 y.o)');
  const [selectedOption4, setSelectedOption4] = useState('2');

  // Розкриваємо params за допомогою React API
  const { id } = React.use(params);

  // Конвертуємо ID в число
  const bookId = parseInt(id, 10);

  // Знаходимо відповідний запис
  const book = dataBook.find((item) => item.id === bookId);

  if (!book) return <p>booking not found</p>;

  return (
    <main className='main book-form-bg'>
      <section className='book-form'>
        {/* Hero */}
        <div className="container">
          {/* Title */}
          <h1 className="book-form-title">Book {book.title}</h1>
          {/* Left Section */}
          <div className="book-form__inner">
            <div className="book-form__left ">
              <div className="book-form__image-wrapper">
                <Image width={540} height={191} className="book-form__image" src={book.image} alt="Ringbell on reception" />
              </div>
              <div className="book-form__title">
                {book.info.title}
              </div>
              <div className="book-form__description">
                {book.info.text}
              </div>
              <div className="book-form__benefits-wrapper">
                <ul className="book-form__benefits-list">

                  <li className="book-form__benefits-item">
                    <div className="book-form__benefits-item-inner">
                      <div  className="book-form__benefits-img-1">
                      </div>
                      <div  className="book-form__benefits-title">Dedicated 24/7 Travel Advisor</div>
                    </div>
                  </li>
                  
                  <li className="book-form__benefits-item">
                    <div className="book-form__benefits-item-inner">
                      <div  className="book-form__benefits-img-2">
                      </div>
                      <div  className="book-form__benefits-title">Personalized itinerary</div>
                    </div>
                  </li>
                  <li className="book-form__benefits-item">
                    <div className="book-form__benefits-item-inner">
                      <div  className="book-form__benefits-img-3">
                      </div>
                      <div  className="book-form__benefits-title">Exclusive services (e.g.event manager, nanny, etc.)</div>
                    </div>
                  </li>
                  <li className="book-form__benefits-item">
                    <div className="book-form__benefits-item-inner">
                      <div  className="book-form__benefits-img-4">
                      </div>
                      <div  className="book-form__benefits-title">Accidental damage</div>
                    </div>
                  </li>
                  <li className="book-form__benefits-item">
                    <div className="book-form__benefits-item-inner">
                      <div  className="book-form__benefits-img-5">
                      </div>
                      <div  className="book-form__benefits-title">Travel insurance</div>
                    </div>
                  </li>
                  <li className="book-form__benefits-item">
                    <div className="book-form__benefits-item-inner">
                      <div  className="book-form__benefits-img-6">
                      </div>
                      <div  className="book-form__benefits-title">Package deals</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

              {/* Right Section */}
            <div className="book-form__right">
                <div className="book-form__wrapper">
                  <Formik
                    initialValues={initialValues}
                    validationSchema={schemas.custom}
                    onSubmit={() => console.log("Success")}
                  >
                    <Form action="#" className="book-form__form">
                      <div className="customise-page__column direction-column">
                          <label className="customise-page__label" htmlFor="location" data-location>
                            Location
                          </label>
                          <div className="customise-page__select--wrapper">
                            <select value={selectedOption1} onChange={(e) => setSelectedOption1(e.target.value)} className="customise-page__select-lg romb" name="location" id="location">
                              <option value="Choose">Choose</option>
                              <option value="Istanbul">Istanbul</option>
                              <option value="Ankara">Ankara</option>
                              <option value="Batumi">Batumi</option>
                              <option value="Los Angeles">Los Angeles</option>
                            </select>
                          </div>
                      </div>
                      <div className="customise-page__column">
                          <div className="customise-page__row">
                          <label className="customise-page__label" htmlFor="date1">
                            Dates
                          </label>
                          <div className="customise-page__select--wrapper">
                            <select className="customise-page__select-md calendar" name="date" id='date1'>
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
                            <select className="customise-page__select-md calendar" name="date" id='date-end'>
                              <option value="date-3">26-04-22</option>
                              <option value="date-4">28-04-22</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="customise-page__column">
                          <div className="customise-page__row">
                            <label className="customise-page__label" htmlFor="guests" data-guests>Guests</label>
                            <div className="customise-page__select--wrapper">
                              <select value={selectedOption2} onChange={(e) => setSelectedOption2(e.target.value)} className="customise-page__select-md person" name="adults" id="guests">
                                  <option value="Adults">Adults</option>
                                  <option value="1">1</option>
                                  <option value="2">2</option>
                                  <option value="3">3</option>
                                  <option value="4">4</option>
                              </select>
                            </div>
                          </div>
                          
                          <div className="customise-page__row">
                            <label className="customise-page__label" htmlFor="kids">
                              <span className="span-wrapper"></span>
                            </label>
                            <div className="customise-page__select--wrapper">
                              <select value={selectedOption3} onChange={(e) => setSelectedOption3(e.target.value)} className="customise-page__select-md child" name="kids" id="kids">
                                  <option value="Kids (0-10 y.o)">Kids (0-10 y.o)</option>
                                  <option value="1">1</option>
                                  <option value="2">2</option>
                                  <option value="3">3</option>
                                  <option value="4">4</option>
                              </select>
                            </div>
                          </div>
                      </div>
                      <div className="customise-page__column">
                          <div className="customise-page__row">
                            <label className="customise-page__label" htmlFor="rooms">Number of rooms</label>
                            <div className="customise-page__select--wrapper">
                              <select value={selectedOption4} onChange={(e) => setSelectedOption4(e.target.value)} className="customise-page__select-md padding-change" name="rooms" id="rooms">
                                  <option value="1">1</option>
                                  <option value="2">2</option>
                                  <option value="3">3</option>
                                  <option value="4">4</option>
                              </select>
                            </div>
                          </div>
                          <div className="customise-page__row">
                            <label className="customise-page__label" htmlFor="budget">Budget</label>
                            <input className="customise-page__input-sm" type="text" name="budget" id="budget" required />
                          </div>
                      </div>
                      <Input
                        label="Name"
                        name="name"
                        id="name"
                      />
                      <Input
                        label="Email"
                        name="email"
                        id="email"
                      />
                      <div className="customise-page__column direction-column margin-change">
                        <label className="customise-page__label" htmlFor="textarea">Special requests</label>
                        <textarea id='textarea' className="customise-page__text-area"></textarea>
                      </div>
                      <div className="card-btn-wrapper">
                        <BlackBtn>Book now</BlackBtn>
                      </div>
                      <div className="or-wrap">
                        <p className="or">
                          or
                        </p>
                      </div>
                      <div className="customise-page__buttons">
                        <button className="customise-page__activity-btn">
                          call me back
                        </button>
                        <button className="customise-page__activity-btn">
                          <a href="#">
                            email me back
                          </a>
                        </button>
                      </div>
                    </Form>
                  </Formik>
                    

                </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default BookFormPage;

