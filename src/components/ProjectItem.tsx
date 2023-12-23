import React from "react";
import styles from "./ProjectItem.module.css";

const ProjectItem: React.FC<{
  title: string;
  description: string;
  githubLink: string;
}> = ({ title, description, githubLink }) => {
  return (
    <div className={styles.projectComponent}>
      <div className={styles.header}>
        <img
          src="folder-line-icon.svg"
          alt="project"
          className={styles.projectLogo}
        />
        <img
          src="github-142-svgrepo-com.svg"
          alt="github"
          onClick={() => window.open(githubLink, "_blank")}
          className={styles.githubLogo}
        />
      </div>
      <div className={styles.projectName}>{title}</div>
      <div className={styles.projectDescription}>{description}</div>
    </div>
  );
};

export default ProjectItem;
