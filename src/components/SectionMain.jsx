import React from 'react';
import NavBar from './NavBar';
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

const SectionMain = () => {

    const {t} = useTranslation();

    const scrollFunction = () => {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            document.getElementById("myBtn").style.display = "block";
        } else {
            document.getElementById("myBtn").style.display = "none";
        }
    };

    window.onscroll = function() {scrollFunction()};

    const topFunction = () => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    };

    return (
    <>
    <button onClick={() => topFunction()} id="myBtn">
        <img className="btn-go-to-top" src="/arrow-to-top-svgrepo-com.svg" alt="" />
    </button>
    
    <div className="scroll-watcher"></div>
    <section className="container main-section">
        <NavBar></NavBar>
        <div className="left-wrapper">
            {/* <img className="left-wrapper__img-small fade-in-image" src="../photo-amsterdam-close.jpeg" alt="photo-small" /> */}
            <img className="left-wrapper__img fade-in-image" src="../photo-amsterdam-close.jpeg" alt="photo" />
        </div>
        <div className="right-wrapper">
            <div className="right-wrapper__description-box">
                <p className="right-wrapper__description-title">{t("i-am-iuliia")}</p>
                <p className="right-wrapper__description-text">{t("frontend-developer")}</p>
                <SelectCV></SelectCV>
                <div className="right-wrapper__icons-box">
                    <div className="icons__item icons__item-leet">
                            <a href="https://leetcode.com/u/iuliiankt/">
                                <img className="icons__item-img" src="../leetcode-svgrepo-com.svg" alt="leetcode" />
                            </a>
                        </div>
                    <div className="icons__item icons__item-github">
                        <a href="https://github.com/IuliiaNikitina1">
                            <img className="icons__item-img" src="../github.png" alt="github" />
                        </a>
                    </div>
                    <div className="icons__item icons__item-telegram">
                        <img className="icons__item-img" src="../telegram.png" alt="telegram" />
                        <span className="telegram-tip">
                            @iuliia1nkt
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default SectionMain;