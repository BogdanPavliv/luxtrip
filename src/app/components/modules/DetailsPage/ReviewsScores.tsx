import { Manrope } from "next/font/google";
import BlackBtn from "../../../components/ui/BlackBtn";
import { Input } from "../../../components/ui/Input";
import { Formik, Form } from "formik";
import { initialValues, schemas } from "../../../utils/helper";

const manrope300 = Manrope({
  subsets: ["latin"],
  weight: "300",
});

const manrope400 = Manrope({
  subsets: ["latin"],
  weight: "400",
});

const manrope500 = Manrope({
  subsets: ["latin"],
  weight: "500",
});

const ReviewsScores = () => {
  return (
    <section className="reviews-scores">
      <div className="container">
        <div id="reviews" className="section reviews-scores__inner">
          <h2>Reviews Scores and Score Breakdown</h2>
          <button>post comment</button>
          <div className="container-snakes-rhomb">
            <div className="snake snake-rhomb-1">
              <h6 className="title-absolute">35 reviews</h6>
              <svg
                width="17"
                height="31"
                viewBox="0 0 17 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.44526 0.512692C5.33381 6.1082 3.17972 9.95712 -0.000112715 15.7143L4.23966 23.3152L8.44526 30.916L12.685 23.3152L16.8906 15.7144L8.44526 0.512692Z"
                  fill="#79655E"
                ></path>
              </svg>
              <svg
                width="17"
                height="31"
                viewBox="0 0 17 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.44526 0.512692C5.33381 6.1082 3.17972 9.95712 -0.000112715 15.7143L4.23966 23.3152L8.44526 30.916L12.685 23.3152L16.8906 15.7144L8.44526 0.512692Z"
                  fill="#79655E"
                ></path>
              </svg>
              <svg
                width="17"
                height="31"
                viewBox="0 0 17 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.44526 0.512692C5.33381 6.1082 3.17972 9.95712 -0.000112715 15.7143L4.23966 23.3152L8.44526 30.916L12.685 23.3152L16.8906 15.7144L8.44526 0.512692Z"
                  fill="#79655E"
                ></path>
              </svg>
              <svg
                width="17"
                height="31"
                viewBox="0 0 17 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.44526 0.512692C5.33381 6.1082 3.17972 9.95712 -0.000112715 15.7143L4.23966 23.3152L8.44526 30.916L12.685 23.3152L16.8906 15.7144L8.44526 0.512692Z"
                  fill="#79655E"
                ></path>
              </svg>
              <svg
                width="17"
                height="31"
                viewBox="0 0 17 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.44526 0.512692C5.33381 6.1082 3.17972 9.95712 -0.000112715 15.7143L4.23966 23.3152L8.44526 30.916L12.685 23.3152L16.8906 15.7144L8.44526 0.512692Z"
                  fill="#79655E"
                ></path>
              </svg>
            </div>
            <div className="snake snake-rhomb-2">
              <h6>Comfort</h6>
              <svg
                width="17"
                height="31"
                viewBox="0 0 17 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.44526 0.512692C5.33381 6.1082 3.17972 9.95712 -0.000112715 15.7143L4.23966 23.3152L8.44526 30.916L12.685 23.3152L16.8906 15.7144L8.44526 0.512692Z"
                  fill="#79655E"
                ></path>
              </svg>
              <svg
                width="17"
                height="31"
                viewBox="0 0 17 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.44526 0.512692C5.33381 6.1082 3.17972 9.95712 -0.000112715 15.7143L4.23966 23.3152L8.44526 30.916L12.685 23.3152L16.8906 15.7144L8.44526 0.512692Z"
                  fill="#79655E"
                ></path>
              </svg>
              <svg
                width="17"
                height="31"
                viewBox="0 0 17 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.44526 0.512692C5.33381 6.1082 3.17972 9.95712 -0.000112715 15.7143L4.23966 23.3152L8.44526 30.916L12.685 23.3152L16.8906 15.7144L8.44526 0.512692Z"
                  fill="#79655E"
                ></path>
              </svg>
              <svg
                width="17"
                height="31"
                viewBox="0 0 17 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.44526 0.512692C5.33381 6.1082 3.17972 9.95712 -0.000112715 15.7143L4.23966 23.3152L8.44526 30.916L12.685 23.3152L16.8906 15.7144L8.44526 0.512692Z"
                  fill="#79655E"
                ></path>
              </svg>
              <svg
                width="17"
                height="31"
                viewBox="0 0 17 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.44526 0.512692C5.33381 6.1082 3.17972 9.95712 -0.000112715 15.7143L4.23966 23.3152L8.44526 30.916L12.685 23.3152L16.8906 15.7144L8.44526 0.512692Z"
                  fill="#79655E"
                ></path>
              </svg>
            </div>
            <div className="snake snake-rhomb-3">
              <h6>Hospitality</h6>
              <svg
                width="17"
                height="31"
                viewBox="0 0 17 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.44526 0.512692C5.33381 6.1082 3.17972 9.95712 -0.000112715 15.7143L4.23966 23.3152L8.44526 30.916L12.685 23.3152L16.8906 15.7144L8.44526 0.512692Z"
                  fill="#79655E"
                ></path>
              </svg>
              <svg
                width="17"
                height="31"
                viewBox="0 0 17 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.44526 0.512692C5.33381 6.1082 3.17972 9.95712 -0.000112715 15.7143L4.23966 23.3152L8.44526 30.916L12.685 23.3152L16.8906 15.7144L8.44526 0.512692Z"
                  fill="#79655E"
                ></path>
              </svg>
              <svg
                width="17"
                height="31"
                viewBox="0 0 17 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.44526 0.512692C5.33381 6.1082 3.17972 9.95712 -0.000112715 15.7143L4.23966 23.3152L8.44526 30.916L12.685 23.3152L16.8906 15.7144L8.44526 0.512692Z"
                  fill="#79655E"
                ></path>
              </svg>
              <svg
                width="17"
                height="31"
                viewBox="0 0 17 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.44526 0.512692C5.33381 6.1082 3.17972 9.95712 -0.000112715 15.7143L4.23966 23.3152L8.44526 30.916L12.685 23.3152L16.8906 15.7144L8.44526 0.512692Z"
                  fill="#79655E"
                ></path>
              </svg>
              <svg
                width="17"
                height="31"
                viewBox="0 0 17 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.74371 23.0716L4.74454 23.0731L8.51441 29.8865L12.3149 23.0731L12.3158 23.0716L16.3863 15.7148L8.5124 1.54181C7.77213 2.87255 7.08362 4.10897 6.41779 5.30466C4.53013 8.69451 2.82478 11.757 0.639135 15.7132L4.74371 23.0716Z"
                  stroke="#79655E"
                ></path>
              </svg>
            </div>
            <div className="snake snake-rhomb-4">
              <h6>Hygiene</h6>
              <svg
                width="17"
                height="31"
                viewBox="0 0 17 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.44526 0.512692C5.33381 6.1082 3.17972 9.95712 -0.000112715 15.7143L4.23966 23.3152L8.44526 30.916L12.685 23.3152L16.8906 15.7144L8.44526 0.512692Z"
                  fill="#79655E"
                ></path>
              </svg>
              <svg
                width="17"
                height="31"
                viewBox="0 0 17 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.44526 0.512692C5.33381 6.1082 3.17972 9.95712 -0.000112715 15.7143L4.23966 23.3152L8.44526 30.916L12.685 23.3152L16.8906 15.7144L8.44526 0.512692Z"
                  fill="#79655E"
                ></path>
              </svg>
              <svg
                width="17"
                height="31"
                viewBox="0 0 17 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.44526 0.512692C5.33381 6.1082 3.17972 9.95712 -0.000112715 15.7143L4.23966 23.3152L8.44526 30.916L12.685 23.3152L16.8906 15.7144L8.44526 0.512692Z"
                  fill="#79655E"
                ></path>
              </svg>
              <svg
                width="17"
                height="31"
                viewBox="0 0 17 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.44526 0.512692C5.33381 6.1082 3.17972 9.95712 -0.000112715 15.7143L4.23966 23.3152L8.44526 30.916L12.685 23.3152L16.8906 15.7144L8.44526 0.512692Z"
                  fill="#79655E"
                ></path>
              </svg>
              <svg
                width="17"
                height="31"
                viewBox="0 0 17 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.74371 23.0716L4.74454 23.0731L8.51441 29.8865L12.3149 23.0731L12.3158 23.0716L16.3863 15.7148L8.5124 1.54181C7.77213 2.87255 7.08362 4.10897 6.41779 5.30466C4.53013 8.69451 2.82478 11.757 0.639135 15.7132L4.74371 23.0716Z"
                  stroke="#79655E"
                ></path>
              </svg>
            </div>
            <div className="snake snake-rhomb-5">
              <h6>Reception</h6>
              <svg
                width="17"
                height="31"
                viewBox="0 0 17 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.44526 0.512692C5.33381 6.1082 3.17972 9.95712 -0.000112715 15.7143L4.23966 23.3152L8.44526 30.916L12.685 23.3152L16.8906 15.7144L8.44526 0.512692Z"
                  fill="#79655E"
                ></path>
              </svg>
              <svg
                width="17"
                height="31"
                viewBox="0 0 17 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.44526 0.512692C5.33381 6.1082 3.17972 9.95712 -0.000112715 15.7143L4.23966 23.3152L8.44526 30.916L12.685 23.3152L16.8906 15.7144L8.44526 0.512692Z"
                  fill="#79655E"
                ></path>
              </svg>
              <svg
                width="17"
                height="31"
                viewBox="0 0 17 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.44526 0.512692C5.33381 6.1082 3.17972 9.95712 -0.000112715 15.7143L4.23966 23.3152L8.44526 30.916L12.685 23.3152L16.8906 15.7144L8.44526 0.512692Z"
                  fill="#79655E"
                ></path>
              </svg>
              <svg
                width="17"
                height="31"
                viewBox="0 0 17 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.44526 0.512692C5.33381 6.1082 3.17972 9.95712 -0.000112715 15.7143L4.23966 23.3152L8.44526 30.916L12.685 23.3152L16.8906 15.7144L8.44526 0.512692Z"
                  fill="#79655E"
                ></path>
              </svg>
              <svg
                width="17"
                height="31"
                viewBox="0 0 17 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.44526 0.512692C5.33381 6.1082 3.17972 9.95712 -0.000112715 15.7143L4.23966 23.3152L8.44526 30.916L12.685 23.3152L16.8906 15.7144L8.44526 0.512692Z"
                  fill="#79655E"
                ></path>
              </svg>
            </div>
          </div>
          <div className="card-review card-1">
            <div className="col col-1">
              <p className={`${manrope400.className} col-2`}>
                “Well organized trip, All arranged well by Arooz. Special thanks
                to Aijaz Bhai for the service and support given to us, all
                explained well and take us to all places as per our wish. It was
                a wonderful experience .... Thank you team”
              </p>
              <p className={`${manrope500.className} col-2`}>
                Eduard Hand
                <br />
                <span className={`${manrope300.className} col-2`}>
                  Oct 15, 2021 at 8:27 am
                </span>
              </p>
            </div>
            <div className="col-2">
              <div className="container-snakes-rhomb rhomb-small">
                <div className="snake snake-rhomb-1-small">
                  <h6>Comfort</h6>
                  <svg
                    width="11"
                    height="18"
                    viewBox="0 0 11 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.52364 0.481402C3.75429 3.66333 2.52935 5.85206 0.721112 9.12595L3.1321 13.4482L5.52364 17.7705L7.93463 13.4482L10.3262 9.12595L5.52364 0.481402Z"
                      fill="#79655E"
                    ></path>
                  </svg>
                  <svg
                    width="11"
                    height="18"
                    viewBox="0 0 11 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.52364 0.481402C3.75429 3.66333 2.52935 5.85206 0.721112 9.12595L3.1321 13.4482L5.52364 17.7705L7.93463 13.4482L10.3262 9.12595L5.52364 0.481402Z"
                      fill="#79655E"
                    ></path>
                  </svg>
                  <svg
                    width="11"
                    height="18"
                    viewBox="0 0 11 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.52364 0.481402C3.75429 3.66333 2.52935 5.85206 0.721112 9.12595L3.1321 13.4482L5.52364 17.7705L7.93463 13.4482L10.3262 9.12595L5.52364 0.481402Z"
                      fill="#79655E"
                    ></path>
                  </svg>
                  <svg
                    width="11"
                    height="18"
                    viewBox="0 0 11 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.52364 0.481402C3.75429 3.66333 2.52935 5.85206 0.721112 9.12595L3.1321 13.4482L5.52364 17.7705L7.93463 13.4482L10.3262 9.12595L5.52364 0.481402Z"
                      fill="#79655E"
                    ></path>
                  </svg>
                  <svg
                    width="11"
                    height="18"
                    viewBox="0 0 11 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.52364 0.481402C3.75429 3.66333 2.52935 5.85206 0.721112 9.12595L3.1321 13.4482L5.52364 17.7705L7.93463 13.4482L10.3262 9.12595L5.52364 0.481402Z"
                      fill="#79655E"
                    ></path>
                  </svg>
                </div>
                <div className="snake snake-rhomb-2-small">
                  <h6>Hospitality</h6>
                  <svg
                    width="11"
                    height="18"
                    viewBox="0 0 11 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.52364 0.481402C3.75429 3.66333 2.52935 5.85206 0.721112 9.12595L3.1321 13.4482L5.52364 17.7705L7.93463 13.4482L10.3262 9.12595L5.52364 0.481402Z"
                      fill="#79655E"
                    ></path>
                  </svg>
                  <svg
                    width="11"
                    height="18"
                    viewBox="0 0 11 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.52364 0.481402C3.75429 3.66333 2.52935 5.85206 0.721112 9.12595L3.1321 13.4482L5.52364 17.7705L7.93463 13.4482L10.3262 9.12595L5.52364 0.481402Z"
                      fill="#79655E"
                    ></path>
                  </svg>
                  <svg
                    width="11"
                    height="18"
                    viewBox="0 0 11 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.52364 0.481402C3.75429 3.66333 2.52935 5.85206 0.721112 9.12595L3.1321 13.4482L5.52364 17.7705L7.93463 13.4482L10.3262 9.12595L5.52364 0.481402Z"
                      fill="#79655E"
                    ></path>
                  </svg>
                  <svg
                    width="11"
                    height="18"
                    viewBox="0 0 11 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.52364 0.481402C3.75429 3.66333 2.52935 5.85206 0.721112 9.12595L3.1321 13.4482L5.52364 17.7705L7.93463 13.4482L10.3262 9.12595L5.52364 0.481402Z"
                      fill="#79655E"
                    ></path>
                  </svg>
                  <svg
                    width="11"
                    height="18"
                    viewBox="0 0 11 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.52364 0.481402C3.75429 3.66333 2.52935 5.85206 0.721112 9.12595L3.1321 13.4482L5.52364 17.7705L7.93463 13.4482L10.3262 9.12595L5.52364 0.481402Z"
                      fill="#79655E"
                    ></path>
                  </svg>
                </div>
                <div className="snake snake-rhomb-3-small">
                  <h6>Hygiene</h6>
                  <svg
                    width="11"
                    height="18"
                    viewBox="0 0 11 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.52364 0.481402C3.75429 3.66333 2.52935 5.85206 0.721112 9.12595L3.1321 13.4482L5.52364 17.7705L7.93463 13.4482L10.3262 9.12595L5.52364 0.481402Z"
                      fill="#79655E"
                    ></path>
                  </svg>
                  <svg
                    width="11"
                    height="18"
                    viewBox="0 0 11 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.52364 0.481402C3.75429 3.66333 2.52935 5.85206 0.721112 9.12595L3.1321 13.4482L5.52364 17.7705L7.93463 13.4482L10.3262 9.12595L5.52364 0.481402Z"
                      fill="#79655E"
                    ></path>
                  </svg>
                  <svg
                    width="11"
                    height="18"
                    viewBox="0 0 11 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.52364 0.481402C3.75429 3.66333 2.52935 5.85206 0.721112 9.12595L3.1321 13.4482L5.52364 17.7705L7.93463 13.4482L10.3262 9.12595L5.52364 0.481402Z"
                      fill="#79655E"
                    ></path>
                  </svg>
                  <svg
                    width="11"
                    height="18"
                    viewBox="0 0 11 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.52364 0.481402C3.75429 3.66333 2.52935 5.85206 0.721112 9.12595L3.1321 13.4482L5.52364 17.7705L7.93463 13.4482L10.3262 9.12595L5.52364 0.481402Z"
                      fill="#79655E"
                    ></path>
                  </svg>
                  <svg
                    width="11"
                    height="18"
                    viewBox="0 0 11 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.52364 0.481402C3.75429 3.66333 2.52935 5.85206 0.721112 9.12595L3.1321 13.4482L5.52364 17.7705L7.93463 13.4482L10.3262 9.12595L5.52364 0.481402Z"
                      fill="#79655E"
                    ></path>
                  </svg>
                </div>
                <div className="snake snake-rhomb-4-small">
                  <h6>Reception</h6>
                  <svg
                    width="11"
                    height="18"
                    viewBox="0 0 11 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.52364 0.481402C3.75429 3.66333 2.52935 5.85206 0.721112 9.12595L3.1321 13.4482L5.52364 17.7705L7.93463 13.4482L10.3262 9.12595L5.52364 0.481402Z"
                      fill="#79655E"
                    ></path>
                  </svg>
                  <svg
                    width="11"
                    height="18"
                    viewBox="0 0 11 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.52364 0.481402C3.75429 3.66333 2.52935 5.85206 0.721112 9.12595L3.1321 13.4482L5.52364 17.7705L7.93463 13.4482L10.3262 9.12595L5.52364 0.481402Z"
                      fill="#79655E"
                    ></path>
                  </svg>
                  <svg
                    width="11"
                    height="18"
                    viewBox="0 0 11 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.52364 0.481402C3.75429 3.66333 2.52935 5.85206 0.721112 9.12595L3.1321 13.4482L5.52364 17.7705L7.93463 13.4482L10.3262 9.12595L5.52364 0.481402Z"
                      fill="#79655E"
                    ></path>
                  </svg>
                  <svg
                    width="11"
                    height="18"
                    viewBox="0 0 11 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.52364 0.481402C3.75429 3.66333 2.52935 5.85206 0.721112 9.12595L3.1321 13.4482L5.52364 17.7705L7.93463 13.4482L10.3262 9.12595L5.52364 0.481402Z"
                      fill="#79655E"
                    ></path>
                  </svg>
                  <svg
                    width="11"
                    height="18"
                    viewBox="0 0 11 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.52364 0.481402C3.75429 3.66333 2.52935 5.85206 0.721112 9.12595L3.1321 13.4482L5.52364 17.7705L7.93463 13.4482L10.3262 9.12595L5.52364 0.481402Z"
                      fill="#79655E"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="card-review card-2">
            <div className="col col-1">
              <p className={`${manrope400.className} col-2`}>
                “Well organized trip, All arranged well by Arooz. Special thanks
                to Aijaz Bhai for the service and support given to us, all
                explained well and take us to .
              </p>
              <p className={`${manrope500.className} col-2`}>
                Brandon Mango
                <br />
                <span className={`${manrope300.className} col-2`}>
                  Oct 12, 2021 at 8:27 am
                </span>
              </p>
            </div>
            <div className="col-2">
              <div className="container-snakes-rhomb rhomb-small">
                <div className="snake snake-rhomb-1-small">
                  <h6>Comfort</h6>
                  <svg
                    width="11"
                    height="18"
                    viewBox="0 0 11 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.52364 0.481402C3.75429 3.66333 2.52935 5.85206 0.721112 9.12595L3.1321 13.4482L5.52364 17.7705L7.93463 13.4482L10.3262 9.12595L5.52364 0.481402Z"
                      fill="#79655E"
                    ></path>
                  </svg>
                  <svg
                    width="11"
                    height="18"
                    viewBox="0 0 11 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.52364 0.481402C3.75429 3.66333 2.52935 5.85206 0.721112 9.12595L3.1321 13.4482L5.52364 17.7705L7.93463 13.4482L10.3262 9.12595L5.52364 0.481402Z"
                      fill="#79655E"
                    ></path>
                  </svg>
                  <svg
                    width="11"
                    height="18"
                    viewBox="0 0 11 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.52364 0.481402C3.75429 3.66333 2.52935 5.85206 0.721112 9.12595L3.1321 13.4482L5.52364 17.7705L7.93463 13.4482L10.3262 9.12595L5.52364 0.481402Z"
                      fill="#79655E"
                    ></path>
                  </svg>
                  <svg
                    width="11"
                    height="18"
                    viewBox="0 0 11 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.52364 0.481402C3.75429 3.66333 2.52935 5.85206 0.721112 9.12595L3.1321 13.4482L5.52364 17.7705L7.93463 13.4482L10.3262 9.12595L5.52364 0.481402Z"
                      fill="#79655E"
                    ></path>
                  </svg>
                  <svg
                    width="11"
                    height="18"
                    viewBox="0 0 11 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.52364 0.481402C3.75429 3.66333 2.52935 5.85206 0.721112 9.12595L3.1321 13.4482L5.52364 17.7705L7.93463 13.4482L10.3262 9.12595L5.52364 0.481402Z"
                      fill="#79655E"
                    ></path>
                  </svg>
                </div>
                <div className="snake snake-rhomb-2-small">
                  <h6>Hospitality</h6>
                  <svg
                    width="11"
                    height="18"
                    viewBox="0 0 11 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.52364 0.481402C3.75429 3.66333 2.52935 5.85206 0.721112 9.12595L3.1321 13.4482L5.52364 17.7705L7.93463 13.4482L10.3262 9.12595L5.52364 0.481402Z"
                      fill="#79655E"
                    ></path>
                  </svg>
                  <svg
                    width="11"
                    height="18"
                    viewBox="0 0 11 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.52364 0.481402C3.75429 3.66333 2.52935 5.85206 0.721112 9.12595L3.1321 13.4482L5.52364 17.7705L7.93463 13.4482L10.3262 9.12595L5.52364 0.481402Z"
                      fill="#79655E"
                    ></path>
                  </svg>
                  <svg
                    width="11"
                    height="18"
                    viewBox="0 0 11 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.52364 0.481402C3.75429 3.66333 2.52935 5.85206 0.721112 9.12595L3.1321 13.4482L5.52364 17.7705L7.93463 13.4482L10.3262 9.12595L5.52364 0.481402Z"
                      fill="#79655E"
                    ></path>
                  </svg>
                  <svg
                    width="11"
                    height="18"
                    viewBox="0 0 11 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.52364 0.481402C3.75429 3.66333 2.52935 5.85206 0.721112 9.12595L3.1321 13.4482L5.52364 17.7705L7.93463 13.4482L10.3262 9.12595L5.52364 0.481402Z"
                      fill="#79655E"
                    ></path>
                  </svg>
                  <svg
                    width="11"
                    height="18"
                    viewBox="0 0 11 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.52364 0.481402C3.75429 3.66333 2.52935 5.85206 0.721112 9.12595L3.1321 13.4482L5.52364 17.7705L7.93463 13.4482L10.3262 9.12595L5.52364 0.481402Z"
                      fill="#79655E"
                    ></path>
                  </svg>
                </div>
                <div className="snake snake-rhomb-3-small">
                  <h6>Hygiene</h6>
                  <svg
                    width="11"
                    height="18"
                    viewBox="0 0 11 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.52364 0.481402C3.75429 3.66333 2.52935 5.85206 0.721112 9.12595L3.1321 13.4482L5.52364 17.7705L7.93463 13.4482L10.3262 9.12595L5.52364 0.481402Z"
                      fill="#79655E"
                    ></path>
                  </svg>
                  <svg
                    width="11"
                    height="18"
                    viewBox="0 0 11 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.52364 0.481402C3.75429 3.66333 2.52935 5.85206 0.721112 9.12595L3.1321 13.4482L5.52364 17.7705L7.93463 13.4482L10.3262 9.12595L5.52364 0.481402Z"
                      fill="#79655E"
                    ></path>
                  </svg>
                  <svg
                    width="11"
                    height="18"
                    viewBox="0 0 11 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.52364 0.481402C3.75429 3.66333 2.52935 5.85206 0.721112 9.12595L3.1321 13.4482L5.52364 17.7705L7.93463 13.4482L10.3262 9.12595L5.52364 0.481402Z"
                      fill="#79655E"
                    ></path>
                  </svg>
                  <svg
                    width="11"
                    height="18"
                    viewBox="0 0 11 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.52364 0.481402C3.75429 3.66333 2.52935 5.85206 0.721112 9.12595L3.1321 13.4482L5.52364 17.7705L7.93463 13.4482L10.3262 9.12595L5.52364 0.481402Z"
                      fill="#79655E"
                    ></path>
                  </svg>
                  <svg
                    width="11"
                    height="18"
                    viewBox="0 0 11 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.52364 0.481402C3.75429 3.66333 2.52935 5.85206 0.721112 9.12595L3.1321 13.4482L5.52364 17.7705L7.93463 13.4482L10.3262 9.12595L5.52364 0.481402Z"
                      fill="#79655E"
                    ></path>
                  </svg>
                </div>
                <div className="snake snake-rhomb-4-small">
                  <h6>Reception</h6>
                  <svg
                    width="11"
                    height="18"
                    viewBox="0 0 11 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.52364 0.481402C3.75429 3.66333 2.52935 5.85206 0.721112 9.12595L3.1321 13.4482L5.52364 17.7705L7.93463 13.4482L10.3262 9.12595L5.52364 0.481402Z"
                      fill="#79655E"
                    ></path>
                  </svg>
                  <svg
                    width="11"
                    height="18"
                    viewBox="0 0 11 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.52364 0.481402C3.75429 3.66333 2.52935 5.85206 0.721112 9.12595L3.1321 13.4482L5.52364 17.7705L7.93463 13.4482L10.3262 9.12595L5.52364 0.481402Z"
                      fill="#79655E"
                    ></path>
                  </svg>
                  <svg
                    width="11"
                    height="18"
                    viewBox="0 0 11 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.52364 0.481402C3.75429 3.66333 2.52935 5.85206 0.721112 9.12595L3.1321 13.4482L5.52364 17.7705L7.93463 13.4482L10.3262 9.12595L5.52364 0.481402Z"
                      fill="#79655E"
                    ></path>
                  </svg>
                  <svg
                    width="11"
                    height="18"
                    viewBox="0 0 11 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.52364 0.481402C3.75429 3.66333 2.52935 5.85206 0.721112 9.12595L3.1321 13.4482L5.52364 17.7705L7.93463 13.4482L10.3262 9.12595L5.52364 0.481402Z"
                      fill="#79655E"
                    ></path>
                  </svg>
                  <svg
                    width="11"
                    height="18"
                    viewBox="0 0 11 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.52364 0.481402C3.75429 3.66333 2.52935 5.85206 0.721112 9.12595L3.1321 13.4482L5.52364 17.7705L7.93463 13.4482L10.3262 9.12595L5.52364 0.481402Z"
                      fill="#79655E"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="card-review card-3">
            <div className="col col-1">
              <p className={`${manrope400.className} col-2`}>
                Aijaz Bhai for the service and support given to us, all
                explained well and take us to all places as per our wish. It was
                a wonderful experience .... Thank you team”
              </p>
              <p className={`${manrope500.className} col-2`}>
                Maren Westervelt
                <br />
                <span className={`${manrope300.className} col-2`}>
                  Oct 02, 2021 at 8:27 am
                </span>
              </p>
            </div>
            <div className="col-2">
              <div className="container-snakes-rhomb rhomb-small">
                <div className="snake snake-rhomb-1-small">
                  <h6>Comfort</h6>
                  <svg
                    width="11"
                    height="18"
                    viewBox="0 0 11 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.52364 0.481402C3.75429 3.66333 2.52935 5.85206 0.721112 9.12595L3.1321 13.4482L5.52364 17.7705L7.93463 13.4482L10.3262 9.12595L5.52364 0.481402Z"
                      fill="#79655E"
                    ></path>
                  </svg>
                  <svg
                    width="11"
                    height="18"
                    viewBox="0 0 11 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.52364 0.481402C3.75429 3.66333 2.52935 5.85206 0.721112 9.12595L3.1321 13.4482L5.52364 17.7705L7.93463 13.4482L10.3262 9.12595L5.52364 0.481402Z"
                      fill="#79655E"
                    ></path>
                  </svg>
                  <svg
                    width="11"
                    height="18"
                    viewBox="0 0 11 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.52364 0.481402C3.75429 3.66333 2.52935 5.85206 0.721112 9.12595L3.1321 13.4482L5.52364 17.7705L7.93463 13.4482L10.3262 9.12595L5.52364 0.481402Z"
                      fill="#79655E"
                    ></path>
                  </svg>
                  <svg
                    width="11"
                    height="18"
                    viewBox="0 0 11 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.52364 0.481402C3.75429 3.66333 2.52935 5.85206 0.721112 9.12595L3.1321 13.4482L5.52364 17.7705L7.93463 13.4482L10.3262 9.12595L5.52364 0.481402Z"
                      fill="#79655E"
                    ></path>
                  </svg>
                  <svg
                    width="11"
                    height="18"
                    viewBox="0 0 11 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.52364 0.481402C3.75429 3.66333 2.52935 5.85206 0.721112 9.12595L3.1321 13.4482L5.52364 17.7705L7.93463 13.4482L10.3262 9.12595L5.52364 0.481402Z"
                      fill="#79655E"
                    ></path>
                  </svg>
                </div>
                <div className="snake snake-rhomb-2-small">
                  <h6>Hospitality</h6>
                  <svg
                    width="11"
                    height="18"
                    viewBox="0 0 11 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.52364 0.481402C3.75429 3.66333 2.52935 5.85206 0.721112 9.12595L3.1321 13.4482L5.52364 17.7705L7.93463 13.4482L10.3262 9.12595L5.52364 0.481402Z"
                      fill="#79655E"
                    ></path>
                  </svg>
                  <svg
                    width="11"
                    height="18"
                    viewBox="0 0 11 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.52364 0.481402C3.75429 3.66333 2.52935 5.85206 0.721112 9.12595L3.1321 13.4482L5.52364 17.7705L7.93463 13.4482L10.3262 9.12595L5.52364 0.481402Z"
                      fill="#79655E"
                    ></path>
                  </svg>
                  <svg
                    width="11"
                    height="18"
                    viewBox="0 0 11 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.52364 0.481402C3.75429 3.66333 2.52935 5.85206 0.721112 9.12595L3.1321 13.4482L5.52364 17.7705L7.93463 13.4482L10.3262 9.12595L5.52364 0.481402Z"
                      fill="#79655E"
                    ></path>
                  </svg>
                  <svg
                    width="11"
                    height="18"
                    viewBox="0 0 11 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.52364 0.481402C3.75429 3.66333 2.52935 5.85206 0.721112 9.12595L3.1321 13.4482L5.52364 17.7705L7.93463 13.4482L10.3262 9.12595L5.52364 0.481402Z"
                      fill="#79655E"
                    ></path>
                  </svg>
                  <svg
                    width="11"
                    height="18"
                    viewBox="0 0 11 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.52364 0.481402C3.75429 3.66333 2.52935 5.85206 0.721112 9.12595L3.1321 13.4482L5.52364 17.7705L7.93463 13.4482L10.3262 9.12595L5.52364 0.481402Z"
                      fill="#79655E"
                    ></path>
                  </svg>
                </div>
                <div className="snake snake-rhomb-3-small">
                  <h6>Hygiene</h6>
                  <svg
                    width="11"
                    height="18"
                    viewBox="0 0 11 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.52364 0.481402C3.75429 3.66333 2.52935 5.85206 0.721112 9.12595L3.1321 13.4482L5.52364 17.7705L7.93463 13.4482L10.3262 9.12595L5.52364 0.481402Z"
                      fill="#79655E"
                    ></path>
                  </svg>
                  <svg
                    width="11"
                    height="18"
                    viewBox="0 0 11 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.52364 0.481402C3.75429 3.66333 2.52935 5.85206 0.721112 9.12595L3.1321 13.4482L5.52364 17.7705L7.93463 13.4482L10.3262 9.12595L5.52364 0.481402Z"
                      fill="#79655E"
                    ></path>
                  </svg>
                  <svg
                    width="11"
                    height="18"
                    viewBox="0 0 11 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.52364 0.481402C3.75429 3.66333 2.52935 5.85206 0.721112 9.12595L3.1321 13.4482L5.52364 17.7705L7.93463 13.4482L10.3262 9.12595L5.52364 0.481402Z"
                      fill="#79655E"
                    ></path>
                  </svg>
                  <svg
                    width="11"
                    height="18"
                    viewBox="0 0 11 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.52364 0.481402C3.75429 3.66333 2.52935 5.85206 0.721112 9.12595L3.1321 13.4482L5.52364 17.7705L7.93463 13.4482L10.3262 9.12595L5.52364 0.481402Z"
                      fill="#79655E"
                    ></path>
                  </svg>
                  <svg
                    width="11"
                    height="18"
                    viewBox="0 0 11 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.52364 0.481402C3.75429 3.66333 2.52935 5.85206 0.721112 9.12595L3.1321 13.4482L5.52364 17.7705L7.93463 13.4482L10.3262 9.12595L5.52364 0.481402Z"
                      fill="#79655E"
                    ></path>
                  </svg>
                </div>
                <div className="snake snake-rhomb-4-small">
                  <h6>Reception</h6>
                  <svg
                    width="11"
                    height="18"
                    viewBox="0 0 11 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.52364 0.481402C3.75429 3.66333 2.52935 5.85206 0.721112 9.12595L3.1321 13.4482L5.52364 17.7705L7.93463 13.4482L10.3262 9.12595L5.52364 0.481402Z"
                      fill="#79655E"
                    ></path>
                  </svg>
                  <svg
                    width="11"
                    height="18"
                    viewBox="0 0 11 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.52364 0.481402C3.75429 3.66333 2.52935 5.85206 0.721112 9.12595L3.1321 13.4482L5.52364 17.7705L7.93463 13.4482L10.3262 9.12595L5.52364 0.481402Z"
                      fill="#79655E"
                    ></path>
                  </svg>
                  <svg
                    width="11"
                    height="18"
                    viewBox="0 0 11 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.52364 0.481402C3.75429 3.66333 2.52935 5.85206 0.721112 9.12595L3.1321 13.4482L5.52364 17.7705L7.93463 13.4482L10.3262 9.12595L5.52364 0.481402Z"
                      fill="#79655E"
                    ></path>
                  </svg>
                  <svg
                    width="11"
                    height="18"
                    viewBox="0 0 11 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.52364 0.481402C3.75429 3.66333 2.52935 5.85206 0.721112 9.12595L3.1321 13.4482L5.52364 17.7705L7.93463 13.4482L10.3262 9.12595L5.52364 0.481402Z"
                      fill="#79655E"
                    ></path>
                  </svg>
                  <svg
                    width="11"
                    height="18"
                    viewBox="0 0 11 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.52364 0.481402C3.75429 3.66333 2.52935 5.85206 0.721112 9.12595L3.1321 13.4482L5.52364 17.7705L7.93463 13.4482L10.3262 9.12595L5.52364 0.481402Z"
                      fill="#79655E"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <h3>Post a Comment</h3>
          <div className="container-form">
            <div className="container-form__left">
              <Formik
                initialValues={initialValues}
                validationSchema={schemas.custom}
                onSubmit={() => console.log("Success")}
              >
                <Form action="#" className="comment-form">
                  <Input name="name" id="name" placeholder="Name" />
                  <Input name="email" id="email" placeholder="Email" />
                  <div className="customise-page__column direction-column margin-change">
                    <textarea
                      id="textarea"
                      className="customise-page__text-area"
                      placeholder="Comment"
                    ></textarea>
                  </div>
                  <div className="container-button">
                    <BlackBtn>post comment</BlackBtn>
                  </div>
                </Form>
              </Formik>
            </div>
            <div className="container-form__right">
              <div className="container-snakes-empty-rhomb">
                <div className="snake snake-rhomb-1-mid-small">
                  <h6>Comfort</h6>
                  <svg
                    width="15"
                    height="25"
                    viewBox="0 0 15 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.59014 18.313L4.5908 18.3142L7.58854 23.7321L10.6106 18.3142L10.6113 18.3131L13.8481 12.4631L7.58694 1.19293C6.99834 2.25101 6.4509 3.2341 5.92149 4.18481C4.42039 6.88046 3.0643 9.31573 1.32625 12.4617L4.59014 18.313Z"
                      stroke="#79655E"
                      strokeWidth="0.795182"
                    ></path>
                  </svg>
                  <svg
                    width="15"
                    height="25"
                    viewBox="0 0 15 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.59014 18.313L4.5908 18.3142L7.58854 23.7321L10.6106 18.3142L10.6113 18.3131L13.8481 12.4631L7.58694 1.19293C6.99834 2.25101 6.4509 3.2341 5.92149 4.18481C4.42039 6.88046 3.0643 9.31573 1.32625 12.4617L4.59014 18.313Z"
                      stroke="#79655E"
                      strokeWidth="0.795182"
                    ></path>
                  </svg>
                  <svg
                    width="15"
                    height="25"
                    viewBox="0 0 15 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.59014 18.313L4.5908 18.3142L7.58854 23.7321L10.6106 18.3142L10.6113 18.3131L13.8481 12.4631L7.58694 1.19293C6.99834 2.25101 6.4509 3.2341 5.92149 4.18481C4.42039 6.88046 3.0643 9.31573 1.32625 12.4617L4.59014 18.313Z"
                      stroke="#79655E"
                      strokeWidth="0.795182"
                    ></path>
                  </svg>
                  <svg
                    width="15"
                    height="25"
                    viewBox="0 0 15 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.59014 18.313L4.5908 18.3142L7.58854 23.7321L10.6106 18.3142L10.6113 18.3131L13.8481 12.4631L7.58694 1.19293C6.99834 2.25101 6.4509 3.2341 5.92149 4.18481C4.42039 6.88046 3.0643 9.31573 1.32625 12.4617L4.59014 18.313Z"
                      stroke="#79655E"
                      strokeWidth="0.795182"
                    ></path>
                  </svg>
                  <svg
                    width="15"
                    height="25"
                    viewBox="0 0 15 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.59014 18.313L4.5908 18.3142L7.58854 23.7321L10.6106 18.3142L10.6113 18.3131L13.8481 12.4631L7.58694 1.19293C6.99834 2.25101 6.4509 3.2341 5.92149 4.18481C4.42039 6.88046 3.0643 9.31573 1.32625 12.4617L4.59014 18.313Z"
                      stroke="#79655E"
                      strokeWidth="0.795182"
                    ></path>
                  </svg>
                </div>
                <div className="snake snake-rhomb-2-mid-small">
                  <h6>Hospitality</h6>
                  <svg
                    width="15"
                    height="25"
                    viewBox="0 0 15 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.59014 18.313L4.5908 18.3142L7.58854 23.7321L10.6106 18.3142L10.6113 18.3131L13.8481 12.4631L7.58694 1.19293C6.99834 2.25101 6.4509 3.2341 5.92149 4.18481C4.42039 6.88046 3.0643 9.31573 1.32625 12.4617L4.59014 18.313Z"
                      stroke="#79655E"
                      strokeWidth="0.795182"
                    ></path>
                  </svg>
                  <svg
                    width="15"
                    height="25"
                    viewBox="0 0 15 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.59014 18.313L4.5908 18.3142L7.58854 23.7321L10.6106 18.3142L10.6113 18.3131L13.8481 12.4631L7.58694 1.19293C6.99834 2.25101 6.4509 3.2341 5.92149 4.18481C4.42039 6.88046 3.0643 9.31573 1.32625 12.4617L4.59014 18.313Z"
                      stroke="#79655E"
                      strokeWidth="0.795182"
                    ></path>
                  </svg>
                  <svg
                    width="15"
                    height="25"
                    viewBox="0 0 15 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.59014 18.313L4.5908 18.3142L7.58854 23.7321L10.6106 18.3142L10.6113 18.3131L13.8481 12.4631L7.58694 1.19293C6.99834 2.25101 6.4509 3.2341 5.92149 4.18481C4.42039 6.88046 3.0643 9.31573 1.32625 12.4617L4.59014 18.313Z"
                      stroke="#79655E"
                      strokeWidth="0.795182"
                    ></path>
                  </svg>
                  <svg
                    width="15"
                    height="25"
                    viewBox="0 0 15 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.59014 18.313L4.5908 18.3142L7.58854 23.7321L10.6106 18.3142L10.6113 18.3131L13.8481 12.4631L7.58694 1.19293C6.99834 2.25101 6.4509 3.2341 5.92149 4.18481C4.42039 6.88046 3.0643 9.31573 1.32625 12.4617L4.59014 18.313Z"
                      stroke="#79655E"
                      strokeWidth="0.795182"
                    ></path>
                  </svg>
                  <svg
                    width="15"
                    height="25"
                    viewBox="0 0 15 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.59014 18.313L4.5908 18.3142L7.58854 23.7321L10.6106 18.3142L10.6113 18.3131L13.8481 12.4631L7.58694 1.19293C6.99834 2.25101 6.4509 3.2341 5.92149 4.18481C4.42039 6.88046 3.0643 9.31573 1.32625 12.4617L4.59014 18.313Z"
                      stroke="#79655E"
                      strokeWidth="0.795182"
                    ></path>
                  </svg>
                </div>
                <div className="snake snake-rhomb-3-mid-small">
                  <h6>Hygiene</h6>
                  <svg
                    width="15"
                    height="25"
                    viewBox="0 0 15 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.59014 18.313L4.5908 18.3142L7.58854 23.7321L10.6106 18.3142L10.6113 18.3131L13.8481 12.4631L7.58694 1.19293C6.99834 2.25101 6.4509 3.2341 5.92149 4.18481C4.42039 6.88046 3.0643 9.31573 1.32625 12.4617L4.59014 18.313Z"
                      stroke="#79655E"
                      strokeWidth="0.795182"
                    ></path>
                  </svg>
                  <svg
                    width="15"
                    height="25"
                    viewBox="0 0 15 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.59014 18.313L4.5908 18.3142L7.58854 23.7321L10.6106 18.3142L10.6113 18.3131L13.8481 12.4631L7.58694 1.19293C6.99834 2.25101 6.4509 3.2341 5.92149 4.18481C4.42039 6.88046 3.0643 9.31573 1.32625 12.4617L4.59014 18.313Z"
                      stroke="#79655E"
                      strokeWidth="0.795182"
                    ></path>
                  </svg>
                  <svg
                    width="15"
                    height="25"
                    viewBox="0 0 15 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.59014 18.313L4.5908 18.3142L7.58854 23.7321L10.6106 18.3142L10.6113 18.3131L13.8481 12.4631L7.58694 1.19293C6.99834 2.25101 6.4509 3.2341 5.92149 4.18481C4.42039 6.88046 3.0643 9.31573 1.32625 12.4617L4.59014 18.313Z"
                      stroke="#79655E"
                      strokeWidth="0.795182"
                    ></path>
                  </svg>
                  <svg
                    width="15"
                    height="25"
                    viewBox="0 0 15 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.59014 18.313L4.5908 18.3142L7.58854 23.7321L10.6106 18.3142L10.6113 18.3131L13.8481 12.4631L7.58694 1.19293C6.99834 2.25101 6.4509 3.2341 5.92149 4.18481C4.42039 6.88046 3.0643 9.31573 1.32625 12.4617L4.59014 18.313Z"
                      stroke="#79655E"
                      strokeWidth="0.795182"
                    ></path>
                  </svg>
                  <svg
                    width="15"
                    height="25"
                    viewBox="0 0 15 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.59014 18.313L4.5908 18.3142L7.58854 23.7321L10.6106 18.3142L10.6113 18.3131L13.8481 12.4631L7.58694 1.19293C6.99834 2.25101 6.4509 3.2341 5.92149 4.18481C4.42039 6.88046 3.0643 9.31573 1.32625 12.4617L4.59014 18.313Z"
                      stroke="#79655E"
                      strokeWidth="0.795182"
                    ></path>
                  </svg>
                </div>
                <div className="snake snake-rhomb-4-mid-small">
                  <h6>Reception</h6>
                  <svg
                    width="15"
                    height="25"
                    viewBox="0 0 15 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.59014 18.313L4.5908 18.3142L7.58854 23.7321L10.6106 18.3142L10.6113 18.3131L13.8481 12.4631L7.58694 1.19293C6.99834 2.25101 6.4509 3.2341 5.92149 4.18481C4.42039 6.88046 3.0643 9.31573 1.32625 12.4617L4.59014 18.313Z"
                      stroke="#79655E"
                      strokeWidth="0.795182"
                    ></path>
                  </svg>
                  <svg
                    width="15"
                    height="25"
                    viewBox="0 0 15 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.59014 18.313L4.5908 18.3142L7.58854 23.7321L10.6106 18.3142L10.6113 18.3131L13.8481 12.4631L7.58694 1.19293C6.99834 2.25101 6.4509 3.2341 5.92149 4.18481C4.42039 6.88046 3.0643 9.31573 1.32625 12.4617L4.59014 18.313Z"
                      stroke="#79655E"
                      strokeWidth="0.795182"
                    ></path>
                  </svg>
                  <svg
                    width="15"
                    height="25"
                    viewBox="0 0 15 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.59014 18.313L4.5908 18.3142L7.58854 23.7321L10.6106 18.3142L10.6113 18.3131L13.8481 12.4631L7.58694 1.19293C6.99834 2.25101 6.4509 3.2341 5.92149 4.18481C4.42039 6.88046 3.0643 9.31573 1.32625 12.4617L4.59014 18.313Z"
                      stroke="#79655E"
                      strokeWidth="0.795182"
                    ></path>
                  </svg>
                  <svg
                    width="15"
                    height="25"
                    viewBox="0 0 15 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.59014 18.313L4.5908 18.3142L7.58854 23.7321L10.6106 18.3142L10.6113 18.3131L13.8481 12.4631L7.58694 1.19293C6.99834 2.25101 6.4509 3.2341 5.92149 4.18481C4.42039 6.88046 3.0643 9.31573 1.32625 12.4617L4.59014 18.313Z"
                      stroke="#79655E"
                      strokeWidth="0.795182"
                    ></path>
                  </svg>
                  <svg
                    width="15"
                    height="25"
                    viewBox="0 0 15 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.59014 18.313L4.5908 18.3142L7.58854 23.7321L10.6106 18.3142L10.6113 18.3131L13.8481 12.4631L7.58694 1.19293C6.99834 2.25101 6.4509 3.2341 5.92149 4.18481C4.42039 6.88046 3.0643 9.31573 1.32625 12.4617L4.59014 18.313Z"
                      stroke="#79655E"
                      strokeWidth="0.795182"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsScores;
