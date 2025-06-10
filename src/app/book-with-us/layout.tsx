import BookWithUsLayout from '@/app/components/layouts/BookWithUsLayout'

export const metadata = {
  title: 'Luxtrip | Book with us',
}

const BookWithUsRootLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <BookWithUsLayout>
      {children}
    </BookWithUsLayout>
  )
}

export default BookWithUsRootLayout