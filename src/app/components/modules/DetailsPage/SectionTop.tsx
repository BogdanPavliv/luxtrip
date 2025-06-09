import React from "react";
import WhiteBtn from "../../../components/ui/WhiteBtn";
import Link from "next/link";
import { dataTrips } from "../../../utils/data";

const SectionTop = ({ params }: { params: Promise<{ id: string }> }) => {
  // Розкриваємо params за допомогою React API
  const { id } = React.use(params);

  // Конвертуємо ID в число
  const detailsId = parseInt(id, 10);

  // Знаходимо відповідний запис
  const details = dataTrips.find((item) => item.id === detailsId);

  if (!details) return <p>Details not found</p>;
  return (
    <section className="section-top">
      <div className="container">
        <h1 className="section-top-title">Romantic Winter Destinations</h1>
        <div
          className="section-top__bg"
          style={{ backgroundImage: `url('${details.imageWide}')` }}
        >
          <div className="section-top__snake-rhombs">
            <h6>5.0</h6>
            <svg
              width="10"
              height="19"
              viewBox="0 0 10 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_b_9560_751)">
                <path
                  d="M5 0.651856C3.1579 3.96462 1.88259 6.24334 -1.07324e-07 9.65185L2.51012 14.1519L5 18.6519L7.51012 14.1519L10 9.65185L5 0.651856Z"
                  fill="white"
                ></path>
              </g>
              <defs>
                <filter
                  id="filter0_b_9560_751"
                  x="-10"
                  y="-9.34814"
                  width="30"
                  height="38"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood
                    floodOpacity="0"
                    result="BackgroundImageFix"
                  ></feFlood>
                  <feGaussianBlur
                    in="BackgroundImageFix"
                    stdDeviation="5"
                  ></feGaussianBlur>
                  <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_9560_751"
                  ></feComposite>
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_backgroundBlur_9560_751"
                    result="shape"
                  ></feBlend>
                </filter>
              </defs>
            </svg>
            <svg
              width="10"
              height="19"
              viewBox="0 0 10 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_b_9560_751)">
                <path
                  d="M5 0.651856C3.1579 3.96462 1.88259 6.24334 -1.07324e-07 9.65185L2.51012 14.1519L5 18.6519L7.51012 14.1519L10 9.65185L5 0.651856Z"
                  fill="white"
                ></path>
              </g>
              <defs>
                <filter
                  id="filter0_b_9560_751"
                  x="-10"
                  y="-9.34814"
                  width="30"
                  height="38"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood
                    floodOpacity="0"
                    result="BackgroundImageFix"
                  ></feFlood>
                  <feGaussianBlur
                    in="BackgroundImageFix"
                    stdDeviation="5"
                  ></feGaussianBlur>
                  <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_9560_751"
                  ></feComposite>
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_backgroundBlur_9560_751"
                    result="shape"
                  ></feBlend>
                </filter>
              </defs>
            </svg>
            <svg
              width="10"
              height="19"
              viewBox="0 0 10 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_b_9560_751)">
                <path
                  d="M5 0.651856C3.1579 3.96462 1.88259 6.24334 -1.07324e-07 9.65185L2.51012 14.1519L5 18.6519L7.51012 14.1519L10 9.65185L5 0.651856Z"
                  fill="white"
                ></path>
              </g>
              <defs>
                <filter
                  id="filter0_b_9560_751"
                  x="-10"
                  y="-9.34814"
                  width="30"
                  height="38"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood
                    floodOpacity="0"
                    result="BackgroundImageFix"
                  ></feFlood>
                  <feGaussianBlur
                    in="BackgroundImageFix"
                    stdDeviation="5"
                  ></feGaussianBlur>
                  <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_9560_751"
                  ></feComposite>
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_backgroundBlur_9560_751"
                    result="shape"
                  ></feBlend>
                </filter>
              </defs>
            </svg>
            <svg
              width="10"
              height="19"
              viewBox="0 0 10 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_b_9560_751)">
                <path
                  d="M5 0.651856C3.1579 3.96462 1.88259 6.24334 -1.07324e-07 9.65185L2.51012 14.1519L5 18.6519L7.51012 14.1519L10 9.65185L5 0.651856Z"
                  fill="white"
                ></path>
              </g>
              <defs>
                <filter
                  id="filter0_b_9560_751"
                  x="-10"
                  y="-9.34814"
                  width="30"
                  height="38"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood
                    floodOpacity="0"
                    result="BackgroundImageFix"
                  ></feFlood>
                  <feGaussianBlur
                    in="BackgroundImageFix"
                    stdDeviation="5"
                  ></feGaussianBlur>
                  <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_9560_751"
                  ></feComposite>
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_backgroundBlur_9560_751"
                    result="shape"
                  ></feBlend>
                </filter>
              </defs>
            </svg>
            <svg
              width="10"
              height="19"
              viewBox="0 0 10 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_b_9560_751)">
                <path
                  d="M5 0.651856C3.1579 3.96462 1.88259 6.24334 -1.07324e-07 9.65185L2.51012 14.1519L5 18.6519L7.51012 14.1519L10 9.65185L5 0.651856Z"
                  fill="white"
                ></path>
              </g>
              <defs>
                <filter
                  id="filter0_b_9560_751"
                  x="-10"
                  y="-9.34814"
                  width="30"
                  height="38"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood
                    floodOpacity="0"
                    result="BackgroundImageFix"
                  ></feFlood>
                  <feGaussianBlur
                    in="BackgroundImageFix"
                    stdDeviation="5"
                  ></feGaussianBlur>
                  <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_9560_751"
                  ></feComposite>
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_backgroundBlur_9560_751"
                    result="shape"
                  ></feBlend>
                </filter>
              </defs>
            </svg>
          </div>
          <div className="section-top__name-location">
            &nbsp;{details.place}
          </div>
          <h2>{details.text}</h2>
          <p>
            from
            <br />
            <span>€ {details.price}</span>
          </p>
          <Link href={`/customise/${details.id}`}>customise</Link>
          <div className="container-button">
            <WhiteBtn>book now</WhiteBtn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTop;
