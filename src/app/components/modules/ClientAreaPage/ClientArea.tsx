"use client";

import React, { useState } from "react";
import { Manrope } from "next/font/google";
import Image from "next/image";
import { TabProps } from "../../../types/others";

const manrope400 = Manrope({
  subsets: ["latin"],
  weight: "400",
});

const manrope500 = Manrope({
  subsets: ["latin"],
  weight: "500",
});

const ClientArea = () => {
  const [activeTab, setActiveTab] = useState<TabProps>("tab-1");
  const [fileUploads, setFileUploads] = useState<Record<string, number>>({});

  const handleTabClick = (tabId: TabProps) => {
    setActiveTab(tabId);
  };

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    fieldId: string
  ) => {
    if (event.target.files) {
      setFileUploads((prev) => ({
        ...prev,
        [fieldId]: event.target.files ? event.target.files.length : 0,
      }));
    }
  };
  return (
    <section className="client-area">
      <div className="container">
        <h1 className="client-area__title">Client Area</h1>
        <div className="client-area__wrapper">
          {/* Tab Buttons */}
          <div className="client-area__tabs">
            {[
              "Personal Details",
              "Preferences",
              "Payment Details",
              "My Bookings",
              "My Documents",
            ].map((title, index) => {
              const tabId = `tab-${index + 1}` as TabProps;
              return (
                <button
                  key={tabId}
                  className={`${manrope400.className} client-area__btn ${
                    activeTab === tabId ? "active-tab" : ""
                  }`}
                  type="button"
                  onClick={() => handleTabClick(tabId)}
                >
                  {title}
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          <div
            className={`client-area__content ${
              activeTab === "tab-1" ? "active-tab" : ""
            }`}
            id="tab-1"
          >
            {/* Tab 1 Content */}
            {[
              "Name",
              "Email address",
              "Phone number",
              "Date of birth",
              "Nationality",
              "Gender",
              "Address",
            ].map((label, index) => (
              <div key={index} className="client-area__list">
                <form className="client-area__form">
                  <p className={`${manrope400.className} client-area__text`}>
                    {label}
                  </p>
                  <input
                    name={label.toLowerCase().replace(/\s/g, "-")}
                    type="text"
                    className={`${manrope500.className} client-area__input`}
                    placeholder={`Enter your ${label.toLowerCase()}`}
                  />
                </form>
                <label
                  htmlFor={label.toLowerCase()}
                  className={`${manrope500.className} client-area__label`}
                >
                  Edit
                </label>
              </div>
            ))}
          </div>

          <div
            className={`client-area__content ${
              activeTab === "tab-2" ? "active-tab" : ""
            }`}
            id="tab-2"
          >
            {/* Tab 2 Content */}
            <div className="client-area__list another">
              <form className="client-area__form">
                <p className={`${manrope400.className} client-area__text`}>
                  Currency
                </p>
                <input
                  type="text"
                  id="currency"
                  className={`${manrope400.className} client-area__input`}
                  placeholder="PLN Polish Zloty"
                />
              </form>
              <label
                htmlFor="currency"
                className={`${manrope500.className} client-area__label`}
              >
                Edit
              </label>
            </div>
            <div className="client-area__list another">
              <form className="client-area__form">
                <p className={`${manrope400.className} client-area__text`}>
                  Language
                </p>
                <input
                  type="text"
                  id="language"
                  className={`${manrope400.className} client-area__input`}
                  placeholder="American English"
                />
              </form>
              <label
                htmlFor="language"
                className={`${manrope500.className} client-area__label`}
              >
                Edit
              </label>
            </div>
          </div>

          <div
            className={`client-area__content ${
              activeTab === "tab-3" ? "active-tab" : ""
            }`}
            id="tab-3"
          >
            {/* Tab 3 Content */}
            <div className="client-area__list ">
              <form className="client-area__form">
                <p className={`${manrope400.className} client-area__text`}>
                  Payment cards
                </p>
                <input
                  type="number"
                  id="card"
                  className={`${manrope400.className} client-area__input`}
                  placeholder="Pay with new card"
                />
              </form>
              <label htmlFor="card" className="client-area__label">
                Edit
              </label>
            </div>
          </div>

          <div
            className={`client-area__content ${
              activeTab === "tab-4" ? "active-tab" : ""
            }`}
            id="tab-4"
          >
            {/* Tab 4 Content */}
            <div className="client-area__wrapper-cards">
              <div className="client-area__card">
                <Image
                  width={200}
                  height={325}
                  src="/img/client/winter.jpg"
                  alt="winter"
                  className="client-area__card-img"
                />
                <div className="client-area__card-item-inner">
                  <p className="client-area__card-text">
                    Winter Park Ski Holiday
                  </p>
                  <button className="client-area__card-button">
                    Download PDF
                  </button>
                </div>
              </div>

              <div className="client-area__card">
                <Image
                  width={200}
                  height={325}
                  src="/img/client/machu.jpg"
                  alt="machu"
                  className="client-area__card-img"
                />
                <div className="client-area__card-item-inner">
                  <p className="client-area__card-text">Machu Picchu</p>
                  <button className="client-area__card-button">
                    Download PDF
                  </button>
                </div>
              </div>

              <div className="client-area__card">
                <Image
                  width={200}
                  height={325}
                  src="/img/client/hvar.jpg"
                  alt="Hvar"
                  className="client-area__card-img"
                />
                <div className="client-area__card-item-inner">
                  <p className="client-area__card-text">Hvar</p>
                  <button className="client-area__card-button">
                    Download PDF
                  </button>
                </div>
              </div>

              <div className="client-area__card">
                <Image
                  width={200}
                  height={325}
                  src="/img/client/wadi.jpg"
                  alt="Wadi"
                  className="client-area__card-img"
                />
                <div className="client-area__card-item-inner">
                  <p className="client-area__card-text">Wadi Musa</p>
                  <button className="client-area__card-button">
                    Download PDF
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`client-area__content ${
              activeTab === "tab-5" ? "active-tab" : ""
            }`}
            id="tab-5"
          >
            {/* Tab 4 Content File Upload */}
            <div className="client-area__list">
              <div className="client-area__field-wrapper">
                <input
                  name="file"
                  type="file"
                  id="field__file-1"
                  className="field client-area__field-file"
                  multiple
                  onChange={(e) => handleFileChange(e, "field__file-1")}
                />
                <label
                  className="client-area__file-wrapper"
                  htmlFor="field__file-1"
                >
                  <div
                    className={`${manrope400.className} client-area__file-fake`}
                  >
                    {fileUploads["field__file-1"]
                      ? `Selected files: ${fileUploads["field__file-1"]}`
                      : "No file chosen"}
                  </div>
                  <div
                    className={`${manrope500.className} client-area__file-button`}
                  >
                    Choose
                  </div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientArea;
