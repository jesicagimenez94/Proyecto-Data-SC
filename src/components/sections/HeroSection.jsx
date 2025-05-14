//////////////////////////////////////////////////////////
// Importaciones
import Button from "../ui/button";

//////////////////////////////////////////////////////////
// Componente HeroSection
const HeroSection = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="flex w-full h-[1100px] text-center items-center justify-center py-4 [background:linear-gradient(0deg,rgba(0,0,0,0.7)_0%,rgba(0,0,0,0.7)_100%),url(public/background-hero.webp)_50%_50%_/_cover] ">

      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs" viewBox="0 0 700 700" width="700" height="700"><defs><filter id="grainy" x="-20%" y="-20%" width="140%" height="140%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="linearRGB">
	    <feTurbulence type="fractalNoise" baseFrequency="0.091" numOctaves="4" seed="15" stitchTiles="stitch" x="0%" y="0%" width="100%" height="100%" result="turbulence"></feTurbulence>
	    <feSpecularLighting surfaceScale="18" specularConstant="0.75" specularExponent="20" lighting-color="#ffffff" x="0%" y="0%" width="100%" height="100%" in="turbulence" result="specularLighting">
    		<feDistantLight azimuth="3" elevation="91"></feDistantLight>
  	  </feSpecularLighting>
      </filter></defs><rect width="700" height="700" fill="#000000ff" style="--darkreader-inline-fill: var(--darkreader-background-000000, #000000);" data-darkreader-inline-fill=""></rect><rect width="700" height="700" fill="#ffffff" filter="url(#grainy)" style="--darkreader-inline-fill: var(--darkreader-background-ffffff, #181a1b);" data-darkreader-inline-fill=""></rect></svg>

        <div className="flex flex-col w-full items-center gap-8">
          <div className="flex flex-col items-center gap-6 w-full max-w-3xl ">
            <h1 className="heading-h1 text-[32px] md:text-[56px] text-white text">
              Impulsamos tu transformación digital
            </h1>
            <p className=" text-regular-normal text-[#d1c7df] ">
              Innovación, precisión y tecnología a tu alcance.
            </p>
          </div>

          <div className="flex items-start gap-4">
            <Button className="px-6 py-2.5 bg-[#a33cfa] rounded-[100px]" href="#form-section">
              <span className=" text-regular-medium  text-white ">
                Contactanos
              </span>
            </Button>

            <Button
              variant="outline"
              className="px-6 py-2.5 bg-[#ffffff1a] rounded-[100px] border-transparent"
            >
              <span className=" text-regular-normal  text-white ">
                Leer más
              </span>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
