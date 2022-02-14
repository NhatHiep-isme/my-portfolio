import React, { useState } from "react";

const LanguageContext = React.createContext();

function LanguageProvider({ children }) {
  const [isEnglish, setIsEnglish] = useState(true);

  const toggleLanguage = (language) => {
    if (language === "EN") {
      setIsEnglish(true);
    } else if (language === "VN") {
      setIsEnglish(false);
    }
  };
  const value = { isEnglish, toggleLanguage };
  console.log(isEnglish);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export { LanguageContext, LanguageProvider };
