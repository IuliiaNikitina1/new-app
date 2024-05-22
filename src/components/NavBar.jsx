import { HStack, Image } from "@chakra-ui/react";

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

const NavBar = () => {

    const {t} = useTranslation();

    return (
    <>
    <nav className="nav-menu">
        <ul className="nav-menu__list">
            <li className="nav-menu__list-item hover-underline-animation">
                <a href="#about-me">{t("about-me")}</a>
            </li>
            <li className="nav-menu__list-item hover-underline-animation">
                 <a href="#education">{t("education")}</a>
            </li>
            <li className="nav-menu__list-item hover-underline-animation">
                <a href="#projects">{t("projects")}</a>
            </li>
        </ul>

        <LanguageSwitcher></LanguageSwitcher>
    </nav>

    {/* <ColorModeSwitch></ColorModeSwitch> */}
    </>
  );
};

export default NavBar;
