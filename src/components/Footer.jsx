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

const Footer = () => {

    const {t} = useTranslation();

    return (
    <>
        <div className="footer">
                <div className="footer-contacts">
                    <div className="footer__text">{t("my-media")}</div>
                    <div className="footer__icons-box">
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
                <div className="footer-email">
                    <p className="footer-email__text">{t("my-email")}</p>
                    <p className="footer-email__email">
                        iuliia.nkt@gmail.com
                    </p>
                </div>
        </div>
    </>
  )
}

export default Footer;