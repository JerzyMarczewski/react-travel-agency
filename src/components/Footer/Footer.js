import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.topContainer}>
                <div className={styles.about}>
                    <h1 className={styles.aboutHeading}>About Viaggio</h1>
                    <ul>
                        <li>About us</li>
                        <li>Contact us</li>
                        <li>Awards</li>
                        <li>FAQ</li>
                    </ul>
                </div>
                <div className={styles.newsletter}>
                    <h1 className={styles.newsletterHeading}>Apply for the newsletter</h1>

                    <div className={styles.inputContainer}>
                        <input type="text" placeholder="Your email..."></input>
                        <div className={styles.inputButton}>
                            <i class="fas fa-envelope"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.bottomContainer}>
                <div className={styles.rights}>© Viaggio. All rights reserved.</div>
                <div className={styles.icons}>
                    <i class="fab fa-facebook" />
                    <i class="fab fa-twitter" />
                    <i class="fab fa-instagram" />
                </div>
            </div>
        </div>
    )
}

export default Footer;
