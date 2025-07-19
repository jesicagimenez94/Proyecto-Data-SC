import React, { useRef } from "react";
import { Card, CardContent } from "../ui/Card";
import Button from "../ui/Button.jsx";
import { ChevronRightIcon } from "lucide-react";
import { useContent } from "../../context/ContentProvider";
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Swiper modules
import { Pagination, Navigation } from "swiper/modules";
import "../../../src/styles/Proyectos.css";

const Proyectos = () => {
  const { features = [] } = useContent() || {};
  const displayFeatures = features.slice(0, 6);

  // Referencia para acceder al Swiper
  const swiperRef = useRef(null);

  return (
    <>
    <section className="section-proyectos">
      <h3 className="heading-h5 text-center text-white">Proyectos</h3>
      <p className="proyectos-description proyectos-description-mb">
        Conocé nuestros servicios y llevá tu negocio al próximo nivel.
      </p>

      <div className="swiper-container">
        <Swiper
          speed={600}
          pagination={{ clickable: true, dynamicBullets: true }}
          navigation={true}
          loop={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={() => {
            if (swiperRef.current && swiperRef.current.pagination) {
              swiperRef.current.pagination.update(); // Forzar actualización de los bullets
            }
          }}
        >
          {displayFeatures.map((features, index) => (
            <SwiperSlide key={index}>
              <div
                className="slide-content"
                style={{
                  backgroundImage: `url(${features.backgroundImage})`,
                }}
              >
                <Card className="proyectos-card">
                  <CardContent className="proyectos-card-content">
                    <div className="card-top-content">
                      <div className="card-title-container">
                        <h5 className="card-title">{features.title}</h5>
                      </div>
                      <div className="card-description-container">
                        <p className="card-description">
                          {features.description}
                        </p>
                      </div>
                    </div>
                    <div className="card-button-container">
                      <Button variant="link" className="card-button">
                        <span className="button-text">Ver más</span>
                        <ChevronRightIcon className="button-icon" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
    </>
  );
};

export default Proyectos;
