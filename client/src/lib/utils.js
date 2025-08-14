/**
 * Funcion 'cn' para combinar clases de tailwindcss y clases de css
 * 
 * Usa 'clsx' para unir las clases pasadas como parámetros, eliminando clases duplicadas o condicionales.
 * Luego, pasa el resultado por 'tailwind-merge' para evitar conflictos entre clases de Tailwind y garantizar que las clases finales sean válidas.
 * 
 * Esta función es útil cuando se manejan clases dinámicas o condicionales en componentes de React.
 *  
 * @param  {...string} inputs - Clases de Tailwind a combinar
 * @returns {string} Cadena de texto con las clases optimizadas y unidas
 */

import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Función que combina las clases pasadas, eliminando duplicados y asegurando que las clases sean válidas
export function cn(...inputs) {
  return twMerge(clsx(inputs)); // Combina las clases con 'clsx' y las optimiza con tailwind-merge
}
