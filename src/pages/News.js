import React from "react";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import Post from "../components/Post/Post";
import ThreePhotoBlock from "../components/ThreePhotoBlock/ThreePhotoBlock";
import footer from "../images/footer.jpg";

const News = () => {
    return (
        <div>
            <ThreePhotoBlock 
                heading="News"
            />
            <Post 
                heading="Hotel of the Month: Ubud"
                text="This hotel in Bali, Indonesia is simply magnificent. Located in 
                    the middle of the rainforest you will make one with the nature. 
                    Make sure to book a spa day or a yoga session."
                name="Joan Smith"
                date="August 1, 2019"
            />
            <Post 
                heading="Hiking in Peru"
                text="Peru is a dream destination for hiking and trekking, perfect if 
                    you are looking for an active vacation. You will experience dramatic 
                    landscapes that can only be explored on foot."
                name="Joan Smith"
                date="July 26, 2019"
            />
            <Jumbotron 
                image={footer}
                heading2="Let’s Travel Together"
                buttonText="Get In Touch"
            />
        </div>
    )
}

export default News;
