import React from "react";
import Image from "next/image";
import { Manrope } from "next/font/google";
import WhiteBtn from "../../../components/ui/WhiteBtn";
import { dataTrips } from "../../../utils/data";

const manrope400 = Manrope({
  subsets: ["latin"],
  weight: "400",
});

const manrope600 = Manrope({
  subsets: ["latin"],
  weight: "600",
});

const Information = ({ params }: { params: Promise<{ id: string }> }) => {
  // Розкриваємо params за допомогою React API
  const { id } = React.use(params);

  // Конвертуємо ID в число
  const detailsId = parseInt(id, 10);

  // Знаходимо відповідний запис
  const details = dataTrips.find((item) => item.id === detailsId);

  if (!details) return <p>Details not found</p>;
  return (
    <section className="information">
      <div className="container">
        <div className="information__inner">
          <div className="col-1">
            <div className="main-slider__slider-item slider-item">
              <div className="trip-card" id="trip01">
                <Image
                  width={350}
                  height={570}
                  src={details.image}
                  alt="card"
                />
                <div className="trip-card__info">
                  <WhiteBtn>book now</WhiteBtn>
                </div>
              </div>
            </div>
          </div>
          <div className="col-2">
            <div className="col-1">
              <h2>{details.text}</h2>
              <div className="info">
                <div className={`${manrope600.className} col-1`}>
                  <ul>
                    <li>duration</li>
                    <li>travel style</li>
                    <li>max group size</li>
                    <li>activity level</li>
                    <li>season</li>
                  </ul>
                </div>
                <div className={`${manrope400.className} col-2`}>
                  <ul>
                    <li>8 days / 7 nights</li>
                    <li>guided small groups</li>
                    <li>16</li>
                    <li>level 1/4 &#40;easy&#41; </li>
                    <li>sep - mar</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={`${manrope400.className} col-2 list`}>
              <h6>tour highlights</h6>
              <ul>
                <li>Watch the northern lights dance and flicker in the sky</li>
                <li>
                  Visit the massive floating icebergs at the glacier lagoon
                </li>
                <li>
                  Marvel at the moon-like landscapes of the Lake Mývatn area
                </li>
                <li>
                  Walk the quaint streets of Akureyri, the unofficial capital of
                  north Iceland
                </li>
                <li>
                  Photograph the jagged basalt columns & sweeping black sand
                  beaches
                </li>
                <li>Tour the famous Golden Circle attractions</li>
                <li>
                  Roam beautiful Borgarfjörður, a scenic slice of West Iceland
                </li>
                <li>
                  Enjoy the cascading waterfalls of Seljalandsfoss & Skógafoss
                </li>
                <li>
                  Stay at Magma Hotel, one of the 10 best-rated hotels in
                  Iceland
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Information;
