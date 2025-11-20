// /lib/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// import dei json (opzionale: se li tieni in src/locales puoi importare direttamente)
import homeIt from "../public/languages/it/home.json";
import homeEn from "../public/languages/en/home.json";
import homeEs from "../public/languages/es-419/home.json";

const resources = {
  it: {
    home: homeIt,
  },
  en: {
    home: homeEn,
  },
  es: {
    home: homeEs,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  ns: ["home"],
  defaultNS: "home",
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false, // se non vuoi usare Suspense
  },
});

export default i18n;
