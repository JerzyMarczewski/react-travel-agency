import React from "react";
import styles from "./Block2.module.css";
import italy from "../../images/Block2-italy.jpg";
import jamaica from "../../images/Block2-jamaica.jpg";
import kenya from "../../images/Block2-kenya.jpg";
import mexico from "../../images/Block2-mexico.jpg";
import PillButton from "../PillButton/PillButton";

/* 
    THIS BLOCK CONTAINS :
        - wave in the background
        - heading
        - text
        - four images
        - button
*/

const Block2 = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>Upcoming Tours and Destinations</h1>
            <p className={styles.text}>From exotic places to ski resorts, the list is almost endless and we have an offer for you.</p>
            <div className={styles.imagesContainer}>
                <div className={styles.imageContainer}>
                    <div src={italy} alt="..." className={styles.image} style={{backgroundImage: `url(${italy})`}} />
                    <div className={styles.overlay}>
                        <p className={styles.imageText}>San Quirico d'Orcia, Italy</p>
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <div src={kenya} alt="..." className={styles.image} style={{backgroundImage: `url(${kenya})`}} />
                    <div className={styles.overlay}>
                        <p className={styles.imageText}>Amboseli National Park, Kenya</p>
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <div src={jamaica} alt="..." className={styles.image} style={{backgroundImage: `url(${jamaica})`}} />
                    <div className={styles.overlay}>
                        <p className={styles.imageText}>Ocho Rios, Jamaica</p>
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <div src={mexico} alt="..." className={styles.image} style={{backgroundImage: `url(${mexico})`}} />
                    <div className={styles.overlay}>
                        <p className={styles.imageText}>San Miguel de Allende, Mexico</p>
                    </div>
                </div>
                

            </div>
            <PillButton value="Offers" />
        </div>
    )
}

export default Block2;
