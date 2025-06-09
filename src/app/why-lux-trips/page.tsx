"use client";

import React from "react";
import PageTransition from "../components/general/PageTransition";
import "./why-lux-trips.scss";
import WhyLuxTripsPage from "../components/templates/WhyLuxTripsPage/WhyLuxTripsPage";

const WhyLuxTrips = () => {
  return <WhyLuxTripsPage />
};

export default PageTransition(WhyLuxTrips);
