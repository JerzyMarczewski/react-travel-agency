import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    
    const [hamburgerClicked, setHamburgerClicked] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);
    window.addEventListener('resize', () => setWidth(window.innerWidth));


    return (
        <div className="navbar">
            <div className="logo">{width}</div>
            <div className={hamburgerClicked ? "hamburger clicked" : "hamburger"} onClick={() => setHamburgerClicked(!(hamburgerClicked))}>
                <div className="line"></div>
            </div>
            {/* <div className="options">
                <Link>Home</Link>
                <Link>Services</Link>
                <Link>About</Link>
                <Link>Team</Link>
                <Link>News</Link>
                <Link>Contact</Link>
            </div> */}
        </div>
    )
}

export default Navbar;
