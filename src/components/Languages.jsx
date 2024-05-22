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

const Languages = () => {

    const {t} = useTranslation();

    return (
    <>
    <p className="container-skills__text">{t("languages")}
            <img className="container-skills__text-img" src="/turn-left-arrows-svgrepo-com.svg" alt="" />
        </p>
        <div className="skills__languages-box">
            <div className="skills__languages-div" onTouchMove={() => console.log('touched')}>
                <span className="language-label language-label-c2">C2</span>
                <img className="skills__languages-img" src="/russia-flag-icon.svg" alt="" />
            </div>
            <div className="skills__languages-div">
                <span className="language-label language-label-c1">C1</span>
                <img className="skills__languages-img" src="/united-kingdom-flag-icon.svg" alt="" />
                <span className="language-verified-label">
                    <p className="language-verified-label__text">IELTS (8.0)</p>
                    <div>
                        <a className="certificate-download-link" href="/IELTS.png" download>
                            <img className="download-img" src="/download-svgrepo-com.svg" alt="" />
                        </a>
                    </div>
                </span>
            </div>
            <div className="skills__languages-div">
                <span className="language-label language-label-c1">C1</span>
                <img className="skills__languages-img" src="/germany-flag-icon.svg" alt="" />
                <span className="language-verified-label">
                    <p className="language-verified-label__text">TestDaF (C1)</p>
                    <div>
                        <a className="certificate-download-link" href="/TestDaF.png" download>
                            <img className="download-img" style={{left: "10.7rem"}} src="/download-svgrepo-com.svg" alt="" />
                        </a>
                    </div>
                </span>
            </div>
        </div>
    </>
  )
}

export default Languages