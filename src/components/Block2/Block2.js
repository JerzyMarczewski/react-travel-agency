import React from "react";
import styles from "./Block2.module.css";
import woods from "../../images/woods.jpg";
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
            <div className={styles.imageContainer}>
                <div className={styles.imgBox}><img src={woods} alt="..." className={styles.img}/></div>
                <div className={styles.imgBox}><img src={woods} alt="..." className={styles.img}/></div>
                <div className={styles.imgBox}><img src={woods} alt="..." className={styles.img}/></div>
                <div className={styles.imgBox}><img src={woods} alt="..." className={styles.img}/></div>
            </div>
            <PillButton value="More Offers" />
        </div>
    )
}

export default Block2;
