import React from "react";
import styles from "./Block1.module.css";
import woods from "../../images/woods.jpg";

// This block contains an image with a heading overlaping it and some text next to it

const Block1 = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <img src={woods} alt="..."/>
            </div>
            <div className={styles.textContainer}>
                <h1>Explore the world.</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        </div>
    )
}

export default Block1
