import React from "react";
import styles from "./WideCard.module.css";
import PillButton from "../PillButton/PillButton";

const WideCard = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.image} style={{backgroundImage: `url(${props.image})`}} />
            <div className={styles.textContainer}>
                <h1 className={styles.heading}>{props.heading}</h1>
                <p className={styles.text}>{props.text}</p>
                <PillButton value={props.buttonValue}/>
            </div>
        </div>
        
    )
}

export default WideCard;
