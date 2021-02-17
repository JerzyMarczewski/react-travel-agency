import React from "react";
import styles from "./DiscoverBlock.module.css";

const DiscoverBlock = (props) => {
    return (
        <div className={ props.alt ? styles.containerAlt : styles.container}>
            <div className={styles.discoverImage} 
                style={{backgroundImage: `url(${props.img})`, backgroundPosition: `${props.bgPosition}`}
            }/>
            <div className={styles.discoverText}>
                <h1>{props.heading}</h1>
                <p>{props.text}</p>
                <p className={styles.text2}>{props.text2}</p>
            </div>
        </div>
    )
}

export default DiscoverBlock;
