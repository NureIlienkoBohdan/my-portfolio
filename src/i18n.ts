import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import { DateTime } from "luxon";

i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init({
  returnEmptyString: false,
  debug: true,
  fallbackLng: "en",
});

// Check if i18n.services and i18n.services.formatter are defined before using them
if (i18n.services?.formatter) {
  //eslint-disable-next-line @typescript-eslint/no-unused-vars
  i18n.services.formatter.add("DATE_LONG", (value, lng, _options) => {
    // Check if lng is defined before using it
    const locale = lng
      ? DateTime.fromJSDate(value).setLocale(lng)
      : DateTime.fromJSDate(value);

    return locale.toLocaleString(DateTime.DATE_HUGE);
  });
}

export default i18n;
