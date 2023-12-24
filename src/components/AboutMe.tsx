import { useTranslation } from "react-i18next";
import styles from "./AboutMe.module.css";
import { Container } from "@mui/material";

const AboutMe = () => {
  const { t } = useTranslation();
  return (
    <Container
      maxWidth="lg"
      sx={{
        py: 5,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        gap: "50px",
      }}
      className={styles.aboutMe}
    >
      <img src="my-photo-2.jpg" alt="my-img" className={styles.myImg} />
      <div className={styles.aboutMeText}>
        <p>{t("about.paragraph-1")}</p>
        <p>{t("about.paragraph-2")}</p>
        <p>{t("about.paragraph-3")}</p>
      </div>
    </Container>
  );
};

export default AboutMe;
