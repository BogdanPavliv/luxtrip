import  WhyLuxTripsLayout from '@/app/components/layouts/WhyLuxTripsLayout'

export const metadata = {
  title: 'Luxtrip | Why Lux Trips',
}

const WhyLuxTripsRootLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <WhyLuxTripsLayout>
      {children}
    </WhyLuxTripsLayout>
  )
}

export default WhyLuxTripsRootLayout