import {
  BrowserRouter as Router,
  Route,
  // Link,
  NavLink,
  Switch,
} from "react-router-dom";
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

function App() {
  return (
    <div className="App">
      <Router>
        <div class="row">
          <Link to="/">
            <img id="logo" src={logo}></img>
          </Link>
          <div class="topnav">
            <NavLink activeStyle={{ color: "#eeba00" }} to="/about">
              <a>About</a>
            </NavLink>
            <NavLink activeStyle={{ color: "#eeba00" }} to="/work">
              <a>Work</a>
            </NavLink>
            <NavLink activeStyle={{ color: "#eeba00" }} to="/photos">
              <a>Photos</a>
            </NavLink>
            <a>Resume</a>
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
