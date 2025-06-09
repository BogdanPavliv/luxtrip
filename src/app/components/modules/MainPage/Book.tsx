"use client";
import Image from "next/image";
import Link from "next/link";
import { dataBook } from "../../../utils/data";

const Book = () => {
  return (
    <section className="book">
      <div className="book__container container">
        <h2 className="book__title title_h3">Book With Us</h2>
        <div className="book__block">
          {dataBook.map((item) => (
            <Link
              key={item.id}
              className="book__link"
              href={`/book-form/${item.id}`}
            >
              <Image width={540} height={190} src={item.image} alt="booking" />
              <span className="book__link-title title_h6">{item.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Book;
