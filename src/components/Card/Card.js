import React from "react";
import styles from "./Card.module.css";

const Card = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.avatarContainer}>
                <div className={styles.avatar} style={{backgroundImage: `url(${props.avatar})`}}></div>
            </div>
            <div className={styles.textContainer}>
                <p className={styles.text}>{props.text}</p>
            </div>
        </div>
        
    )
}

export default Card;
