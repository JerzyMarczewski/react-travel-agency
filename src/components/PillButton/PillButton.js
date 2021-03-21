import React from "react";
import styles from"./PillButton.module.css";

const PillButton = (props) => {
    return (
        <div>
            <button className={
                props.transparent 
                    ? `${styles.button} ${styles.transparent}`
                    : styles.button
            }>{props.value}</button>
        </div>
    )
}

export default PillButton;
