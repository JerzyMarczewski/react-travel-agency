import React from "react";
import styles from "./PersonCard.module.css";

const PersonCard = (props) => {
    return (
        <div className={ props.alt ? styles.containerAlt : styles.container}>
            <div className={styles.image} style={{backgroundImage: `url(${props.image})`}} />
            <div className={styles.textContainer}>
                <h1 className={styles.name}>{props.name}</h1>
                <h6 className={styles.role}>{props.role}</h6>
                <p className={styles.description}>{props.description}</p>
            </div>
        </div>
    )
}

export default PersonCard;
