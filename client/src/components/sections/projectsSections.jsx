//////////////////////////////////////////////////////////
// Importaciones
import { Card, CardContent } from "../ui/Card";
import Button from "../ui/Button.jsx";
import { ChevronRightIcon } from "lucide-react";
import { useContent } from "../../context/ContentProvider";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import '../../../src/styles/Proyectos.css';

//////////////////////////////////////////////////////////
// Componente FeaturesSection
const Proyectos = () => {
  const { features = [] } = useContent() || {};

  // Asegurar que solo se muestren 6 tarjetas
  const displayFeatures = features.slice(0, 6);

  return (
    <>
      {/* Features Section */}
      <section className="section-proyectos">
        <h3 className="heading-h5 text-center text-white">
          Proyectos
        </h3>
        <p className="proyectos-description proyectos-description-mb">
          Conocé nuestros servicios y llevá tu negocio al próximo nivel.
        </p>

        {/* Swiper Carousel */}
        <div className="swiper-container">
          <Swiper
            slidesPerView="auto"
            direction="horizontal"
            spaceBetween={30}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
            loop={true}
            centeredSlides={false}
            slideVisibleClass="swiper-slide-visible"
          >
            {displayFeatures.map((feature, index) => (
              <SwiperSlide key={index} className="swiper-slide-custom">
                <Card className={`proyectos-card proyecto-bg-${index}`}>
                  <CardContent className="proyectos-card-content">
                    {/* Contenido superior */}
                    <div className="card-top-content">
                      <div className="card-title-container">
                        <h5 className="card-title">
                          {feature.title}
                        </h5>
                      </div>
                      <div className="card-description-container">
                        <p className="card-description">
                          {feature.description}
                        </p>
                      </div>
                    </div>

                    {/* Botón */}
                    <div className="card-button-container">
                      <Button
                        variant="link"
                        className="card-button"
                      >
                        <span className="button-text">
                          Ver más
                        </span>
                        <ChevronRightIcon className="button-icon" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Proyectos;