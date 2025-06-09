"use client";

import React from 'react';
import PageTransition from "../components/general/PageTransition";
import "./contact.scss"
import ContactPage from "../components/templates/ContactPage/ContactPage";

const Contact = () => {
  return <ContactPage />
}

export default PageTransition(Contact);