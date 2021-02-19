import React from "react";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import PersonCard from "../components/PersonCard/PersonCard";
import employee from "../images/employee.jpg";
import employee2 from "../images/employee2.jpg";
import employee3 from "../images/employee3.jpg";
import footer from "../images/footer.jpg";

const Team = () => {
    return (
        <div>
            <div style={{margin: "60px"}} />
            <PersonCard       
                image={employee}
                name="Joan Smith"
                role="Product Director"
                description="With 15+ years of experience in the travel industry, Joan 
                    has travelled around the world more than once."
            />
            <PersonCard 
                alt
                image={employee2}
                name="Jake Miller"
                role="Travel Specialist"
                description="Jake is passionate about travelling, hiking and discovering 
                    new places."
            />
            <PersonCard       
                image={employee3}
                name="Amy Park"
                role="Senior Travel Specialist"
                description="Having been lucky enough to have visited 120 of our featured 
                    hotels across 24 destinations, Amy’s knowledge and expertise are invaluable."
            />
            <div style={{margin: "100px"}} />
            <Jumbotron
                image={footer}
                heading2="Let’s Travel Together"
                buttonText="Get In Touch"
            />
        </div>
    )
}

export default Team;
