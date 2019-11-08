import React, { useState, createContext } from "react";
import en from "./translations/en.json";
import el from "./translations/el.json";

export const LanguageContext = createContext({
  lang: () => { },
  setLanguage: () => { }
});

export default ({ children }) => {
  const [language, setLanguage] = useState(
    localStorage.getItem("panos_language") || "en"
  );

  const translations = { en, el };

  const getLanguageList = () => Object.keys(translations);

  function lang(translationKey) {
    const translation = translations[language];

    let output = translation[translationKey];

    if (!translation || !output) {
      return translationKey
        .replace(/([A-Z])/g, " $1")
        .trim()
        .toUpperCase();
    }

    return output;
  }

  return (
    <LanguageContext.Provider
      value={{
        lang: lang,
        language: language,
        languages: getLanguageList,
        setLanguage: setLanguage
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
