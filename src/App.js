import React from "react";
import ExploreBlock from "./components/ExploreBlock/ExploreBlock";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <ExploreBlock />
        </div>
    )
}

export default App;
