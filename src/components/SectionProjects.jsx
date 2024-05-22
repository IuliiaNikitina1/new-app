import React from 'react';
import ProjectRoutes from './ProjectRoutes';
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

const SectionProjects = () => {

    const {t} = useTranslation();
    return (
    <>
    <section id="projects" className="container projects-section">
        <p className="section__title">{t("section-projects-title")}</p>
        <ProjectRoutes></ProjectRoutes>
        <p className="projects-section__dots">. . .</p>
    </section>
    </>
  )
}

export default SectionProjects;