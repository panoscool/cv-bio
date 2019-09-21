import React, { useState, createContext } from "react";
import en from "./translations/en.json";
import el from "./translations/el.json";

export const LanguageContext = createContext({
  lang: () => {},
  setLanguage: () => {}
});

export default ({ children }) => {
  const [language, setLanguage] = useState(
    localStorage.getItem("panos_language") || "en"
  );

  const translations = { en, el };

  const getLanguageList = () => Object.keys(translations);

  function lang(...args) {
    const translation = translations[language];

    const key = String(args.shift());
    let output = translation[key];

    if (!translation || !output) {
      return key
        .replace(/([A-Z])/g, " $1")
        .trim()
        .toUpperCase();
    }

    args.forEach(arg => {
      output = output.replace(/\{([^}]+)\}/, arg);
    });

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
