//////////////////////////////////////////////////////////
// Importaciones
import Button from "../ui/Button.jsx";

//////////////////////////////////////////////////////////
// Componente HeroSection
const HeroSection = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="flex w-full h-screen text-center items-center justify-center py-4 [background:linear-gradient(0deg,rgba(0,0,0,0.7)_0%,rgba(0,0,0,0.7)_100%),url(/background-hero.webp)_50%_50%_/_cover] ">

        <div className="flex flex-col w-full items-center gap-8">
          <div className="flex flex-col items-center gap-6 w-full max-w-5xl">
            {/* <h1 className="heading-h1 text-[32px] md:text-[56px] text-white text"> */}
            <h1 className="text-3xl md:text-7xl py-4 text-slate-200 font-bold">
              Impulsamos tu transformación digital
            </h1>
            <p className="text-base text-slate-300 md:text-xl my-0">
              Innovación, precisión y tecnología a tu alcance.
            </p>
          </div>
  
          <div className="md:flex justify-center gap-5">
            <Button className="font-rajdhani text-lg md:text-xl text-white bg-[#750cca] border-none rounded-full hover:bg-[#8600f3] btn btn-lg py-4 shadow-xl mb-2 md:m-0 hover:shadow-2xl hover:shadow-[#a43cfa]" href="#form-section">

                Contactanos
              
            </Button>

            <Button
              variant="outline"
              className="font-rajdhani text-lg md:text-xl text-white border-zinc-800 border rounded-full hover:bg-slate-200 py-4 hover:text-[#000] btn btn-lg md:m-0 mt-2 bg-[#222]/30 backdrop-blur-2xl"
              href="#servicios"
            >
              
                Nuestros servicios →
              
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
