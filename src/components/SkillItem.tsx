import React from "react";
import styles from "./SkillItem.module.css";

const SkillItem: React.FC<{
  skillLogo: string;
  skillName: string;
  skillDescription: string;
}> = ({ skillLogo, skillName, skillDescription }) => {
  return (
    <div className={styles.skillComponent}>
      <div className={styles.skillName}>
        <img src={skillLogo} alt="react" className={styles.skillLogo} />
        {skillName}
      </div>
      <div className={styles.skillDescription}>{skillDescription}</div>
    </div>
  );
};

export default SkillItem;
