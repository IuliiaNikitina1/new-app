import React from 'react';
import axios from 'axios';
import {useTranslation} from "react-i18next";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationRU from "../locales/ru/translation.json";
import translationEN from "../locales/en/translation.json";
import translationDE from "../locales/de/translation.json";
import HardSkills from './HardSkills';
import SoftSkills from './SoftSkills';
import Languages from './Languages';

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


const SectionAboutMe = () => {
    const {t} = useTranslation();

    return (
    <>
    <section id="about-me" className="second-section">
        <p className="section__title">{t("section-about-me-title")}</p>
        <div className="second-section__description">
            {t("about-me-section-text")}
        </div>

        

        <HardSkills></HardSkills>

        <SoftSkills></SoftSkills>

        <Languages></Languages>

    </section>
    </>
  )
}

export default SectionAboutMe;