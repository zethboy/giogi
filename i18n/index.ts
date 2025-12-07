"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en.json";
import id from "./locales/id.json";

i18n
  .use(initReactI18next)
  .init({
    lng: "id",            // default
    fallbackLng: "id",
    resources: {
      id: { translation: id },
      en: { translation: en }
    },
    interpolation: {
      escapeValue: false
    }
  });

  
export default i18n;
