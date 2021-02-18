import React from "react";
import styles from "./Card.module.css";
import OffersButton from "../OffersButton/OffersButton";

const Card = (props) => {
    return (
        <div className={styles.container}> 
            <div className="image" style={{backgroundImage: `url(${props.path})`}}></div>
            <h1>{props.heading}</h1>
            <p>{props.text}</p>
            <OffersButton text={props.buttonText}/>
        </div>
    )
}

export default Card
