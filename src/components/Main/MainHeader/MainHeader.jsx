import React, { useState, useEffect } from "react";
import styles from "./MainHeader.module.scss";
import CV from "../../../assets/Kovalenko_CV.pdf";
import Load from "../../../assets/load.svg";
import PulseLoader from "react-spinners/PulseLoader";

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
                <PulseLoader color={"white"} size={5} />
                <span>Loading</span>
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
