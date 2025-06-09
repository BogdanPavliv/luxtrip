"use client";
import LuxuryPackages from "../../../components/modules/LuxuryPackagesPage/LuxuryPackages";
import DirectionsProducts from "../../../components/modules/LuxuryPackagesPage/DirectionsProducts";
import SubscribeForm from "../../../components/ui/SubscribeForm";

const LuxuryPackagesPage = () => {
  return (
    <main className="main luxury-packages-page luxury-packages-page-bg">
      <div className="luxury-packages-page__wrapper">
        <LuxuryPackages />
        <DirectionsProducts />
        <SubscribeForm />
      </div>
    </main>
  )
}

export default LuxuryPackagesPage;