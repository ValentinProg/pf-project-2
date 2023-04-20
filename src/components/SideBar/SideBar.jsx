import React from "react";
import styles from './SideBar.module.scss'
import { SideBarInfo } from "./SideBarInfo/SideBarInfo";
import { SideBarContacts } from "./SideBarContacts/SideBarContacts";


export const SideBar = () => {
  return (
    <aside className={styles.sideBar}>
      <SideBarInfo />
      <SideBarContacts/>
    </aside>
  );
};
