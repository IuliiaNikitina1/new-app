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


const SoftSkills = () => {

    const {t} = useTranslation();

    const openModal = (el) => {
        document.getElementById(`modal-box-${el}`).style.display = "block";
    };

    const closeModal = (el) => {
        document.getElementById(`modal-box-${el}`).style.display = "none";
    }

    return (
    <>
    <p className="container-skills__text" style={{marginRight: "35rem", marginBottom: "2rem"}}>
            Soft skills
            <img className="container-skills__text-img" src="/turn-left-arrows-svgrepo-com.svg" alt="" />
            </p>
        <div className="container-skills__wrapper">
            <div className="soft-skills__div">
                <img className="skills-img" src="/adaptability.png" alt="" />
                <button className="soft-skills__name" id="btn-open-modal" onClick={() => openModal(1)}>{t("time-management")}
                    <img className="soft-skills__name-img" src="/zoom-in-lens-svgrepo-com.svg" alt="" />
                </button>
                <div id="modal-box-1" className="modal-box">
                    <div className="modal-content">
                        <span className="close" onClick={() => closeModal(1)}>&times;</span>
                        <p className="modal-content__text">{t("time-management-proof")}</p>
                    </div>
                </div>
            </div>
            <div className="soft-skills__div">
                <img className="skills-img" src="/problem-solving.png" alt="" />
                <button className="soft-skills__name" onClick={() => openModal(2)}>{t("creativity")}
                    <img className="soft-skills__name-img" src="/zoom-in-lens-svgrepo-com.svg" alt="" />
                </button>
                <div id="modal-box-2" className="modal-box">
                    <div className="modal-content">
                        <span className="close" onClick={() => closeModal(2)}>&times;</span>
                        <p className="modal-content__text">{t("creativity-proof")}</p>
                    </div>
                </div>
            </div>
            <div className="soft-skills__div">
                <img className="skills-img" src="/communication.png" alt="" />
                <button className="soft-skills__name" onClick={() => openModal(3)}>{t("communication")}
                    <img className="soft-skills__name-img" src="/zoom-in-lens-svgrepo-com.svg" alt="" />
                </button>
                <div id="modal-box-3" className="modal-box">
                    <div className="modal-content">
                        <span className="close" onClick={() => closeModal(3)}>&times;</span>
                        <p className="modal-content__text">{t("communication-proof-1")}</p>
                        <p className="modal-content__text">{t("communication-proof-2")}</p>
                    </div>
                </div>
            </div>
            <div className="soft-skills__div">
                <img className="skills-img" src="/collaboration.png" alt="" />
                <button className="soft-skills__name" onClick={() => openModal(4)}>{t("problem-solving")}
                    <img className="soft-skills__name-img" src="/zoom-in-lens-svgrepo-com.svg" alt="" />
                </button>
                <div id="modal-box-4" className="modal-box">
                    <div className="modal-content">
                        <span className="close" onClick={() => closeModal(4)}>&times;</span>
                        <p className="modal-content__text">{t("problem-solving-proof")}</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default SoftSkills