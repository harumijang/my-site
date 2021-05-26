import React, { Component } from "react";
import CODING from "./Coding";
import DESIGN from "./Design";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

class Work extends Component {
  constructor() {
    super();
    this.state = {
      showHideCODING: true,
      showHideDESIGN: false,
    };
    this.hideComponent = this.hideComponent.bind(this);
  }

  hideComponent(name) {
    console.log(name);
    switch (name) {
      case "showHideCODING":
        this.setState({
          showHideCODING: true,
          showHideDESIGN: false,
        });
        break;
      case "showHideDESIGN":
        this.setState({
          showHideCODING: false,
          showHideDESIGN: true,
        });
        break;
      default:
        return null;
    }
  }

  render() {
    const { showHideCODING, showHideDESIGN } = this.state;
    const activeStyle = { color: "#eeba00" };

    return (
      <>
        <div class="worknav">
          <NavLink to="/work/coding">
            <a
              id="codingHover"
              style={this.state.showHideCODING ? activeStyle : {}}
              onClick={() => this.hideComponent("showHideCODING")}
            >
              Coding
            </a>
          </NavLink>
          <NavLink to="/work/design">
            <a
              id="designHover"
              style={this.state.showHideDESIGN ? activeStyle : {}}
              onClick={() => this.hideComponent("showHideDESIGN")}
            >
              Design
            </a>
          </NavLink>
        </div>
        <div>
          {showHideCODING && <CODING />}
          {showHideDESIGN && <DESIGN />}
        </div>
      </>
    );
  }
}

export default Work;
