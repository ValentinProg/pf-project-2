import React from "react";
import styles from "./SideBarContacts.module.scss";
import { ReactComponent as Github } from "../../../assets/github.svg";
import { ReactComponent as Linkedin } from "../../../assets/linkedin.svg";
import { ReactComponent as Telegram } from "../../../assets/telegram.svg";

export const SideBarContacts = () => {
  return (
    <div className={styles.sideBarContacts}>
      <a href="https://github.com/ValentinProg">
        <Github className={styles.github} />
      </a>
      <a href="https://linkedin.com/in/valkovalenko">
        <Linkedin className={styles.linkedin} />
      </a>
      <a href="https://t.me/ValentinKovalenko">
        <Telegram className={styles.telegram} />
      </a>
    </div>
  );
};
