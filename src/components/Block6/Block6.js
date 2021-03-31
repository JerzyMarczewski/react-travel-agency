import React from "react";
import WideCard from "../WideCard/WideCard";
import styles from "./Block6.module.css";
import papyrus from "../../images/papyrus-dark.png";
import spain from "../../images/Block6-spain.jpg";
import france from "../../images/Block6-france.jpg";
import croatia from "../../images/Block6-croatia.jpg";

/* 
    THIS BLOCK CONTAINS :
        -heading
        -wide cards
*/

const Block6 = () => {
    return (
        <div className={styles.container} style={{backgroundImage: `url(${papyrus})`}}>
            <h1 className={styles.heading}>Last minute offers.</h1>
            <div className={styles.cardsContainer}>
                <WideCard 
                    image={spain}
                    heading="Spain"
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Et, praesentium? Numquam voluptate velit atque necessitatibus 
                        earum ea esse iste beatae!"
                    buttonValue="from $749"
                />
                
                <WideCard 
                    image={croatia}
                    heading="Croatia"
                    text="Quod, culpa! Deserunt, eos sint velit quia, magnam eveniet in 
                        harum dolores odit eum reiciendis odio similique aliquam minima id 
                        nam corrupti!"
                    buttonValue="from $499"
                />
                <WideCard 
                    image={france}
                    heading="France"
                    text="Maiores deleniti consectetur accusamus alias assumenda, sequi iure 
                        eos eius voluptas culpa quis reprehenderit porro aliquam quam."
                    buttonValue="from $1199"
                />
                
            </div>
        </div>
    )
}

export default Block6;
