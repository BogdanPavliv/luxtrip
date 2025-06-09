"use client";
import PageTransition from "../components/general/PageTransition";
import "./luxury-packages.scss";
import LuxuryPackagesPage from "../components/templates/LuxuryPackagesPage/LuxuryPackagesPage";

const LuxuryPackages = () => {
  return <LuxuryPackagesPage />
};

export default PageTransition(LuxuryPackages);
