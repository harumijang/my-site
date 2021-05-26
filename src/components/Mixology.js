import React, { Component } from "react";
import { H1, H4, BODY } from "../base/fonts";
import cherry from "../assets/space gray.svg";
import og1 from "../assets/og1.png";
import og2 from "../assets/og2.png";
import og3 from "../assets/og3.png";
import og4 from "../assets/og4.png";
import og5 from "../assets/og5.png";
import og6 from "../assets/og6.png";
import mix1_1 from "../assets/1_1.svg";
import mix1_2 from "../assets/1_2.svg";
import mix1_3 from "../assets/1_3.svg";
import mix2_1 from "../assets/2_1.svg";
import mix2_2 from "../assets/2_2.svg";
import mix2_3 from "../assets/2_3.svg";
import mix3_1 from "../assets/3_1.svg";
import mix3_2 from "../assets/3_2.svg";
import mix3_3 from "../assets/3_3.svg";
import mix4_1 from "../assets/4_1.svg";
import mix4_2 from "../assets/4_2.svg";
import mix4_3 from "../assets/4_3.svg";
import mix5_1 from "../assets/5_1.svg";
import mix5_2 from "../assets/5_2.svg";
import mix5_3 from "../assets/5_3.svg";
import mix6_1 from "../assets/6_1.svg";
import mix6_2 from "../assets/6_2.svg";
import mix6_3 from "../assets/6_3.svg";
import { Redirect } from "react-router";

class Mixology extends Component {
  componentDidMount() {
    document.title = "Redesign: Mixology";
  }

  render() {
    return (
      <div class="container">
        <h2>Original Mixology App</h2>
        <h6>Mixology is a drink and cocktail recipe app.</h6>
        <br></br>
        <div class="row">
          <div class="col">
            <img style={{ width: "100%" }} src={og1} />
          </div>
          <div class="col">
            <img style={{ width: "100%" }} src={og2} />
          </div>
          <div class="col">
            <img style={{ width: "100%" }} src={og3} />
          </div>
          <div class="col">
            <img style={{ width: "100%" }} src={og4} />
          </div>
          <div class="col">
            <img style={{ width: "100%" }} src={og5} />
          </div>
          <div class="col">
            <img style={{ width: "100%" }} src={og6} />
          </div>
        </div>
        <br></br>
        <h2>Redesigned Mixology App</h2>
        <div
          class="row-full"
          style={{ paddingTop: "50px", backgroundColor: "#F66A7E" }}
        >
          <div class="row">
            <div class="col">
              {" "}
              <img class="mix" src={mix1_1} />
            </div>
            <div class="col">
              {" "}
              <img class="mix" src={mix1_2} />
            </div>
            <div class="col">
              {" "}
              <img class="mix" src={mix1_3} />
            </div>
          </div>
          <br></br>
          <h5>A discover page where a user can view featured drinks.</h5>
        </div>
        <div class="row-full" style={{ paddingTop: "50px" }}>
          <div class="row">
            <div class="col">
              {" "}
              <img class="mix" src={mix2_1} />
            </div>
            <div class="col">
              {" "}
              <img class="mix" src={mix2_2} />
            </div>
            <div class="col">
              {" "}
              <img class="mix" src={mix2_3} />
            </div>
          </div>
          <br></br>
          <h5>A user can view and rate drinks on a drink profile.</h5>
        </div>
        <div
          class="row-full"
          style={{ paddingTop: "50px", backgroundColor: "#FFCE70" }}
        >
          <div class="row">
            <div class="col">
              {" "}
              <img class="mix" src={mix3_1} />
            </div>
            <div class="col">
              {" "}
              <img class="mix" src={mix3_2} />
            </div>
            <div class="col">
              {" "}
              <img class="mix" src={mix3_3} />
            </div>
          </div>
          <br></br>
          <h5>Added a unit converter that a user can toggle through.</h5>
        </div>
        <div
          class="row-full"
          style={{ paddingTop: "50px", backgroundColor: "#F66A7E" }}
        >
          <div class="row">
            <div class="col">
              {" "}
              <img class="mix" src={mix4_1} />
            </div>
            <div class="col">
              {" "}
              <img class="mix" src={mix4_2} />
            </div>
            <div class="col">
              {" "}
              <img class="mix" src={mix4_3} />
            </div>
          </div>
          <br></br>
          <h5>
            The redesigned randomizer which was the main feature of the original
            app.
          </h5>
        </div>
        <div class="row-full" style={{ paddingTop: "50px" }}>
          <div class="row">
            <div class="col">
              {" "}
              <img class="mix" src={mix5_1} />
            </div>
            <div class="col">
              {" "}
              <img class="mix" src={mix5_2} />
            </div>
            <div class="col">
              {" "}
              <img class="mix" src={mix5_3} />
            </div>
          </div>
          <br></br>
          <h5>
            The search feature contains six different categories that a user can
            browse through.
          </h5>
        </div>
        <div
          class="row-full"
          style={{ paddingTop: "50px", backgroundColor: "#FFCE70" }}
        >
          <div class="row">
            <div class="col">
              {" "}
              <img class="mix" src={mix6_1} />
            </div>
            <div class="col">
              {" "}
              <img class="mix" src={mix6_2} />
            </div>
            <div class="col">
              {" "}
              <img class="mix" src={mix6_3} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Mixology;
