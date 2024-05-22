import React from 'react';
import axios from 'axios';
import {useTranslation} from "react-i18next";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationRU from "../locales/ru/translation.json";
import translationEN from "../locales/en/translation.json";
import translationDE from "../locales/de/translation.json";
import SelectCV from './SelectCV';

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


const HardSkills = () => {

    const {t} = useTranslation();

    return (
    <>
    <p className="container-skills__text" style={{marginRight: "70rem"}}>
            Hard skills
            <img className="container-skills__text-img" src="/turn-left-arrows-svgrepo-com.svg" alt="" />
        </p>
        <div className="container-skills__wrapper">
            <div className="skill-bar">
                <div className="info">
                    <p className="skill-bar__skill">
                        HTML
                        <span className="skill-tip">
                            {t("html-experience")}
                        </span>
                    </p>
                    <p className="percent">90%</p>
                </div>
                <div className="bar">
                    <span className="html"></span>
                </div>
            </div>
            <div className="skill-bar">
                <div className="info">
                    <p className="skill-bar__skill">
                        CSS
                    <span className="skill-tip">
                        {t("css-experience")}
                    </span>
                    </p>
                    <p className="percent">85%</p>
                </div>
                <div className="bar">
                    <span className="css"></span>
                </div>
            </div>
            <div className="skill-bar">
                <div className="info">
                    <p className="skill-bar__skill">
                        JavaScript
                        <span className="skill-tip">
                            {t("js-experience")}
                        </span>
                    </p>
                    <p className="percent">80%</p>
                </div>
                <div className="bar">
                    <span className="js"></span>
                </div>
            </div>
            <div className="skill-bar">
                <div className="info">
                    <p className="skill-bar__skill">
                        TypeScript
                        <span className="skill-tip">
                            {t("ts-experience")}
                        </span>
                    </p>
                    <p className="percent">80%</p>
                </div>
                <div className="bar">
                    <span className="ts"></span>
                </div>
            </div>
            <div className="skill-bar">
                <div className="info">
                    <p className="skill-bar__skill">
                        React
                        <span className="skill-tip">
                            {t("react-experience")}
                        </span>
                    </p>
                    <p className="percent">80%</p>
                </div>
                <div className="bar">
                    <span className="react"></span>
                </div>
            </div>
            <div className="skill-bar">
                <div className="info">
                    <p className="skill-bar__skill">
                        Databases
                        <span className="skill-tip">
                            {t("db-experience")}
                        </span>
                    </p>
                    <p className="percent">80%</p>
                </div>
                <div className="bar">
                    <span className="db"></span>
                </div>
            </div>
            <div className="skill-bar">
                <div className="info">
                    <p className="skill-bar__skill">
                        SASS
                        <span className="skill-tip">
                            {t("sass-experience")}
                        </span>
                    </p>
                    <p className="percent">90%</p>
                </div>
                <div className="bar">
                    <span className="sass"></span>
                </div>
            </div>
            <div className="skill-bar">
                <div className="info">
                    <p className="skill-bar__skill">
                        Adaptive design
                        <span className="skill-tip">
                            {t("adaptive-experience")}
                        </span>
                    </p>
                    <p className="percent">90%</p>
                </div>
                <div className="bar">
                    <span className="adaptive"></span>
                </div>
            </div>
        </div>
    </>
  )
}

export default HardSkills