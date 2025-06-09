"use client";
import React, { useEffect, useState } from "react";

const Extraordinary = () => {
  // Parallax Animation

  const [activeStep, setActiveStep] = useState(1);

  useEffect(() => {
    const timer = () => setTimeout(setStep, 40000);

    const setStep = () => {
      switch (activeStep) {
        case 1:
          document
            .querySelector(".extraordinary__parallax-thailand")
            ?.classList.remove("opacity");
          document
            .querySelector(".extraordinary__parallax-lakes")
            ?.classList.remove("opacity");
          document
            .querySelector(".extraordinary__parallax-mountain")
            ?.classList.remove("opacity");
          document
            .querySelector(".extraordinary__parallax-lakes")
            ?.classList.add("opacity");
          setActiveStep(2);
          break;
        case 2:
          document
            .querySelector(".extraordinary__parallax-thailand")
            ?.classList.remove("opacity");
          document
            .querySelector(".extraordinary__parallax-lakes")
            ?.classList.remove("opacity");
          document
            .querySelector(".extraordinary__parallax-mountain")
            ?.classList.remove("opacity");
          document
            .querySelector(".extraordinary__parallax-thailand")
            ?.classList.add("opacity");
          document
            .querySelector(".extraordinary__parallax-lakes")
            ?.classList.add("opacity");
          document
            .querySelector(".extraordinary__parallax-mountain")
            ?.classList.add("opacity");
          setActiveStep(3);
          break;
        case 3:
          document
            .querySelector(".extraordinary__parallax-thailand")
            ?.classList.remove("opacity");
          document
            .querySelector(".extraordinary__parallax-lakes")
            ?.classList.remove("opacity");
          document
            .querySelector(".extraordinary__parallax-mountain")
            ?.classList.remove("opacity");
          setActiveStep(1);
          break;
      }
    };

    const interval = timer();

    return () => clearTimeout(interval);
  }, [activeStep]);
  
  return (
    <section className="extraordinary">
      <div className="extraordinary__body">
        <div className="extraordinary__content container">
          <h1 className="extraordinary__content-title title_h1">
            <span className="extraordinary__content-sup-title title_h4">
              the world’s most
            </span>
            extra ordinary
          </h1>
          <h1 className="extraordinary__content-sub-title title_h2">Places</h1>
        </div>
        <div className="extraordinary__parallax">
          <div className="extraordinary__parallax-romb extraordinary__parallax-romb_01"></div>
          <div className="extraordinary__parallax-romb extraordinary__parallax-romb_02"></div>
          <div className="extraordinary__parallax-romb extraordinary__parallax-romb_03"></div>
          <div className="extraordinary__parallax-main"></div>
          <div className="extraordinary__parallax-thailand"></div>
          <div className="extraordinary__parallax-lakes"></div>
          <div className="extraordinary__parallax-mountain"></div>
          <div className="extraordinary__parallax-cloud1"></div>
          <div className="extraordinary__parallax-cloud2"></div>
        </div>
      </div>
    </section>
  );
};

export default Extraordinary;
