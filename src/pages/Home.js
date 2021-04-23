import React from "react";

import Hero from "../components/Hero/Hero";
import Block1 from "../components/Block1/Block1";
import Block2 from "../components/Block2/Block2";
import Block3 from "../components/Block3/Block3";
import Block4 from "../components/Block4/Block4";
import Block5 from "../components/Block5/Block5";
import Block6 from "../components/Block6/Block6";
import Footer from "../components/Footer/Footer";

const Home = () => {
    return (
        <div>
            <Hero />
            <Block1 />
            <Block2 />
            <Block3 />
            <Block4 />
            <Block5 />
            <Block6 />
            <Footer />
        </div>
    )
}

export default Home;
