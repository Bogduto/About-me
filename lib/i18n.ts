import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// contants
import { resources } from "@/constants/resources/resources";


i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false, // React already escapes values to prevent XSS
  },
});

export default i18n;
