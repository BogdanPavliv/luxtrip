'use client'

const LuxuryPackagesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="main luxury-packages-page luxury-packages-page-bg">
      <div className="luxury-packages-page__wrapper">
        {children}
      </div>
    </main>
  )
}

export default LuxuryPackagesLayout