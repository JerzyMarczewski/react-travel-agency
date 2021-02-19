import React from "react";

import {
    BrowserRouter,
    Switch,
    Route
} from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Services from "./pages/Services.js";
import Home from "./pages/Home";
import About from "./pages/About";
import Team from "./pages/Team";

  const App = () => {
      return (
        <BrowserRouter>
            <Navbar />
            
            <Switch>
                <Route path="/services" render={Services}/>
                <Route path="/about" render={About}/>
                <Route path="/team" render={Team}/>
                <Route path="/news" />
                <Route path="/contact" />
                <Route path="/" render={Home}/>
            </Switch>




        </BrowserRouter>
    )
}

export default App;
