import React from "react";
import DiscoverBlock from "./components/DiscoverBlock/DiscoverBlock";
import ExploreBlock from "./components/ExploreBlock/ExploreBlock";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import tajMahalPhoto from "./images/taj-mahal.jpg";
import mountainPhoto from "./images/mountain.jpg";

const App = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <ExploreBlock />
            <DiscoverBlock 
                img={tajMahalPhoto}
                heading="Discover Unlimited Beauty"
                text="Meet unique people, cultures, traditions and landscapes. Pick a destination and we will take care of the rest."
            />
            <DiscoverBlock 
            img={mountainPhoto}
            bgPosition="top"
            alt={true}
            heading="What people think"
            text="We really liked it."
            text2=" - Bonnie and Clyde"
            />

        </div>
    )
}

export default App;
