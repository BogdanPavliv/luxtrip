"use client"
import SectionTop from '../../../components/modules/DetailsPage/SectionTop'
import SectionNavigation from '../../../components/modules/DetailsPage/SectionNavigation'
import Information from '../../../components/modules/DetailsPage/Information'
import LuxuryTourPlan from '../../../components/modules/DetailsPage/LuxuryTourPlan'
import Location from '../../../components/modules/DetailsPage/Location'
import TravelTips from '../../../components/modules/DetailsPage/TravelTips'
import Gallery from '../../../components/modules/DetailsPage/Gallery'
import ReviewsScores from '../../../components/modules/DetailsPage/ReviewsScores'
import CancellationPolicy from '../../../components/modules/DetailsPage/CancellationPolicy'
import SubscribeForm from "../../../components/ui/SubscribeForm";

const DetailsPage = ({ params }: { params: Promise<{ id: string }> }) => {
  return (
    <main className='main details-bg'> 
        <SectionTop params={params}/>
        <SectionNavigation />
        <Information params={params}/>
        <SectionNavigation />
        <LuxuryTourPlan />
        <SectionNavigation />
        <Location />
        <SectionNavigation />
        <TravelTips />
        <SectionNavigation />
        <Gallery params={params}/>
        <SectionNavigation />
        <ReviewsScores />
        <SectionNavigation />
        <CancellationPolicy />
        <SubscribeForm />
    </main>
  )
}

export default DetailsPage