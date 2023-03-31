import React from "react";

import { Icon } from "@iconify/react";
import compassRose from "@iconify-icons/mdi/compass-rose";

import styles from "./Hero.module.css";
import PillButton from "../PillButton/PillButton";

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heroText}>
        <Icon className={styles.icon} icon={compassRose} />
        <h1>Adventure Awaits</h1>
        <PillButton transparent value="Explore Offers" />
      </div>
    </div>
  );
};

export default Hero;
