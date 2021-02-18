import React from "react";
import OffersButton from "../OffersButton/OffersButton";
import styles from "./Hero.module.css";

const Hero = () => {
    return (
        <div className={styles.heroImage}>
            <div className={styles.heroText}>
                <h1>Adventure Awaits</h1>
                <p>Viaggio is where your journey begins. Please be sure to explore all our offers to plan your perfect vacation.</p>
                <OffersButton white text="Explore Our Offers"/>
            </div>
            
        </div>
    )
}

export default Hero;
