import { useForm } from "react-hook-form";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import axios from "axios";

const schema = z.object({
  nombre: z.string().min(1, { message: "El nombre es obligatorio" }),
  correo: z
    .string()
    .email({ message: "Email inválido" })
    .min(1, { message: "El correo es obligatorio" }),
  mensaje: z
    .string()
    .min(10, { message: "El mensaje debe tener al menos 10 caracteres" }),
  terminos: z.literal(true, {
    errorMap: () => ({ message: "Debes aceptar los términos y condiciones" }),
  }),
});

export default function FormularioSection() {
  const [serverState, setServerState] = useState({
    loading: false,
    error: null,
    success: false,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (formData) => {
    try {
      setServerState({ loading: true, error: null, success: false });

      const API_URL =
        import.meta.env.VITE_API_URL ||
        "http://localhost:3001/api/contact/submit";

      const response = await axios.post(API_URL, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.data.success) {
        setServerState({ loading: false, error: null, success: true });
        reset();

        setTimeout(() => {
          setServerState((prev) => ({ ...prev, success: false }));
        }, 5000);
      } else {
        throw new Error(response.data.message || "Error en el servidor");
      }
    } catch (error) {
      console.error("Error al enviar:", error);
      setServerState({
        loading: false,
        error: error.response?.data?.message || error.message,
        success: false,
      });
    }
  };

  return (
    <section
      className="flex flex-col w-full items-start gap-20 md:px-16 md:py-16 py-16 px-0 bg-[#08030d]]"
      id="form-section"
    >
      <div className="w-full">
        <div className="rounded-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 p-8">
              <h2 className="heading-h4 mb-6 text-white ">Contáctanos</h2>
              <p className="text-regular-normal  text-[#e0d5ee] ">
                Si tienes alguna consulta o deseas conocer más sobre nuestros
                servicios, completa el formulario y nos pondremos en contacto
                contigo lo antes posible.
              </p>
              <ul>
                <li className="flex items-center my-4">
                  <img src="/mail.svg" alt="" />
                  <p className="text-regular-normal  text-white  ml-2">
                    mailfake@gmail.com
                  </p>
                </li>
                <li className="flex items-center my-4">
                  <img src="/phone.svg" alt="" />
                  <p className="text-regular-normal text-white ml-2">
                    +54XXXXXXXX
                  </p>
                </li>
                <li className="flex items-center my-4">
                  <img src="/location.svg" alt="" />
                  <p className="text-regular-normal text-white ml-2">
                    XXXX, Buenos Aires, Argentina
                  </p>
                </li>
              </ul>
            </div>

            <div className="md:w-1/2 p-8">
              {serverState.success && (
                <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg flex items-start">
                  <svg
                    className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <div>
                    <p className="text-regular-normal">
                      ¡Mensaje enviado con éxito!
                    </p>
                    <p className="text-sm">Te responderemos a la brevedad.</p>
                  </div>
                </div>
              )}

              {serverState.error && (
                <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg flex items-start">
                  <svg
                    className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div>
                    <p className="text-regular-normal">
                      Error al enviar el mensaje
                    </p>
                    <p className="text-sm">{serverState.error}</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label
                    htmlFor="nombre"
                    className="text-regular-normal  text-white"
                  >
                    Nombre completo
                  </label>
                  <input
                    id="nombre"
                    type="text"
                    {...register("nombre")}
                    className={`bg-[var(--input-background)] text-white mt-1 block w-full rounded-md border-none shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 ${
                      errors.nombre ? "border border-red-500" : ""
                    }`}
                  />
                  {errors.nombre && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.nombre.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="correo"
                    className="text-regular-normal  text-white"
                  >
                    Correo electrónico
                  </label>
                  <input
                    id="correo"
                    type="email"
                    {...register("correo")}
                    className={`bg-[var(--input-background)] text-white mt-1 block w-full rounded-md border-none shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 ${
                      errors.correo ? "border border-red-500" : ""
                    }`}
                  />
                  {errors.correo && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.correo.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="mensaje"
                    className="text-regular-normal  text-white"
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="mensaje"
                    rows={4}
                    {...register("mensaje")}
                    className={`bg-[var(--input-background)] text-white mt-1 block w-full rounded-md border-none shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 ${
                      errors.mensaje ? "border border-red-500" : ""
                    }`}
                  />
                  {errors.mensaje && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.mensaje.message}
                    </p>
                  )}
                </div>

                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="terminos"
                      type="checkbox"
                      {...register("terminos")}
                      className="bg-[var(--input-background)] h-5 w-5 border border-gray-300 rounded-md checked:bg-blue-500 checked:border-blue-500 focus:outline-none transition duration-200 cursor-pointer"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="terminos"
                      className="text-regular-normal  text-white"
                    >
                      Acepto los términos y condiciones
                    </label>
                    {errors.terminos && (
                      <p className="text-red-600">{errors.terminos.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={serverState.loading}
                    className="px-5 py-2 rounded-[100px] font-medium flex items-center justify-center gap-2 transition-all duration-300 border-transparent bg-[#a33cfa] font-text-regular-normal text-white w-full hover:bg-[#8a2be2] disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {serverState.loading ? (
                      <>
                        <svg
                          className="animate-spin h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Enviando...
                      </>
                    ) : (
                      "Enviar mensaje"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
