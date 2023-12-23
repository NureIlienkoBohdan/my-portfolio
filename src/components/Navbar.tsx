import React, { useEffect } from "react";
import styles from "./Navbar.module.css";
import { Link } from "@mui/material";

const Navbar = () => {
  const [closed, setClosed] = React.useState(false);

  useEffect(() => {
    //можно ли как то уззнать ширина экрана в useEffect?
    const innerWidth = window.innerWidth;
    if (innerWidth < 768) {
      setClosed(true);
    }
  }, []);

  return (
    <div className={styles.navbar}>
      <img
        src="logo-dark.svg"
        alt="logo"
        className={styles.logo}
        onClick={() => setClosed((prev) => !prev)}
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
            Resume
          </Link>
          <Link
            href="https://t.me/emilevi4"
            underline="none"
            target="_blank"
            className={styles.navbar__link}
          >
            Contact
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
