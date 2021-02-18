import React from "react";
import OffersButton from "../OffersButton/OffersButton";
import styles from "./ExploreBlock.module.css";

const ExploreBlock = () => {
    return (
        <div className={styles.container}>
            <div className={styles.exploreImage} />
            <div className={styles.exploreText}>
                <h1>Explore the world</h1>
                <p>Amazing adventures around the world are waiting for you. Treat yourself and see our offers.</p>
                <OffersButton text="Explore Our Offers" />
            </div>
            
        </div>
    )
}

export default ExploreBlock;
