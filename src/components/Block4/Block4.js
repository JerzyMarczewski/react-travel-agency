import React from "react";
import Card from "../Card/Card";
import styles from "./Block4.module.css";
import person1 from "../../images/Block4-person1.jpg";
import person2 from "../../images/Block4-person2.jpg";
import person3 from "../../images/Block4-person3.jpg";

/* 
    THIS BLOCK CONTAINS :
        -heading
        -three cards that contain :
            -image
            -description
*/

const Block4 = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>What people think.</h1>
            <div className={styles.cardsContainer}>
                <Card avatar={person1} text="Ornare magna in sit in velit imperdiet. Vulputate 
                    ipsum pellentesque pellentesque nec ultricies commodo posuere volutpat. 
                    Risus dolor adipiscing turpis lacus, tincidunt porttitor massa."/>
                <Card avatar={person2} text="Impedit vero nulla esse voluptatibus modi sapiente 
                    temporibus commodi sed sequi quaerat, repudiandae dolores ipsam nisi quo 
                    fugit nihil corporis exercitationem aut?"/>
                <Card avatar={person3} text="Incidunt ipsum quis tempora debitis impedit 
                    necessitatibus, ut ducimus nihil quas. Iure minima consequatur fugit 
                    molestiae quis delectus earum accusantium eos? Dicta." />
            </div>
        </div>
    )
}

export default Block4;
