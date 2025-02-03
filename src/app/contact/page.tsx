import React from 'react';
import "./contact.scss"
import Image from "next/image";

const ContactPage = () => {
  return (
    <main className='main contact-bg'>
        <section className="contact">
            <div className="container">
                <h1 className="section-title">Don&#39;t miss a chance <br/>
                    to talk with us</h1>
        
                <div className="contact__wrapper">
                    <div className="block phone-block">
                        <span className="block__title">Phone</span>
                        <a href="tel:410782058388" className="block__phone-number">+41 &#40;078&#41; 205 83 88</a>
                        <span className="block__subtitle">or</span>
                        <div className="block__btn call__btn-main">Call Me Back</div>
                    </div>
                    <div className="block address-block">
                        <span className="block__title">Address</span>
                        <span className="block__address">Via Peri 17, 6900 <br/>
                            Lugano, Switzerland</span>
                        <span className="block__email">Email</span>
                        <a href="mailto:luxtra.travel@gmail.com" className="block__email-link">luxtra.travel@gmail.com</a>
                    </div>
                </div>
        
                <article className="map">
                    <Image width={1110} height={565} src="/img/contact/map.png" alt="Map" className="map__image" />
                    <Image width={56} height={108} src="/img/contact/icon-location.svg" alt="Icon location" className="map__icon-location" />
                </article>
            </div>
        </section>
    </main>
  );
}

export default ContactPage;