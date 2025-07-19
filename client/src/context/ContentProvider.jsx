import { createContext, useContext, useState } from "react";
import contentData from "../data/data.json";

const ContentContext = createContext();

// Exportar el hook useContent primero
export const useContent = () => {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error('useContent debe usarse dentro de ContentProvider');
  }
  return context;
};

// Luego exportar el Provider
export const ContentProvider = ({ children }) => {
  const [content, setContent] = useState(contentData);

  return (
    <ContentContext.Provider value={content}>
      {children}
    </ContentContext.Provider>
  );
};
