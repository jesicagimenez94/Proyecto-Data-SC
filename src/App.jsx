//////////////////////////////////////////////////////////
// Importaciones
import { Home } from "./page";
import { ContentProvider } from "./context/ContentProvider";
import MainLayout from "./layout/MainLayout";

/** Para cuando tengamos que usar rutas **/
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//////////////////////////////////////////////////////////
// Componente principal de la aplicación
// Este componente es el que se renderiza en el punto de entrada de la aplicación (src/index.js)
const App = () => {
  return (
    <ContentProvider>
      <MainLayout>
          <Home />
      </MainLayout>
    </ContentProvider>
  );
};

export default App;
