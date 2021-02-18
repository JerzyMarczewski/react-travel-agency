import React from "react";
import styles from "./MultiPhotoBlock.module.css";
import OffersButton from "../OffersButton/OffersButton.js";

const MultiPhotoBlock = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h1>Upcoming Tours and Destinations</h1>
                <p>From exotic places to ski resorts, the list is almost endless and we have an offer for you.</p>
                <OffersButton text="Explore Our Offers" />
            </div>
            <div className={styles.imageContainer}>
                <div className={styles.image} style={{backgroundImage: `url(${props.image1})`}} />
                <div className={styles.image} style={{backgroundImage: `url(${props.image2})`}} />
                <div className={styles.image} style={{backgroundImage: `url(${props.image3})`}} />
                <div className={styles.image} style={{backgroundImage: `url(${props.image4})`}} />
            </div>

            
        </div>
    )
}

export default MultiPhotoBlock;
