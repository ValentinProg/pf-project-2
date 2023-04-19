import React from "react";
import styles from "./Main.module.scss";
import { MainHeader } from "./MainHeader/MainHeader";
import { MainSkills } from "./MainSkills/MainSkills";
import { MainWork } from "./MainWork/MainWork";

export const Main = () => {
  return (
    <div className={styles.main}>
      <MainHeader />
      <MainSkills />
      <MainWork />
    </div>
  );
};
