import React from 'react';
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    const handleLanguageChange = (lang) => {
        i18n.changeLanguage(lang);
        if (lang === "ru") {
            document.getElementById("rus-lang").style.backgroundColor = "var(--test)";
            document.getElementById("eng-lang").style.backgroundColor = "#1a1f1c";
            document.getElementById("deu-lang").style.backgroundColor = "#1a1f1c";
        }
        else if (lang === "en") {
            document.getElementById("eng-lang").style.backgroundColor = "var(--test)";
            document.getElementById("rus-lang").style.backgroundColor = "#1a1f1c";
            document.getElementById("deu-lang").style.backgroundColor = "#1a1f1c";
        } 
        else if (lang === "de") {
            document.getElementById("deu-lang").style.backgroundColor = "var(--test)";
            document.getElementById("eng-lang").style.backgroundColor = "#1a1f1c";
            document.getElementById("rus-lang").style.backgroundColor = "#1a1f1c";
        }
    };

    return (
        <>
        <div className="container-languages">
            <button id="rus-lang" className="container-languages__language rus-lang" value="ru" onClick={() => handleLanguageChange("ru")}>
                <img className="container-languages__flag" src="/russia-flag-icon.svg" alt="" />
            </button>
            <button id="eng-lang" className="container-languages__language eng-lang" value="en" onClick={() => handleLanguageChange("en")}>
                <img className="container-languages__flag" src="/united-kingdom-flag-icon.svg" alt="" />
            </button>
            <button id="deu-lang" className="container-languages__language deu-lang" value="de" onClick={() => handleLanguageChange("de")}>
                <img className="container-languages__flag" src="/germany-flag-icon.svg" alt="" />
            </button>
        </div>
        </>
    );
};

export default LanguageSwitcher;