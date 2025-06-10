import LuxuryPackagesLayout from '@/app/components/layouts/LuxuryPackagesLayout'

export const metadata = {
  title: 'Luxtrip | Luxury Packages',
}

const LuxuryPackagesRootLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <LuxuryPackagesLayout>
        {children}
    </LuxuryPackagesLayout>
  )
}

export default LuxuryPackagesRootLayout