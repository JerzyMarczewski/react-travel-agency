import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

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
        <div className={ y > 0 ? "navbar" : "navbar alternative"}>
            <div className="logo">Viaggio<span>.</span></div>
            <div className={ hamburgerClicked ? "hamburger clicked" : "hamburger"} onClick={() => setHamburgerClicked(!(hamburgerClicked))}>
                <div className="line"></div>
            </div>
            <div className={ hamburgerClicked ? "options" : "options hidden" }>
                <Link className={ y > 0 ? "option" : "option alternative"}>Home</Link>
                <Link className={ y > 0 ? "option" : "option alternative"}>Services</Link>
                <Link className={ y > 0 ? "option" : "option alternative"}>About</Link>
                <Link className={ y > 0 ? "option" : "option alternative"}>Team</Link>
                <Link className={ y > 0 ? "option" : "option alternative"}>News</Link>
                <Link className={ y > 0 ? "option" : "option alternative"}>Contact</Link>
            </div>
        </div>
    )
}

export default Navbar;
