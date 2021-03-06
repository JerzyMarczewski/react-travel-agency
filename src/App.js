import React from "react";
import {
    BrowserRouter,
    Switch,
    Route
} from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import "./App.css";


import Home from "./pages/Home.js";
// import Services from "./pages/Services.js";
// import About from "./pages/About";
// import Team from "./pages/Team";
// import News from "./pages/News";
// import Contact from "./pages/Contact";

  const App = () => {

      return (
          
        <BrowserRouter>
            <Navbar />
            

            <Switch>
                {/* <Route path="/services" render={Services}/> */}
                {/* <Route path="/about" render={About}/>
                <Route path="/team" render={Team}/>
                <Route path="/news" render={News}/>
                <Route path="/contact" render={Contact}/> */}
                <Route path="/" render={Home}/>
            </Switch>
            




        </BrowserRouter>
    )
}

export default App;
