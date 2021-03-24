import React from "react";
import styles from "./Block3.module.css";
import tajMahal from "../../images/Block3-taj-mahal.jpg";

/* 
    THIS BLOCK CONTAINS :
        - heading
        - text
        - big image
*/

const Block3 = () => {
    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h1 className={styles.heading}>Discover Unlimited Beauty</h1>
                <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu justo, metus sagittis morbi. </p>
            </div>
            <div className={styles.image} style={{backgroundImage: `url(${tajMahal})`}}></div>
        </div>
    )
}

export default Block3;
