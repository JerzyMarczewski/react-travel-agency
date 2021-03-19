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
            {/* <Switch>
                <Route path="/services" render={Services}/>
                <Route path="/about" render={About}/>
                <Route path="/team" render={Team}/>
                <Route path="/news" render={News}/>
                <Route path="/contact" render={Contact}/>
                <Route path="/" render={Home}/>
            </Switch> */}
            <div className="bg"></div>




        </BrowserRouter>
    )
}

export default App;
