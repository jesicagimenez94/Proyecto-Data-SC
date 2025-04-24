//////////////////////////////////////////////////////////
// Importaciones
import { Card, CardContent } from "../ui/Card";
import Button from "../ui/button";
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

//////////////////////////////////////////////////////////
// Componente FeaturesSection
const Proyectos = () => {
  const { features = [] } = useContent() || {};

  // Asegurar que solo se muestren 6 tarjetas
  const displayFeatures = features.slice(0, 6);

  return (
    <>
      {/* Features Section */}
      <section className="w-full items-center gap-10 px-4 py-16 sm:gap-16 sm:px-8 md:gap-1 md:px-16 lg:px-28 flex flex-col bg-[#141118]">
        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center tracking-[var(--heading-desktop-h3-letter-spacing)] leading-[var(--heading-desktop-h3-line-height)] font-heading-desktop-h3 text-[#E0CFF7]">
          Proyectos
        </h3>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-[var(--text-medium-normal-line-height)] text-center text-[#E0CFF7]">
          En EstelarCode la tecnología no es sólo nuestra herramienta, es nuestra pasión.
        </p>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-[var(--text-medium-normal-line-height)] text-center text-[#E0CFF7] mb-8">
          Conocé nuestros servicios y llevá tu negocio al próximo nivel.
        </p>

        {/* Swiper Carousel */}
        <div className="w-full max-w-[90%] mx-auto relative">
          <Swiper
            slidesPerView={1}
            direction="horizontal"
            spaceBetween={30}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper h-auto"
            loop={true}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 20
              },
              450: {
                slidesPerView: 1,
                spaceBetween: 20
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30
              }
            }}
          >
            {displayFeatures.map((feature, index) => (
              <SwiperSlide key={index} className="h-auto mb-8">
                <Card
                  className="flex flex-col w-full h-[500px] mx-auto bg-cover bg-center bg-no-repeat border-none shadow-none transition-transform duration-300 hover:scale-105"
                  style={{
                    backgroundImage: `url(${feature.backgroundImage})`,
                    backgroundSize: "cover",
                  }}
                >
                  <CardContent className="flex flex-col justify-between p-4 sm:p-8 bg-black/50 rounded-xl h-full">
                    {/* Contenido superior */}
                    <div className="flex flex-col items-center gap-6 text-center">
                      <div className="h-[80px] flex items-center justify-center">
                        <h5 className="text-xl sm:text-2xl md:text-3xl text-center text-white line-clamp-2 font-bold">
                          {feature.title}
                        </h5>
                      </div>
                      <div className="flex-1 w-full min-w-[318px] overflow-y-auto">
                        <p className="text-sm sm:text-base md:text-lg text-center text-white">
                          {feature.description}
                        </p>
                      </div>
                    </div>

                    {/* Botón */}
                    <div className="flex items-center justify-center mt-6">
                      <Button
                        variant="link"
                        className="rounded-[100px] overflow-hidden p-0 bg-[#f2f2f2] hover:bg-[#e0e0e0] transition-colors"
                      >
                        <span className="text-sm sm:text-base md:text-lg text-[#08030d]">
                          Button
                        </span>
                        <ChevronRightIcon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#08030d]" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: #a03df4 !important;
        }
        .swiper-button-next::after,
        .swiper-button-prev::after {
          font-size: 50px !important;
        }
        .swiper-pagination-bullet-active {
          background: #a03df4 !important;
        }
      `}</style>
    </>
  );
};

export default Proyectos;