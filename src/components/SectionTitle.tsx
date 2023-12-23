import React from "react";
import styles from "./SectionTitle.module.css";

const SectionTitle = ({ title, height = "30px", fontSize = "20px" }) => {
  return (
    <div
      className={styles.section}
      style={{ height: height, fontSize: fontSize }}
    >
      <img src="logo-dark.svg" alt="logo" className={styles.logo} />
      {title}
    </div>
  );
};

export default SectionTitle;
