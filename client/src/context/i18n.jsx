import { createContext, useContext, useState } from "react";
import es from "../../public/data/espanish/es.json";
import en from "../../public/data/english/en.json";

const translations = { es, en };
const I18nContext = createContext();

export const I18nProvider = ({ children }) => {
  const [lang, setLang] = useState("es");

  const t = (key) => {
    const keys = key.split(".");
    return keys.reduce((obj, k) => (obj ? obj[k] : null), translations[lang]) || key;
  };

  const getLangData = () => translations[lang];

  return (
    <I18nContext.Provider value={{ lang, setLang, t, getLangData }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useTranslation = () => useContext(I18nContext);
