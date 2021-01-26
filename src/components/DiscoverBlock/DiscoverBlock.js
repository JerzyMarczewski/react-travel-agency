import React from "react";
import styles from "./DiscoverBlock.module.css";

const DiscoverBlock = () => {
    return (
        <div className={styles.container}>
            <div className={styles.discoverImage} />
            <div className={styles.discoverText}>
                <h1>Discover Unlimited Beauty</h1>
                <p>Meet unique people, cultures, traditions and landscapes. Pick a destination and we will take care of the rest.</p>
            </div>
        </div>
    )
}

export default DiscoverBlock;
