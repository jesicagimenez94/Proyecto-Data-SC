
//////////////////////////////////////////////////////////
// Componente HeroSection
const Banner = () => {
  return (
    <>
      {/* Hero Section linear-gradient(0deg,rgba(0,0,0,0.7)_0%,rgba(0,0,0,0.7)_100%) */}
      <section className="flex w-full h-[800px] text-center items-center justify-center py-4 [background:linear-gradient(180deg,rgba(0,0,0,0)_0.06%,rgba(20,18,24,1)_97.77%),url(public/banner-irene.webp)_50%_50%_/_cover] ">

        <div className="flex flex-col w-full items-center gap-8">
          <div className="flex flex-col items-center gap-6 w-full max-w-3xl ">
            <div className="flex flex-row items-center">
              <h1 className="heading-h1 text-[32px] md:text-[56px] text-white text">
              Nona Irene
            </h1>
            <img className="w-[100px] h-[100px] ml-[20px]" src="public/logo-irene.webp" alt="logo-Irene" />
            </div>
            
            <h4 className=" heading-h4 text-[#d1c7df] pl-[2rem] pr-[2rem]">
              Digitalizando la Tradición Artesanal
            </h4>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
