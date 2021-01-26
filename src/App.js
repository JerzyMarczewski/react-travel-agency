import React from "react";
import DiscoverBlock from "./components/DiscoverBlock/DiscoverBlock";
import ExploreBlock from "./components/ExploreBlock/ExploreBlock";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <ExploreBlock />
            <DiscoverBlock />
        </div>
    )
}

export default App;
