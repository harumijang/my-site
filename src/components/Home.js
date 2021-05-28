import React, { Component } from "react";
import { Typewriter } from "react-typewriting-effect";
import "react-typewriting-effect/dist/index.css";

class Home extends Component {
  componentDidMount() {
    document.title = "Home";
  }
  render() {
    return (
      <div class="containerl">
        <div class="main">
          <h1 id="home-intro">Hi, my name is Harumi</h1>
        </div>
        <h2 id="home-body">
          <Typewriter
            id="home-body"
            string="I like coding and visual design."
            delay={100}
            cursor="|"
          />
        </h2>
      </div>
    );
  }
}

export default Home;
