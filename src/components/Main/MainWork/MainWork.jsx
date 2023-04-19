import React from "react";
import styles from "./MainWork.module.scss";

export const MainWork = () => {
  return (
    <div className={styles.mainWork}>
      <h2>Work Experience</h2>
      <span>
        Frontend Developer &bull; Modern It Systems &bull; Fulltime &bull; Aug
        2022 - Oct 2022
      </span>
      <ul>
        <li>
          Created user interfaces and configured the logic of user interaction
        </li>
        <li>
          Utilized HTML, CSS, and React to create 10+ responsive landing pages
          for company
        </li>
        <li>Developed of the data storage logic with Zustand</li>
      </ul>
    </div>
  );
};
