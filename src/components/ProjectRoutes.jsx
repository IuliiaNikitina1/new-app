import axios from 'axios';
import {useTranslation} from "react-i18next";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationRU from "../locales/ru/translation.json";
import translationEN from "../locales/en/translation.json";
import translationDE from "../locales/de/translation.json";
import LanguageSwitcher from './LanguageSwitcher';

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

const ProjectRoutes = () => {

    const {t} = useTranslation();
    
    return (
    <>
    <div className="flip-card">
        <span className="ribbon">REACT</span>
        <div className="flip-card-inner">
            <div className="flip-card-front">
                <img className="project-img" src="../museums.png" alt="routes"/>
                </div>
                <div className="flip-card-back">
                <h1 className="flip-card-back__title">{t("web-application")}</h1>
                <p className="flip-card-back__text">{t("filter-locations")}</p>
                <p className="flip-card-back__text">{t("loved")}</p>
                <p className="flip-card-back__text">{t("map")}</p>
                <a className="flip-card__link" href="https://github.com/IuliiaNikitina1/tourist-app-project">GitHub</a>
            </div>
        </div>
    </div>
    </>
  )
}

export default ProjectRoutes;