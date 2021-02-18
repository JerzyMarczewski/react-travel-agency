import React from "react";
import styles from "./Jumbotron.module.css";
import OffersButton from "../OffersButton/OffersButton.js";

const Jumbotron = (props) => {
    return (
        <div className={styles.container} style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(${props.image})`}}>
            <h1 className={styles.heading1}>{props.heading1}</h1>
            <h1 className={styles.heading2}>{props.heading2}</h1>
            <p className={styles.text}>{props.text}</p>
            {props.buttonText ? <OffersButton text={props.buttonText} white/> : ""}
        </div>
    )
}

export default Jumbotron;
