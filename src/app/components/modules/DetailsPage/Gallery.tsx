import React from "react";
import Image from "next/image";
import { dataTrips } from "../../../utils/data";

const Gallery = ({ params }: { params: Promise<{ id: string }> }) => {
  // Розкриваємо params за допомогою React API
  const { id } = React.use(params);

  // Конвертуємо ID в число
  const detailsId = parseInt(id, 10);

  // Знаходимо відповідний запис
  const details = dataTrips.find((item) => item.id === detailsId);

  if (!details) return <p>Details not found</p>;
  return (
    <section className="gallery">
      <div className="container">
        <div id="gallery" className="section gallery__inner">
          <h2>Gallery</h2>
          <div className="gallery__images">
            <div className="gallery__images-top">
              <Image
                width={920}
                height={456}
                className="gallery__images-image"
                src={details.images.image}
                alt=""
              />
            </div>
            <div className="gallery__images-middle">
              <div className="gallery__images-middle-left">
                <Image
                  width={350}
                  height={571}
                  className="gallery__images-image"
                  src={details.images.image2}
                  alt=""
                />
                <Image
                  width={350}
                  height={268}
                  className="gallery__images-image"
                  src={details.images.image5}
                  alt=""
                />
              </div>
              <div className="gallery__images-middle-right">
                <Image
                  width={540}
                  height={268}
                  className="gallery__images-image"
                  src={details.images.image3}
                  alt=""
                />
                <Image
                  width={540}
                  height={571}
                  className="gallery__images-image"
                  src={details.images.image4}
                  alt=""
                />
              </div>
            </div>
            <div className="gallery__images-bottom">
              <Image
                width={920}
                height={456}
                className="gallery__images-image"
                src={details.images.image6}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
