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

const SectionEducation = () => {

    const {t} = useTranslation();
    return (
    <>
    <section id="education" className="third-section">
        <p className="section__title">{t("section-education-title")}</p>
        <div className="timeline">
                <div className="timeline-div left">
                    <div className="timeline-content">
                    <h2 className="timeline-point__time">2009-2020</h2>
                    <p className="timeline-point__name">{t("school-619")}</p>

                    <div className="grade-div">
                        <span className="grade">{t("grade")}</span>
                        <p>{t("school-grade")}</p>
                    </div>

                    <div className="timeline-point__location">
                        <img className="timeline-point__location-marker" src="/icons8-place-marker-50.png" alt="" />
                        <p>{t("school-location")}</p>
                    </div>
                    </div>
                </div>
                <div className="timeline-div right">
                    <div className="timeline-content">
                    <h2 className="timeline-point__time">2020-2024</h2>
                    <p className="timeline-point__name">{t("ITMO")}</p>
                
                    {/* <img src="/arrow-sub-down-right-svgrepo-com.svg" alt="" className="sub-down-arrow-faculty" /> */}
                    <p className="faculty">{t("ITMO-faculty")}</p>

                    {/* <img src="/arrow-sub-down-right-svgrepo-com.svg" alt="" className="sub-down-arrow-programme" /> */}
                    <p className="programme">{t("ITMO-programme")}</p>

                    <div className="grade-div">
                        <span className="grade">{t("grade")}</span>
                        <p>{t("ITMO-grade")}</p>
                    </div>

                    <div className="timeline-point__location">
                        <img className="timeline-point__location-marker" src="/icons8-place-marker-50.png" alt="" />
                        <p>{t("ITMO-location")}</p>
                    </div>

                    </div>
                </div>
                <div className="timeline-div left between">
                    <div className="timeline-content">
                    <h2 className="timeline-point__time">9/2023-3/2024</h2>
                    <p className="timeline-point__name">{t("DIT")}</p>
                    
                    <span>{t("DIT-description")}</span>

                    <div className="timeline-point__location">
                        <img className="timeline-point__location-marker" src="/icons8-place-marker-50.png" alt="" />
                        <p>{t("DIT-location")}</p>
                    </div>

                    </div>
                </div>
            </div>
    </section>
    </>
  )
}

export default SectionEducation;