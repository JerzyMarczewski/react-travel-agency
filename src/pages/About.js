import React from "react";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import ThreePhotoBlock from "../components/ThreePhotoBlock/ThreePhotoBlock";
import beachPhoto from "../images/beach.jpg";

const About = () => {
    return (
        <div>
            <ThreePhotoBlock 
                heading="About"
                description="Exford is not your average travel agency. For over ten years 
                    we have been creating tailor-made vacations. We have thousands of happy 
                    customers all around the world."
                heading1="Tailored"
                text1="Every vacation we create is unique and tailored just for you. Tell 
                    us where you want to go and we will take care of the rest."
                heading2="Quality"
                text2="We hand-select the hotels and activities that we work with regularly."
                heading3="Philosophy"
                text3="Our philosophy is simple: wanderlust. It reflects in our selection of 
                    exquisite boutique hotels."
            />

            <Jumbotron 
                image={beachPhoto}
                heading2="Let’s Travel Together"
                buttonText="Get In Touch"
            />
        </div>
    )
}

export default About;
