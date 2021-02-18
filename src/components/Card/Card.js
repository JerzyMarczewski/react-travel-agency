import React from "react";
import styles from "./Card.module.css";
import OffersButton from "../OffersButton/OffersButton";

const Card = (props) => {
    return (
        <div className={styles.container}> 
            <div className={styles.image} style={{backgroundImage: `url(${props.path})`}}></div>
            <h1 className={styles.heading}>{props.heading}</h1>
            <p className={styles.text}>{props.text}</p>
            {props.buttonText ? <OffersButton text={props.buttonText}/> : ""}
        </div>
    )
}

export default Card
