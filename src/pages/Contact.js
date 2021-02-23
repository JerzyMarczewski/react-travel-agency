import React from "react";
import ContactForm from "../components/ContactForm/ContactForm";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import ThreePhotoBlock from "../components/ThreePhotoBlock/ThreePhotoBlock";
import footer from "../images/footer.jpg";

const Contact = () => {
    return (
        <div>
            <ThreePhotoBlock 
                heading="Contact"
                description="Let’s talk 👋 Don’t hesitate to reach out with the contact 
                    information below, or send a message using the form."
            />
            <ContactForm />
            <Jumbotron 
                image={footer}
                heading2="Let’s Travel Together"
                buttonText="Get In Touch"
            />
        </div>
    )
}

export default Contact;
