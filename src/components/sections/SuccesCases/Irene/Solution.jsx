const Solution = () => {
    return (
        <section className="flex flex-col w-full items-start gap-20 px-16 py-16 bg-[#201C25]">
            <div className="max-w">
                <div className="rounded-lg overflow-hidden text-center">
                    <h4 className="heading-h4 mb-6 text-white">La Solucion</h4>
                    <h5 className="text-normal mb-6 text-white text-[25px] font-thin italic">Desarrollamos un sitio web atractivo y funcional, diseñado para reflejar la calidez artesanal de Nona Irene.</h5>
                    <div className="md:flex">
                        <div className="md:w-1/2 p-8">
                              <img src="public/iPhone-irene.webp" alt="iPhone-irene" />
                        </div>

                        <div className="md:w-1/2 p-8 flex flex-col items-center">
                            <h2 className="heading-h4 mb-6 text-white">
                                El resultado
                            </h2>
                            <ul>
                                <li className="text-regular-normal text-[20px] text-[#e0d5ee] list-disc">Diseño auténtico: Fotografía profesional de los fideos y el proceso de amasado con rodillo para destacar su valor tradicional.</li>
                                <li className="text-regular-normal text-[20px] text-[#e0d5ee] list-disc">Mobile-first: Sitio optimizado para móviles (donde el 70% de sus clientes navegan).</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Solution;