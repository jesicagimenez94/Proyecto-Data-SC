const Challengetxt = () => {
    return (
        <section className="flex flex-col w-full items-start gap-20 px-16 py-16 bg-[#141218]">
            <div className="max-w">
                <div className="rounded-lg overflow-hidden">
                    <div className="md:flex">
                        <div className="md:w-[100%] px-0 py-1 md:p-8">
                            <h4 className="heading-h4 mb-6 text-white ">El Desafio:</h4>
                            <p className="text-regular-normal text-[20px] text-[#e0d5ee] max-w-[90%] ">
                                El sitio web del Municipio de Morón era obsoleto, con navegación confusa y baja accesibilidad, lo que dificultaba el acceso a información clave para vecinos y empresas. Los principales problemas eran:
                            </p>
                            <ul className="mt-4">
                                <li className="text-regular-normal text-[20px] text-[#e0d5ee] list-disc mt-1">Diseño anticuado: Estructura de los años 2010, no responsive.</li>
                                <li className="text-regular-normal text-[20px] text-[#e0d5ee] list-disc mt-1">Barreras de accesibilidad: Falta de contraste, textos no escalables y ausencia de lectores de pantalla.</li>
                                <li className="text-regular-normal text-[20px] text-[#e0d5ee] list-disc mt-1">Trámites engorrosos: Los ciudadanos debían descargar PDFs y llevarlos en persona, generando colas innecesarias.</li>
                                <li className="text-regular-normal text-[20px] text-[#e0d5ee] list-disc mt-1">Poca transparencia: Información desactualizada y difícil de encontrar.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Challengetxt;