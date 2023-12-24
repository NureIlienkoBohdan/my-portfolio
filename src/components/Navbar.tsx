import React, { useEffect } from "react";
import styles from "./Navbar.module.css";
import { Divider, Link } from "@mui/material";
import { useTranslation } from "react-i18next";

const locales = {
  en: { title: "English" },
  ua: { title: "Українська" },
};

const Navbar = () => {
  // const [closed, setClosed] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);
  const { t, i18n } = useTranslation();

  // useEffect(() => {
  //   const innerWidth = window.innerWidth;
  //   if (innerWidth < 768) {
  //     setClosed(true);
  //   }
  // }, []);

  useEffect(() => {
    const innerWidth = window.innerWidth;
    if (innerWidth < 768) {
      setIsMobile(true);
    }
  }, []);

  const changeLanguage = (locale: string) => {
    i18n.changeLanguage(locale);
    // setClosed(true);
  };

  return (
    <div className={styles.navbar}>
      <img
        src="logo-dark.svg"
        alt="logo"
        className={styles.logo}
        // onClick={() => setClosed((prev) => !prev)}
      />

      {!closed && (
        <div className={styles.navbar__links}>
          <Link
            href="https://www.linkedin.com/in/bohdan-ilienko-692b232a5/?jobid=1234"
            underline="none"
            target="_blank"
            className={styles.navbar__link}
          >
            LinkedIn
          </Link>
          <Link
            href="https://github.com/emileyski"
            underline="none"
            target="_blank"
            className={styles.navbar__link}
          >
            GitHub
          </Link>
          <Link
            href="https://docs.google.com/document/d/1O5xD7B-m9irfGbEfrwGsvLKtDZoENmEVkR_PztyRenM/edit"
            underline="none"
            target="_blank"
            className={styles.navbar__link}
          >
            {t("navbar.resume")}
          </Link>
          <Link
            href="https://t.me/emilevi4"
            underline="none"
            target="_blank"
            className={styles.navbar__link}
          >
            {t("navbar.contact")}
          </Link>
          <Divider className={styles.navbar__divider} flexItem />
          <div className={styles["navbar__language-dropdown"]}>
            <button>{locales[i18n.language].title}</button>
            <div className={styles["navbar__language-dropdown-content"]}>
              {Object.keys(locales).map((locale) => (
                <button key={locale} onClick={() => changeLanguage(locale)}>
                  {locales[locale].title}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
