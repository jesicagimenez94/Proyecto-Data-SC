const Solution = () => {
    return (
        <section className="flex flex-col w-full items-start gap-20">
            <div className="max-w">
                <div className="rounded-lg overflow-hidden text-center">
                    <div className="md:flex">
                        <div className="md:w-1/2 px-16 py-16 bg-[#141218]">
                              <img src="public/iPhone-moron.webp" alt="iPhone-Morón" />
                        </div>

                        <div className="md:w-1/2 p-8 flex flex-col items-center bg-[#201C25] px-16 py-16">
                            <h2 className="heading-h4 mb-6 text-white">
                                La Solucion:
                            </h2>
                            <ul className="flex flex-col items-center md:items-start">
                                <h4 className="heading-h4 text-[20px] text-[#e0d5ee] mt-2">Rediseño UX/UI:</h4>
                                <li className="text-regular-normal text-[20px] text-[#e0d5ee] mt-0.5">Estructura simplificada con menús intuitivos.</li>
                                <li className="text-regular-normal text-[20px] text-[#e0d5ee] mt-0.5">Diseño responsive (50% de tráfico era desde móviles).</li>
                                <h4 className="heading-h4 text-[20px] text-[#e0d5ee] mt-2">Accesibilidad:</h4>
                                <li className="text-regular-normal text-[20px] text-[#e0d5ee] mt-0.5">Botones grandes y textos escalables.</li>
                                <h4 className="heading-h4 text-[20px] text-[#e0d5ee] mt-2">Trámites 100% digitales:</h4>
                                <li className="text-regular-normal text-[20px] text-[#e0d5ee] mt-0.5">Turnos online (licencias de conducir, reclamos).</li>
                                <li className="text-regular-normal text-[20px] text-[#e0d5ee] mt-0.5">Certificados digitales (domicilio, libre deuda).</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Solution;