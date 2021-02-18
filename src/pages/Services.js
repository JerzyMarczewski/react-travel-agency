import React from "react";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import ThreePhotoBlock from "../components/ThreePhotoBlock/ThreePhotoBlock";
import beachPhoto from "../images/beach.jpg";

const Services = () => {
    return (
        <div>
            <ThreePhotoBlock 
                heading="Services"
                description="We offer a range of services to help you experience the 
                    perfect vacation. Not sure what you need, or what it costs? We can 
                    explain what services are right for you and tell you more about our 
                    fees. Get in touch below."
                path1={beachPhoto}
                heading1="Inspiration"
                text1="Not sure where to go for your next vacation? Our team can help you with this."
                path2={beachPhoto}
                heading2="Private Transport"
                text2="All our tours come with private transportation. Don’t worry about being at 
                    the back of a bus."
                path3={beachPhoto}
                heading3="Amazing Hotels"
                text3="We only provide boutique and luxury hotels. All the hotels are hand-picked 
                    and fully tested."
            />

            <Jumbotron 
                image={beachPhoto}
                heading2="Let’s Travel Together"
                buttonText="Get In Touch"
            />
        </div>
    )
}

export default Services;
