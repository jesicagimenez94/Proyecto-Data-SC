//////////////////////////////////////////////////////////
// Importaciones
<<<<<<< HEAD
//import './styles/global.css';
import { DesktopViewSection } from "./screens/DesktopViewSection/DesktopViewSection";
=======
import { Home } from "./page";
>>>>>>> b7adf655b0ef6dfe3a6afefc0e882dc6468b51e7
// import { MobileViewSection } from "./screens/MobileViewSection/MobileViewSection";
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
        {/* Desktop view */}
        <div className="hidden md:block">
          <Home />
        </div>

      </MainLayout>
    </ContentProvider>
  );
};

export default App;
