//////////////////////////////////////////////////////////
// Importaciones
import { Card, CardContent } from "../ui/Card";
import Button from "../ui/button";
import { ChevronRightIcon } from "lucide-react";
import { useContent } from "../../context/ContentProvider";
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Pagination, Navigation } from 'swiper/modules';

//////////////////////////////////////////////////////////
// Componente FeaturesSection
const Projects = () => {
  const { features = [] } = useContent() || {};

// Asegurar que solo se muestren 6 tarjetas
const displayFeatures = features.slice(0, 6);
const backgroundImages = [
  "/public/proyectImg1.png",
  "/public/proyectImg2.png",
  "/public/proyectImg3.png",
  "/public/proyectImg1.png",
  "/public/proyectImg2.png",
  "/public/proyectImg3.png",
];

  return (
    <>
      {/* Features Section */}
      <section className="w-full items-center gap-4 px-4 sm:px-8 md:px-16 lg:px-28 py-16 flex flex-col bg-[#08030d]" id="proyectos">
        <h3 className="heading-h3 text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center mb-6 text-[#E0CFF7]"> 
          Proyectos
        </h3>
        <p className="text-regular-normal text-sm sm:text-base md:text-base text-center text-[#E0CFF7]">
          En EstelarCode la tecnología no es sólo nuestra herramienta, es nuestra pasión.
        </p>
        <p className="text-regular-normal text-sm sm:text-base md:text-base text-center text-[#E0CFF7] mb-8">
          Conocé nuestros servicios y llevá tu negocio al próximo nivel.
        </p>

        {/* Grid responsivo para las tarjetas */}
        <div className="w-full max-w-[95%] lg:max-w-[90%] mx-auto overflow-hidden">
        <Swiper
            slidesPerView="auto"
            direction="horizontal"
            breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 1.25 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2.5 },
            1280: { slidesPerView: 3 }
          }}
            spaceBetween={30}
            pagination={{ clickable: true, dynamicBullets: true, }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="overflow-visible"
            loop={true}
            centeredSlides={false}
            slideVisibleClass="swiper-slide-visible"
          >
          {displayFeatures.map((feature, index) => (
            <SwiperSlide key={index} className="w-[400px] h-auto mb-8">
              <Card className= "w-full h-[500px] bg-cover bg-center bg-no-repeat border-none shadow-none transition-transform duration-300 hover:scale-105" style={{ backgroundImage: `url(${backgroundImages[index]})` }}>

                <CardContent className="flex flex-col justify-between flex-grow p-4 sm:p-6 md:p-8 bg-black/50 rounded-xl min-h-[20rem] sm:min-h-[20rem] lg:min-h-[25rem]">
                  {/* Contenido superior */}
                  <div className="flex flex-col items-center gap-4 sm:gap-6 flex-grow">
                    <div className="h-[60px] sm:h-[80px] flex items-center justify-center">
                      <h5 className="text-medium-normal text-base sm:text-base md:text-base lg:text-lg text-center text-white">
                        {feature.title}
                      </h5>
                    </div>
                  <div className="flex items-center justify-center flex-grow">
                    <p className="text-regular-normal w-full lg:max-w-[80%] text-sm sm:text-sm md:text-base lg:text-base text-center line-clamp-5 overflow-hidden text-white">
                      {feature.description}
                    </p>
                  </div>
                </div>

                {/* Botón */}
                <div className="flex items-end justify-center mt-auto">
                  <Button
                    variant="link"
                    className="rounded-[100px] overflow-hidden p-0 bg-[#f2f2f2]"
                  >
                    <span className="text-sm sm:text-base md:text-lg text-[#08030d]">
                      Ver más
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
    </>
  );
};

export default Projects;
