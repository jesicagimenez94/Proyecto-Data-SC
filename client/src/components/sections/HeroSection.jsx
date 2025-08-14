import Button from "../ui/button";

const HeroSection = () => {
  return (
    <>
      <section className="flex w-full h-screen text-center items-center justify-center py-4 [background:linear-gradient(0deg,rgba(0,0,0,0.7)_0%,rgba(0,0,0,0.7)_100%),url(/background-hero.webp)_50%_50%_/_cover]">
        <div className="flex flex-col w-full items-center gap-8">
          <div className="flex flex-col items-center gap-6 w-full max-w-5xl">      
            <h1 className="heading-m-h1 md:heading-h1 text-slate-200">
              Impulsamos tu transformación digital
            </h1>
            <p className="text-xl text-slate-300 mx-4">
              Combinamos innovación, precisión y tecnología para ayudarte a
              escalar, automatizar y evolucionar digitalmente.
            </p>
          </div>

          <div className="md:flex justify-center gap-5">
            <Button
              className="text-lg bg-[#750cca] hover:bg-[#8a31dd] text-white rounded-full px-5 py-2 shadow-md hover:shadow-[0_0_24px_#a43cfa] transition-shadow duration-300 text-center"
              href="#form-section"
            >
              Contactanos
            </Button>

            <Button
              variant="outline"
              className="text-lg md:text-xl text-white border-zinc-800 border rounded-full hover:bg-slate-200 py-4 hover:text-[#000] btn btn-lg md:m-0 mt-2 bg-[#222]/30 backdrop-blur-2xl"
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
