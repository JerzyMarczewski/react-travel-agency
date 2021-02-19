import React from "react";
import DiscoverBlock from "../components/DiscoverBlock/DiscoverBlock.js";
import ExploreBlock from "../components/ExploreBlock/ExploreBlock";
import Hero from "../components/Hero/Hero";
import tajMahalPhoto from "../images/taj-mahal.jpg";
import mountainPhoto from "../images/mountain.jpg";
import palmsPhoto from "../images/palms.jpg";
import beachPhoto from "../images/beach.jpg";
import MultiPhotoBlock from "../components/MultiPhotoBlock/MultiPhotoBlock";
import ThreePhotoBlock from "../components/ThreePhotoBlock/ThreePhotoBlock";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import greecePhoto from "../images/greece.jpg";
import mexicoPhoto from "../images/mexico.jpg";
import thailandPhoto from "../images/thailand.jpg";
import footer from "../images/footer.jpg";

const Home = () => {
    return (
        <div>
            <Hero />
            <ExploreBlock />
            <DiscoverBlock 
                img={tajMahalPhoto}
                heading="Discover Unlimited Beauty"
                text="Meet unique people, cultures, traditions and landscapes. Pick a destination and we will take care of the rest."
            />
            <MultiPhotoBlock 
                image1={beachPhoto}
                image2={mountainPhoto}
                image3={palmsPhoto}
                image4={tajMahalPhoto}
            />
            <DiscoverBlock 
            img={mountainPhoto}
            bgPosition="top"
            alt={true}
            heading="What people think"
            text="We really liked it."
            text2=" - Bonnie and Clyde"
            />
            <ThreePhotoBlock 
                heading="Special Deals and Last-Minute Offers"
                description="Book a unique tour at a great price! Grab a last-minute 
                    offer and start packing for your memorable vacation."
                path1={mexicoPhoto}
                heading1="Aztec Adventure"
                text1="Explore ancient pyramids in Mexico."
                buttonText1="From $900"
                path2={greecePhoto}
                heading2="Discover Greece"
                text2="Visit Santorini and learn about its architecture and history."
                buttonText2="From $650"
                path3={thailandPhoto}
                heading3="Explore Thailand"
                text3="Indulge by the beach and relax with a massage."
                buttonText3="From $1200"
            />
            <Jumbotron 
                image={footer}
                heading1="Exclusive Offer"
                heading2="Get 20% Off Your First Trip"
                text="Who doesn’t like a discount? Book with us your first trip today and receive an exclusive offer."
                buttonText="Explore Our Offers"
            />
        </div>
    )
}

export default Home;
