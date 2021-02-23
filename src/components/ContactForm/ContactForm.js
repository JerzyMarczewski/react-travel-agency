import React from "react";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <h2 className={styles.infoHeading}>Get in Touch</h2>
                <p>10 Street Road</p>
                <p>City, 10100</p>
                <p>USA</p>
                <p className={styles.link}>mail@example.com</p>
                <p className={styles.link}>(555) 555 1234</p>
            </div>
            <div className={styles.formContainer}>
                <h2 className={styles.formHeading}>Send Us a Message</h2>
                <form>
                    <label for="name"><b>Name</b> (required)</label>
                    <br />
                    <input type="text" id="name" name="name" />
                    <br/>
                    <label for="email"><b>Email</b> (required)</label>
                    <br />
                    <input type="text" id="email" name="email" />
                    <br/>
                    <label for="phone"><b>Phone</b> (required)</label>
                    <br />
                    <input type="text" id="phone" name="phone" />
                    <br/>
                    <label for="message"><b>Message</b> (required)</label>
                    <br />
                    <textarea id="message" name="message" />
                    <button className={styles.button}>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default ContactForm;
