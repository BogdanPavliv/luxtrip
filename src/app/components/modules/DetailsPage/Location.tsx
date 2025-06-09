import { Manrope } from "next/font/google";

const manrope400 = Manrope({
  subsets: ["latin"],
  weight: "400"
});

const Location = () => {
  return (
    <section className="location">
      <div className="container">
        <div id="location" className="section location__inner">
          <h2>Location</h2>
          <p className={`${manrope400.className}`}>
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
            imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
            mollis pretium.
          </p>
          <div className="location__map"></div>
        </div>
      </div>
    </section>
  );
};

export default Location;
