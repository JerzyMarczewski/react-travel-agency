import React from "react";

import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Services from "./pages/Services.js";
import Home from "./pages/Home";

  const App = () => {
      return (
        <BrowserRouter>
            <Navbar />
            
            <Switch>
                <Route path="/services" render={Services}/>
                <Route path="/about" />
                <Route path="/team" />
                <Route path="/news" />
                <Route path="/contact" />
                <Route path="/" render={Home}/>
            </Switch>




        </BrowserRouter>
    )
}

export default App;
