import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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

    window.addEventListener("resize", handleResize);

    return (
        <div className={styles.container}>
            <Link to="/"><h1 className={styles.name}>Viaggio</h1></Link>
            <p className={styles.motto}>Vacations just for you</p>
            <button className={styles.btn} onClick={handleMenuClick}>Menu{ hiddenOptions ? "+" : "-" }</button>
            <nav className={hiddenOptions ? styles.options && styles.hidden : styles.options }>
                <h6><Link to="/">Home</Link></h6>
                <h6><Link to="/services">Services</Link></h6>
                <h6><Link to="/about">About</Link></h6>
                <h6><Link to="/team">Team</Link></h6>
                <h6><Link to="/news">News</Link></h6>
                <h6><Link to="/contact">Contact</Link></h6>
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
