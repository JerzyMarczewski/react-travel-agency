import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {

    

    const [hiddenOptions, setHiddenOptions] = useState(true);

    const handleMenuClick = () => {
        setHiddenOptions(!hiddenOptions);
    }

    const handleResize = () => {
        if (window.innerWidth >= 768){
            setHiddenOptions(false);
        } else {
            setHiddenOptions(true);
        }
    }

    useEffect(handleResize,[]);

    window.addEventListener('resize', handleResize);

    return (
        <div className={styles.container}>
            <h1 className={styles.name}>Viaggio</h1>
            <p className={styles.motto}>Luxury Vacations</p>
            <button className={styles.btn} onClick={handleMenuClick}>Menu{ hiddenOptions ? '+' : '-' }</button>
            <nav className={hiddenOptions ? styles.options && styles.hidden : styles.options }>
                <h6>Home</h6>
                <h6>Services</h6>
                <h6>About</h6>
                <h6>Team</h6>
                <h6>News</h6>
                <h6>Contacta</h6>
            </nav>
            <div className={styles.icons}>
                <i class="fab fa-facebook-square" />
                <i class="fab fa-twitter" />
                <i class="fab fa-instagram" />
                <i class="fab fa-snapchat-ghost" />
                <i class="fab fa-tumblr"/>
            </div>
        </div>
    )
}

export default Navbar;
