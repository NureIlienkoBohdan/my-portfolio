import React from "react";
import styles from "./Home.module.css";
import { Container } from "@mui/material";

const Home = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        py: 5,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className={styles["home__text"]}>Hello, I’m Bohdan Ilienko </div>
      <div className={styles.image}>
        <img className={styles.maskGroupIcon} alt="" src="my-img.png" />
        <div
          className={styles.aGraphicDesigner}
          //TODO: add a link to my CV
        >
          I'm a Full-Stack Developer <br />
          with 2 years of work experience.
        </div>
      </div>
    </Container>
  );
};

export default Home;
