const Challengetxt = () => {
    return (
        <section className="flex flex-col w-full items-start gap-20 px-16 py-16 bg-[#141218]">
            <div className="max-w">
                <div className="rounded-lg overflow-hidden">
                    <div className="md:flex">
                        <div className="md:w-1/2 px-0 py-1 md:p-8">
                            <h4 className="heading-h4 mb-6 text-white ">El Desafio:</h4>
                            <p className="text-regular-normal text-[20px] text-[#e0d5ee] ">
                                Nona Irene, una fábrica de fideos artesanales con décadas de tradición, 
                                quería llegar a más clientes sin perder su esencia familiar. Su presencia 
                                digital era limitada: solo tenían un perfil en redes sociales y necesitaban 
                                un sitio web que transmitiera la calidad de sus productos y facilitara pedidos.
                            </p>
                        </div>

                        <div className="md:w-1/2 px-0 py-1 md:p-8 flex flex-col items-center">
                            <h4 className="heading-h4 mb-6 text-white">
                                Problemas Clave:
                            </h4>
                            <ul>
                                <li className="text-regular-normal text-[20px] text-[#e0d5ee] list-disc">Sin página web profesional.</li>
                                <li className="text-regular-normal text-[20px] text-[#e0d5ee] list-disc">Branding inconsistente en redes sociales.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Challengetxt;