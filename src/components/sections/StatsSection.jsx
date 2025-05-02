//////////////////////////////////////////////////////////
// Importaciones

//////////////////////////////////////////////////////////
// Componente StatsSection
const StatsSection = () => {
  return (
    <>
      <section className="w-full items-start gap-20 px-16 py-28 flex flex-col bg-black">
        <div className="flex items-center gap-20 self-stretch w-full">
          <div className="flex flex-col items-start gap-8 flex-1">
            <div className="flex flex-col items-start gap-6 self-stretch w-full">
              <h3 className="heading-h5  text-white ">
                Long heading is what you see here in this feature section
              </h3>

              <p className=" text-regular-normal  text-white ">
                In the past year, our company has increased revenue by 25%,
                achieving a record profit margin of 15%. We successfully
                launched 10 innovative products, reaching over 1 million
                customers worldwide. Our commitment to sustainability has
                reduced carbon emissions by 40%, positively impacting the
                environment and our community.
              </p>
            </div>

            <div className="flex flex-col items-start gap-4 self-stretch w-full">
              <div className="flex items-start gap-6 px-0 py-2 self-stretch w-full">
                <div className="flex-1 flex flex-col items-start gap-2">
                  <h2 className="heading-h2 text-white ">
                    25%
                  </h2>

                  <p className=" text-regular-normal  text-white ">
                    Increased in revenue in the past year
                  </p>
                </div>

                <div className="flex-1 flex flex-col items-start gap-2">
                  <h2 className="heading-h2  text-white ">
                    50%
                  </h2>

                  <p className=" text-regular-normal  text-white ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <img
            className="flex-1 h-[540px] object-cover rounded-[40px]"
            alt="Placeholder image"
            src="public/placeholder-image-20.png"
          />
        </div>
      </section>
    </>
  )
}

export default StatsSection
