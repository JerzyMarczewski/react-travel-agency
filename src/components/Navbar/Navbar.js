import React, { useState} from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
    
    const [hamburgerClicked, setHamburgerClicked] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);
    const [y,setY] = useState(window.scrollY);
    window.addEventListener('resize', () => {
        setWidth(window.innerWidth); 
        setHamburgerClicked(false);
    });
    window.addEventListener('scroll', () => setY(window.scrollY));


    return (
        <div className={ y > 0 ? styles.navbar : `${styles.navbar} ${styles.alternative}`}>
            <div className={styles.logo}>Viaggio<span>.</span></div>
            <div className={ hamburgerClicked ? `${styles.hamburger} ${styles.clicked}` : styles.hamburger} 
                onClick={() => setHamburgerClicked(!(hamburgerClicked))}>
                <div className={styles.line} />
            </div>
            <div className={ hamburgerClicked ? styles.options : `${styles.options} ${styles.hidden}` }>
                <Link className={ y > 0 ? styles.option : `${styles.option} ${styles.alternative}`} to="/">Home</Link>
                <Link className={ y > 0 ? styles.option : `${styles.option} ${styles.alternative}`} to="/services">Services</Link>
                <Link className={ y > 0 ? styles.option : `${styles.option} ${styles.alternative}`}>About</Link>
                <Link className={ y > 0 ? styles.option : `${styles.option} ${styles.alternative}`}>Team</Link>
                <Link className={ y > 0 ? styles.option : `${styles.option} ${styles.alternative}`}>News</Link>
                <Link className={ y > 0 ? styles.option : `${styles.option} ${styles.alternative}`}>Contact</Link>
            </div>
        </div>
    )
}

export default Navbar;
