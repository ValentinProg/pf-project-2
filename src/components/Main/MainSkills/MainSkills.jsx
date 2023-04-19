import React from "react";
import styles from "./MainSkills.module.scss";

export const MainSkills = () => {
  return (
    <div className={styles.mainSkills}>
      <h2>Skills</h2>
      <ul>
        <li>HTML, CSS, Javascript</li>
        <li>React</li>
        <li>Zustand</li>
        <li>Git/GitHub, REST APIs</li>
      </ul>
    </div>
  );
};
