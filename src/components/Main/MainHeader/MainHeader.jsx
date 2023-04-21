import React, { useState, useEffect } from "react";
import styles from "./MainHeader.module.scss";
import CV from "../../../assets/Kovalenko_CV.pdf";
import Load from "../../../assets/load.svg";
import Check from "../../../assets/check1.svg";
import Smile from "../../../assets/smile1.svg";

export const MainHeader = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [loading]);

  return (
    <header className={styles.mainHeader}>
      <h2>About</h2>
      <div className={styles.mainButtons}>
        <a href={CV} download="Kovalenko_CV">
          <button onClick={() => setLoading(true)}>
            {loading ? (
              <div className={styles.buttonContent}>
                <img src={Check}/>
                <span>Done</span>
                <img src={Smile}/>
              </div>
            ) : (
              <div className={styles.buttonContent}>
                <img src={Load} />
                <span>Download CV</span>
              </div>
            )}
          </button>
        </a>
      </div>
    </header>
  );
};
