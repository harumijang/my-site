import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import React, { useEffect } from "react";
import { NavLink as Link } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Work from "./components/Work";
import logo from "./assets/logo.png";
import { ChakraProvider } from "@chakra-ui/react";

import "./App.css";
import CODING from "./components/Coding";
import DESIGN from "./components/Design";
import Photos from "./components/Photos";
import Mixology from "./components/Mixology";
import resume from "./assets/resume.pdf";
import { FaBars } from "react-icons/fa";

function App() {
  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  // useEffect(() => {
  //   myFunction();
  // }, []);

  return (
    <div className="App">
      <Router>
        <div class="row">
          <Link to="/">
            <img id="logo" src={logo}></img>
          </Link>
          <div class="topnav" id="myTopnav">
            <NavLink activeStyle={{ color: "#eeba00" }} to="/about">
              <a>About</a>
            </NavLink>
            <NavLink activeStyle={{ color: "#eeba00" }} to="/work">
              <a>Work</a>
            </NavLink>
            <NavLink activeStyle={{ color: "#eeba00" }} to="/photos">
              <a>Photos</a>
            </NavLink>
            <a href={resume} target="_blank" rel="noopener noreferrer">
              Resume
            </a>
            <a
              href="javascript:void(0);"
              class="icon"
              onClick={() => myFunction()}
            >
              <FaBars />
            </a>{" "}
          </div>
        </div>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/work" component={Work} />
        <Route path="/photos" component={Photos} />
        <Route path="/mixology" component={Mixology} />
      </Router>
    </div>
  );
}

export default App;
