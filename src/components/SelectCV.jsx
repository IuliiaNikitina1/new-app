import React from 'react';
import axios from 'axios';
import {useTranslation} from "react-i18next";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationRU from "../locales/ru/translation.json";
import translationEN from "../locales/en/translation.json";
import translationDE from "../locales/de/translation.json";

const resources = {
    ru: {
        translation: translationRU,
    },
    en: {
        translation: translationEN,
    },
    de: {
        translation: translationDE,
    },
};

i18n.use(initReactI18next).init({
    resources,
    lng: "ru",
    fallbackLng: "ru",
    interpolation: {
        escapeValue: false,
    },
});

const SelectCV = () => {

    const {t} = useTranslation();

    const handleSelectCV = (lang) => {
        const cvRus = document.getElementById("cv-rus");
        const cvEng = document.getElementById("cv-eng");
        const cvDeu = document.getElementById("cv-deu");
        const cvEmpty = document.getElementById("cv-empty")

        if (lang === "rus") {
            cvRus.style.display = "block";
            cvEng.style.display = "none";
            cvDeu.style.display = "none";
            cvEmpty.style.display = "none";
        } else if (lang === "eng") {
            cvEng.style.display = "block";
            cvRus.style.display = "none";
            cvDeu.style.display = "none";
            cvEmpty.style.display = "none";
        } else if (lang === "deu") {
            cvDeu.style.display = "block";
            cvRus.style.display = "none";
            cvEng.style.display = "none";
            cvEmpty.style.display = "none";
        }
    };

    return (
    <>
        <div className="select-cv__div">
            <p className="select-cv__text">
                {t("my-cv")}
            </p>
            <select className="select-cv" onChange={(e) => handleSelectCV(e.target.value)}>
                <option value="" disabled selected>{t("choose-a-language")}</option>
                <option value="rus" className="option-cv">🇷🇺 Русский</option>
                <option value="eng" className="option-cv">🇬🇧 English</option>
                <option value="deu" className="option-cv">🇩🇪 Deutsch</option>
            </select>
            <div className="cv-download__div">
                <a id="cv-empty" className="cv-empty">
                    CV.png 
                </a>
                <a id="cv-rus" className="cv-download-link cv-rus" href="/CV.png" download>
                    CV-🇷🇺.png 
                {/* <img className="cv-download-img" src="/download-svgrepo-com.svg" alt="" /> */}
                </a>
                <a id="cv-eng" className="cv-download-link cv-eng" href="/cv-eng.png" download>
                    CV-🇬🇧.png
                    {/* <img className="cv-download-img" src="/download-svgrepo-com.svg" alt="" /> */}
                </a>
                <a id="cv-deu" className="cv-download-link cv-deu" href="/cv-deu.png" download>
                    CV-🇩🇪.png
                    {/* <img className="cv-download-img" src="/download-svgrepo-com.svg" alt="" /> */}
                </a>
            </div>
        </div>
    </>
  )
}

export default SelectCV;