import React from "react";
import styles from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>{props.heading}</h1>
            <p className={styles.text}>{props.text}</p>
            <pre className={styles.info}>{`by ${props.name}     ${props.date}`}</pre>
        </div>
    )
}

export default Post;
