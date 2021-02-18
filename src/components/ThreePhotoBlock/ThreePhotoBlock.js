import React from "react";
import styles from "./ThreePhotoBlock.module.css";
import Card from "../Card/Card";


const ThreePhotoBlock = (props) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>{props.heading}</h1>
            <p className={styles.description}>{props.description}</p>
            <div className={styles.cardsContainer}>
                <Card 
                    path={props.path1}
                    heading={props.heading1}
                    text={props.text1}
                    buttonText={props.buttonText1}
                />
                <Card 
                    path={props.path2}
                    heading={props.heading2}
                    text={props.text2}
                    buttonText={props.buttonText2}
                />
                <Card 
                    path={props.path3}
                    heading={props.heading3}
                    text={props.text3}
                    buttonText={props.buttonText3}
                />
                
            </div>
        </div>
    )
}

export default ThreePhotoBlock;
