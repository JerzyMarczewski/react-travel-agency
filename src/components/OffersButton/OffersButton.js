import React from "react";
import styles from "./OffersButton.module.css";

const OffersButton = (props) => {
    // 
    return (
        <button className={props.white ? styles.white : styles.default}>Explore Offers</button>
    )
}

export default OffersButton;