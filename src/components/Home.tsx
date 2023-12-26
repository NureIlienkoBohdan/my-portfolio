import { useTranslation } from "react-i18next";
import styles from "./Home.module.css";
import { Container } from "@mui/material";
// import { css } from "@emotion/react";
import { GridLoader } from "react-spinners"; // Import the ClipLoader component from react-spinners
import React from "react";

const LazyLoadedImage = React.lazy(() => import("./LazyLoadedImage"));

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
        <React.Suspense
          fallback={
            <div className={styles.spinnerContainer}>
              <GridLoader color={"#b8ff20"} size={50} loading={true} />
            </div>
          }
        >
          <LazyLoadedImage />
        </React.Suspense>
        <div className={styles.aGraphicDesigner}>
          {t("home.subtitle-1")} <br />
          {t("home.subtitle-2")}
        </div>
      </div>
    </Container>
  );
};

export default Home;
