"use client";
import PageTransition from "../components/general/PageTransition";
import "./book-with-us.scss";
import BookWithUsPage from "../components/templates/BookWithUsPage/BookWithUsPage";

const BookWithUs = () => {
  return <BookWithUsPage />
}

export default PageTransition(BookWithUs);