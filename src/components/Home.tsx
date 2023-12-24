import { useTranslation } from "react-i18next";
import styles from "./Home.module.css";
import { Container } from "@mui/material";

const Home = () => {
  const { t } = useTranslation();

  return (
    <Container
      maxWidth="lg"
      sx={{
        py: 5,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      className={styles["home"]}
    >
      <div className={styles["home__text"]}>{t("home.title")} </div>
      <div className={styles.image}>
        <img className={styles.maskGroupIcon} alt="" src="my-img.png" />
        <div
          className={styles.aGraphicDesigner}
          //TODO: add a link to my CV
        >
          {t("home.subtitle-1")} <br />
          {t("home.subtitle-2")}
        </div>
      </div>
    </Container>
  );
};

export default Home;
