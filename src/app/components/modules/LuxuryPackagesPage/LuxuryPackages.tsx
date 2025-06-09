import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const LuxuryPackages = () => {
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([
    new Date("2022-12-14"),
    new Date("2022-12-28"),
  ]);
  const [customiseTour, setCustomiseTour] = useState(true);
  const [groupTour, setGroupTour] = useState(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const [selectedOption1, setSelectedOption1] = useState("1 Person");
  const [selectedOption2, setSelectedOption2] = useState(
    "Romantic Winter Destinations"
  );

  const handleDateChange = (dates: [Date | null, Date | null]) =>
    setDateRange(dates);

  const toggleCalendar = () => setIsCalendarOpen((prev) => !prev);

  const handleTourTypeChange =
    (type: "customise" | "group") =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (type === "customise") setCustomiseTour(event.target.checked);
      if (type === "group") setGroupTour(event.target.checked);
    };
  return (
    <section className="luxury-packages container">
      <h1 className="luxury-packages__title">Luxury packages</h1>

      <div className="luxury-packages__form">
        <h2 className="luxury-packages__form-title">
          <span></span> Find your journey
        </h2>
        <form
          className="luxury-packages__selection-form"
          action="#"
          method="get"
        >
          <div className="luxury">
            <div className="luxury__img"></div>
            <label
              className="luxury-packages__description"
              htmlFor="destinations-tour"
            >
              Luxury Tours
            </label>
            <select
              value={selectedOption2}
              onChange={(e) => setSelectedOption2(e.target.value)}
              className="luxury-packages__text cell-position"
              name="destinations"
              id="destinations-tour"
            >
              <option value="Romantic Winter Destinations">
                Romantic Winter Destinations
              </option>
              <option value="New destinations for 2022">
                New destinations for 2022
              </option>
              <option value="Best Winter Destinations">
                Best Winter Destinations
              </option>
              <option value="Your health is matter">
                Your health is matter
              </option>
              <option value="The world's most extraordinary places">
                The world&apos;s most extraordinary places
              </option>
              <option value="Experiences Away From Crowd">
                Experiences Away From Crowd
              </option>
            </select>
          </div>
          <div className="tour-date">
            <div className="tour-date__img"></div>
            <label className="luxury-packages__description" htmlFor="calendar">
              When
            </label>
            <button
              onClick={toggleCalendar}
              className="luxury-packages__text cell-position"
              id="calendar"
              type="button"
              name="daterange"
            >
              {dateRange[0]?.toLocaleDateString("en-US", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              }) || "Start Date"}{" "}
              -
              {dateRange[1]?.toLocaleDateString("en-US", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              }) || "End Date"}
            </button>
            {isCalendarOpen && (
              <div className="datepicker-tour-date-wrapper">
                <DatePicker
                  className="datepicker-tour-date"
                  selected={dateRange[0] || undefined}
                  onChange={handleDateChange}
                  startDate={dateRange[0] || undefined}
                  endDate={dateRange[1] || undefined}
                  selectsRange
                  inline
                  dateFormat="dd MMM yyyy"
                />
              </div>
            )}
          </div>
          <div className="quantity-tеravellers">
            <div className="quantity-tеravellers__img"></div>
            <label
              className="luxury-packages__description"
              htmlFor="tеravellers-counter"
            >
              Travellers
            </label>
            <select
              value={selectedOption1}
              onChange={(e) => setSelectedOption1(e.target.value)}
              className="luxury-packages__text cell-position"
              name="num"
              id="tеravellers-counter"
            >
              {[...Array(6)].map((_, i) => (
                <option
                  key={i}
                  value={`${i + 1} ${i === 0 ? "Person" : "Persons"}`}
                >
                  {i + 1} {i === 0 ? "Person" : "Persons"}
                </option>
              ))}
            </select>
          </div>
          <div className="type_tour">
            <div className="row-position">
              <input
                className="luxury-packages__input group"
                id="group-type"
                type="checkbox"
                name="group"
                checked={groupTour}
                onChange={handleTourTypeChange("group")}
              />
              <label className="luxury-packages__text" htmlFor="group-type">
                Group tours
              </label>
            </div>
            <div className="row-position">
              <input
                className="luxury-packages__input customise"
                id="customise-type"
                type="checkbox"
                name="customise"
                checked={customiseTour}
                onChange={handleTourTypeChange("customise")}
              />
              <label className="luxury-packages__text" htmlFor="customise-type">
                Customise tours
              </label>
            </div>
          </div>
        </form>
        <div className="luxury-packages__button-wrapper">
          <button className="luxury-packages__button" type="button">
            Find
          </button>
        </div>
      </div>
    </section>
  );
};

export default LuxuryPackages;
