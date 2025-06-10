"use client";
import LuxtripsPreview from "../../../components/modules/WhyLuxTripsPage/LuxtripsPreview";
import Experience from "../../../components/modules/WhyLuxTripsPage/Experience";
import Offers from "../../../components/modules/WhyLuxTripsPage/Offers";
import LuxtripsBook from "../../../components/modules/WhyLuxTripsPage/LuxtripsBook";
import Mission from "../../../components/modules/WhyLuxTripsPage/Mission";
import SubscribeForm from "../../../components/ui/SubscribeForm";

const WhyLuxTripsPage = () => {
  return (
    <>
      <LuxtripsPreview />
      <Experience />
      <Offers />
      <LuxtripsBook />
      <Mission />
      <div className="newsletter-wrapper">
        <SubscribeForm />
      </div>
    </>
  )
}

export default WhyLuxTripsPage