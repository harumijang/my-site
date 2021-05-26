import React, { Component } from "react";
import { H1, H4, BODY } from "../base/fonts";
import cherry from "../assets/space gray.svg";
import country from "../assets/country.svg";
import process from "../assets/process.svg";
import glitch from "../assets/glitch.gif";
import covid from "../assets/covid.png";
import hippo from "../assets/hippo.png";
import { Button, ButtonGroup, ChakraProvider } from "@chakra-ui/react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Switch,
} from "react-router-dom";
import Mixology from "../components/Mixology";

class DESIGN extends Component {
  componentDidMount() {
    document.title = "Design Work";
  }
  render() {
    return (
      <ChakraProvider>
        <div class="container">
          <div class="row">
            <div class="col" style={{ textAlign: "-webkit-center" }}>
              <Link to="/mixology">
                <img id="cherry" style={{ width: "60%" }} src={cherry} />
              </Link>
            </div>
            <div class="col">
              {/* <a href="" target="_blank"> */}
              <H1>MIXOLOGY REDESIGN</H1>
              {/* </a> */}
              <br></br>
              <br></br>
              <BODY>
                For a project in my Interaction Design 2: Mobile class, we were
                tasked to redesign an app of our choice. I chose to redesign the
                drink and cocktail recipe app Mixology.
              </BODY>
              <br></br>
              <br></br>
              <Link to="/mixology">
                <Button
                  style={{ float: "left", marginTop: "15px" }}
                  colorScheme="blue"
                >
                  View project
                </Button>
              </Link>
            </div>
          </div>{" "}
          <br></br>
          <br></br>
          <div class="row">
            <div class="col">
              <img style={{ width: "100%" }} src={process}></img>
            </div>
            <div class="col">
              <H1 style={{ textAlign: "center" }}>PROCESS: RUBIK'S CUBE</H1>
              <br></br>
              <br></br>
              <BODY>
                This project for my Information Design class was to illustrate a
                complex process using limited text. I chose to illustrate the
                process of how a Rubik's Cube is made.
              </BODY>
            </div>
          </div>
          <br></br>
          <br></br>
          <div class="row">
            <div class="col">
              <img style={{ width: "100%" }} src={country}></img>
            </div>
            <div class="col">
              <H1 style={{ textAlign: "center" }}>COUNTRY DATA</H1>
              <br></br>
              <br></br>
              <BODY>
                This final project for my Information Design class was to
                condense over 30 pieces of data about Australia into one
                infographic poster. The challenge of the project was to create
                independent yet cohesive data visualizations, and compile them
                into a digestible and organized poster.
              </BODY>
            </div>
          </div>
          <br></br>
          <br></br>
          <div class="row">
            <div class="col-8">
              <img style={{ width: "100%" }} src={hippo}></img>
            </div>
            <div class="col">
              <H1 style={{ textAlign: "center" }}>HIPPO CAMPUS</H1>
              <br></br>
              <br></br>

              <BODY>
                Facebook banner designed for Northeastern's Live Music
                Association's Hippo Campus virtual concert.
              </BODY>
            </div>
          </div>
          <br></br>
          <br></br>
          <div class="row">
            <div class="col-8">
              <img style={{ width: "100%" }} src={covid}></img>
            </div>
            <div class="col">
              <H1 style={{ textAlign: "center" }}>VIRTUAL PANEL</H1>
              <br></br>
              <br></br>
              <BODY>
                Facebook banner designed for Northeastern's Live Music
                Association's virtual panel event.
              </BODY>
            </div>
          </div>{" "}
          <br></br>
          <br></br>
          <div class="row">
            <div class="col-8">
              <img style={{ width: "100%" }} src={glitch}></img>
            </div>
            <div class="col">
              <H1 style={{ textAlign: "center" }}>FAKE SKATE</H1>
              <br></br>
              <br></br>
              <BODY>Glitch effect using Adobe Photoshop made for fun.</BODY>
            </div>
          </div>{" "}
        </div>
      </ChakraProvider>
    );
  }
}

export default DESIGN;
