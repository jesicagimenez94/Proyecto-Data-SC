import { createRoot } from "react-dom/client";
import App from "./App";
import { ContentProvider } from "./context/ContentProvider"; // Importamos el proveedor de contexto

createRoot(document.getElementById("root")).render(
  // Envuelvo la aplicación con el proveedor de contexto
  <ContentProvider>
    <App />
  </ContentProvider>
);
