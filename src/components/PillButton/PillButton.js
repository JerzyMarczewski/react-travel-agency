import React from "react";
import "./PillButton.css"

const PillButton = (props) => {
    return (
        <div>
            <button className={props.transparent ? "button transparent" : "button"}>{props.value}</button>
        </div>
    )
}

export default PillButton;
