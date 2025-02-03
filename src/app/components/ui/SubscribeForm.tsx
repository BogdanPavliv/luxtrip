import React from 'react';
import Image from "next/image";

const SubscribeForm = () => {
  return (
    <section className="newsletter">
      <div className="container">
        <div className="newsletter__form">
            <Image src="/img/section-extraordinary/form-img.webp" alt="form-img" width={1110} height={565} className="newsletter__form-blur" />
            <div className="newsletter__form-wrapper">
            <h3 className="newsletter__form--title title_h3">Get weekly inspiration and expert advice</h3>
            <p className="newsletter__form-text">Sign up for our Weekly Newsletter</p>
            <form action="#" className="newsletter__form-form">
                <label htmlFor="subscribe" className="newsletter__form-label">
                <input type="email" id="subscribe" name="subscriber" placeholder="Email address" required />
                </label>
                <button className="newsletter__form-btn btn__decor btn__decor_w" type="submit"><span>Subscribe</span></button>
            </form>
            </div>
        </div>
      </div>
    </section>
  )
}

export default SubscribeForm;