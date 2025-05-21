import React from "react";
import { useLanguage } from "../contexts/LanguageContext";

function Header() {
  const { toggleLanguage, t, language } = useLanguage();

  return (
    <header className="header">
      <div className="header-container">
        <h1 className="app-title">{t("appTitle")}</h1>
        <button onClick={toggleLanguage} className="language-btn">
          <span className="globe-icon">🌐</span>
          <span>
            {t("language")}: {language === "en" ? "English" : "ქართული"}
          </span>
        </button>
      </div>
    </header>
  );
}

export default Header;
