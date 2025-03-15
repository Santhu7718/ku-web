import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "search_events": "Search Events...",
      "weather": "Weather",
    }
  },
  es: {
    translation: {
      "search_events": "Buscar Eventos...",
      "weather": "Clima",
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false }
});

export default i18n;
