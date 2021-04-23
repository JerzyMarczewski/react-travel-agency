import React from "react";
import styles from "./PhotoCard.module.css";

const Card = (props) => {
    return (
        <div className={styles.container}> 
            {props.path
                ? <div className={styles.image} style={{backgroundImage: `url(${props.path})`}} />
                : ""
            }
            
            <h1 className={styles.heading}>{props.heading}</h1>
            <p className={styles.text}>{props.text}</p>
            {props.buttonText ? <OffersButton text={props.buttonText}/> : ""}
        </div>
    )
}

export default Card;