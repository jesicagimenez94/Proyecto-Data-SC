import { createContext, useContext, useState } from "react";
import contentData from "../data/data.json";

const ContentContext = createContext();

export const ContentProvider = ({ children }) => {
  const [content, setContent] = useState(contentData);

  return (
    <ContentContext.Provider value={content}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => {
  return useContext(ContentContext);
};
