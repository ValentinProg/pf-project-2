import React from "react";
import styles from "./MainHeader.module.scss";
import CV from "../../../assets/Kovalenko_CV.pdf";
import Load from "../../../assets/load.svg";

export const MainHeader = () => {
  return (
    <div className={styles.mainHeader}>
      <h2>About</h2>
      <div className={styles.mainButtons}>
        <a href={CV} download="Kovalenko_CV">
          <button>
            <img src={Load} />
            Download CV
          </button>
        </a>
      </div>
    </div>
  );
};
