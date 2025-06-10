import ContactLayout from '@/app/components/layouts/ContactLayout'

export const metadata = {
  title: 'Luxtrip | Contact',
}

const ContactRootLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <ContactLayout>
      {children}
    </ContactLayout>
  )
}

export default ContactRootLayout