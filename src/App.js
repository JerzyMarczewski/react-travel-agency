import React from "react";
import {
    BrowserRouter,
    Switch,
    Route
} from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import PillButton from "./components/PillButton/PillButton";
import Hero from "./components/Hero/Hero";
import Block1 from "./components/Block1/Block1";
import Block2 from "./components/Block2/Block2";
import Block3 from "./components/Block3/Block3";
import Block4 from "./components/Block4/Block4";
import Block5 from "./components/Block5/Block5";
import Block6 from "./components/Block6/Block6";
// import Services from "./pages/Services.js";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Team from "./pages/Team";
// import News from "./pages/News";
// import Contact from "./pages/Contact";

  const App = () => {

      return (
          
        <BrowserRouter>
            <Navbar />
            {/* <div style={{height: "6rem"}}></div> */}
            <Hero></Hero>
            <Block1 />
            <Block2 />
            <Block3 />
            <Block4 />
            <Block5 />
            <Block6 />
            {/* <Switch>
                <Route path="/services" render={Services}/>
                <Route path="/about" render={About}/>
                <Route path="/team" render={Team}/>
                <Route path="/news" render={News}/>
                <Route path="/contact" render={Contact}/>
                <Route path="/" render={Home}/>
            </Switch> */}
            




        </BrowserRouter>
    )
}

export default App;
