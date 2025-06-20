"use client";
import Link from "next/link";
import { Manrope } from "next/font/google";
import { dataBook } from "../../../utils/data";
import BlackBtn from "../../../components/ui/BlackBtn";

const manrope400 = Manrope({
  subsets: ["latin"],
  weight: "400",
});

const BookWithUs = () => {
  return (
    <section className="book-with-us">
      <div className="container">
        <h1 className="book-with-us__title">Book with us</h1>
        <ul className="book-with-us__list">
          {dataBook.map((item) => (
            <li key={item.id} className="book-with-us__item">
              <Link
                className="book-with-us__link"
                href={`/book-form/${item.id}`}
                aria-label="Leads on Make A Request"
              >
                <article className="card">
                  <div
                    className="card__img"
                    style={{ backgroundImage: `url('${item.image}')` }}
                  >
                    <h2 className="card__title">{item.title}</h2>
                  </div>
                  <div className="card__content">
                    <p className={`${manrope400.className} card__descr`}>
                      {item.text}
                    </p>
                    <BlackBtn>Make A Request</BlackBtn>
                  </div>
                </article>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default BookWithUs;
