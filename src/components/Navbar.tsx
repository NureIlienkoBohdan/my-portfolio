import styles from './Navbar.module.css';
import { Divider, Link } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

const locales = {
  'en-US': { title: 'English' },
  'uk-UA': { title: 'Українська' },
};

const Navbar = () => {
  const { t, i18n } = useTranslation();

  useEffect(
    () => {
      const locale = localStorage.getItem('i18nextLng');

      if (!locale || !Object.keys(locales).includes(locale)) {
        i18n.changeLanguage('en-US');
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  function changeLanguage(locale: string) {
    i18n.changeLanguage(locale);
  }

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
            href="https://drive.google.com/file/d/1JWyHdIi0rFyVx9Yshe2bASW_vt6S9b9q/view"
            underline="none"
            target="_blank"
            className={styles.navbar__link}
          >
            {t('navbar.resume')}
          </Link>
          <Link
            href="https://t.me/b0urgeois"
            underline="none"
            target="_blank"
            className={styles.navbar__link}
          >
            {t('navbar.contact')}
          </Link>
          <Divider className={styles.navbar__divider} flexItem />
          <div className={styles['navbar__language-dropdown']}>
            <button>
              {
                (
                  locales as {
                    [key: string]: { title: string };
                  }
                )[i18n.language]?.title
              }
            </button>
            <div className={styles['navbar__language-dropdown-content']}>
              {Object.keys(locales).map((locale) => (
                <button key={locale} onClick={() => changeLanguage(locale)}>
                  {
                    (
                      locales as {
                        [key: string]: { title: string };
                      }
                    )[locale].title
                  }
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
