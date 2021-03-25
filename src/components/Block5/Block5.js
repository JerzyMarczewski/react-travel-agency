import React from "react";
import styles from "./Block5.module.css";

/* 
    THIS BLOCK CONTAINS :
        -capital text above heading
        -heading
        -text
*/

const Block5 = () => {
    return (
        <div className={styles.container}>
            <p className={styles.text1}>TAILORED ADVENTURES</p>
            <h1 className={styles.heading}>Every offeer is customizable.</h1>
            <p className={styles.text2}>Adipiscing morbi laoreet ipsum quis tristique eget. Vel non, vitae diam purus. Morbi leo neque mattis eu, non nec id amet, nulla.</p>
        </div>
    )
}

export default Block5;
