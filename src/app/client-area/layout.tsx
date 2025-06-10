import ClientArteaLayout from '@/app/components/layouts/ClientArteaLayout'

export const metadata = {
  title: 'Luxtrip | Client area',
}

const ClientArteaRootLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <ClientArteaLayout>
      {children}
    </ClientArteaLayout>
  )
}

export default ClientArteaRootLayout