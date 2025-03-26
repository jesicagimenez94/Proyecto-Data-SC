//////////////////////////////////////////////////////////
// Importaciones
import { createContext, useContext, useEffect, useState } from "react";

//////////////////////////////////////////////////////////

// Creamos el contexto para compartir el estado del contenido en la aplicación
const ContentContext = createContext();

/**
 * Componente ContentProvider
 * 
 * Proveedor de contexto que permite acceder al contenido cargado desde el archivo JSON
 * Se encarga de leer el archivo JSON en la carpeta /public y almacenarlo en el estado
 * para ser compartido entre los componentes hijos que consumen este contexto
 * 
 * @param {Object} props - Props del componente, incluyendo los hijos (children)
 * @returns {JSX.Element} El proveedor de contexto que envuelve a los componentes hijos.
 */
export const ContentProvider = ({ children }) => {
    // Estado para almacenar el contenido cargado desde el JSON
    const [content, setContent] = useState(null);
    
    // Ruta donde se encuentra el archivo JSON en la carpeta /public
    const jsonPath = "public/data/data.json"; 

    // useEffect se ejecuta una vez cuando el componente se monta
    useEffect(() => {
        // Función asincrónica para cargar los datos desde el archivo JSON
        const fetchData = async () => {
            try {
                // Realizamos la petición para obtener el JSON
                const response = await fetch(jsonPath);

                // Si la respuesta no es exitosa, lanzamos un error
                if (!response.ok) {
                    throw new Error(`Error ${response.status}: ${response.statusText}`);
                }

                // Convertimos la respuesta a formato JSON
                const data = await response.json();
                
                // Actualizamos el estado con los datos obtenidos
                setContent(data);
            } catch (error) {
                // En caso de error, mostramos un mensaje en la consola
                console.error("Error al cargar el JSON:", error.message);
            }
        };

        fetchData();
    }, []); // Solo se ejecuta una vez al montar el componente

    return (
        // Proveemos el contexto con el contenido cargado para que los hijos puedan acceder a él
        <ContentContext.Provider value={content}>
            {children}
        </ContentContext.Provider>
    );
};

/**
 * Hook personalizado para consumir el contexto de contenido
 * 
 * Este hook permite acceder al contenido cargado desde el archivo JSON en cualquier
 * componente funcional que lo necesite
 * 
 * @returns {Object|null} El contenido cargado desde el JSON, o null si aún no se cargó
 */
export const useContent = () => {
    return useContext(ContentContext);
};
