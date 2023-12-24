import { useTranslation } from "react-i18next";
import styles from "./GetInTouch.module.css";

const GetInTouch = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.getInTouch}>
      <p className={styles.getInTouchDescription}>
        {t("get-in-touch.paragraph")}
      </p>

      <button
        className={styles.getInTouchButton}
        onClick={() => {
          window.location.href = "mailto:bohdan.ilienko.work@gmail.com";
        }}
      >
        {t("get-in-touch.button")}
      </button>
    </div>
  );
};

export default GetInTouch;
