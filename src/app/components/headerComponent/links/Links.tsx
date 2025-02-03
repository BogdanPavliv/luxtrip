import React from 'react';
import NavLink from "./navLink/NavLink";

const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Luxury packages",
      path: "/luxury-packages",
    },
    {
      title: "Book with us",
      path: "/book-with-us",
    },
    {
      title: "Why Lux Trips",
      path: "/why-lux-trips",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Client Area",
      path: "/client-area",
    },
];

const Links = () => {
  return (
    <ul className="header__navList">
        {links.map((link) => (
            <NavLink item={link} key={link.title}/>
        ))}
    </ul>
  )
}

export default Links;