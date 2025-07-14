const Banner = () => {
  return (
    <>
      {/* Hero Section linear-gradient(0deg,rgba(0,0,0,0.7)_0%,rgba(0,0,0,0.7)_100%) */}
      <section className="flex w-full h-[800px] text-center items-center justify-center py-4 [background:linear-gradient(180deg,rgba(0,0,0,0)_0.06%,rgba(20,18,24,1)_97.77%),url(public/banner-moron.webp)_50%_50%_/_cover] ">

        <div className="flex flex-col w-full items-start gap-8">
          <div className="flex flex-col items-center md:items-start md:pl-[3rem] pl-[0] gap-6 w-full max-w-4xl ">
            <div className="flex md:flex-row flex-col items-center">
              <h1 className="heading-h1 text-[32px] md:text-[56px] text-white text">
              Municipalidad de Morón
            </h1>
            <img className="w-[100px] h-[100px] md:ml-[20px] md:mt-[0] mt-[20px] ml-[0] rounded-[100px] " src="public/logo-moron.webp" alt="logo-Morón" />
            </div>
            
            <h4 className=" heading-h4 text-[#d1c7df] ">
              Gestiones al alcance de todos
            </h4>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
