import React from "react";
import styles from "./AboutMe.module.css";
import { Container } from "@mui/material";

const AboutMe = () => {
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
    >
      <img src="my-photo-2.jpg" alt="my-img" className={styles.myImg} />
      <div className={styles.aboutMeText}>
        <p>
          I am a meticulous and reliable professional, adept at managing
          multiple priorities with a positive mindset. I willingly take on
          additional responsibilities to contribute to team goals, and my
          attention to detail is complemented by strong social skills that
          foster effective collaboration within a development team.
        </p>
        <p>
          In my capacity as a developer, I am passionate about crafting elegant
          and efficient solutions to complex problems. My skill set encompasses
          both front-end and back-end technologies, including React, Redux,
          Nest.js, and expertise in microservices architecture with Kubernetes,
          Docker, and RabbitMQ. Throughout my career, I've successfully worked
          on diverse projects, ranging from simple static websites to complex
          enterprise-level applications.
        </p>
        <p>
          I am well-versed in a variety of development tools such as Docker, Git
          and ensuring seamless project execution. Constantly seeking
          opportunities for professional growth, I embrace new technologies and
          actively pursue ways to enhance my skills and knowledge. My commitment
          to excellence extends to optimizing performance, improving user
          experience, and maintaining the highest standards of code quality in
          every project I undertake.
        </p>
      </div>
    </Container>
  );
};

export default AboutMe;
