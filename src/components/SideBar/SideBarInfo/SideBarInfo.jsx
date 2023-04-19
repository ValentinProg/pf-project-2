import React from "react";
import Photo from "../../../assets/prog4.png";
import styles from "./SideBarInfo.module.scss";

export const SideBarInfo = () => {
  return (
    <div className={styles.sideBarInfo}>
      <div>
        <img src={Photo} alt="my cv card" />
      </div>
      <div>
        <h2>Kovalenko Valentin</h2>
        <span>Frontend Developer</span>
      </div>
      <div>
        <h2>Location</h2>
        <span>Ukraine, Kyiv</span>
        <span>Ready to remote work</span>
      </div>
      <div>
        <h2>Experience</h2>
        <span>November 2022 - Current</span>
      </div>
    </div>
  );
};
