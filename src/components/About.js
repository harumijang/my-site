import React, { Component } from "react";
import me from "../assets/me.jpg";
import github from "../assets/github-logo.png";
import linkedin from "../assets/linkedin-logo.png";

class About extends Component {
  componentDidMount() {
    document.title = "About Me";
  }
  render() {
    return (
      <div class="container about row">
        <div class="col-lg-6">
          <h1 class="section-header">ABOUT ME</h1>
          <p>
            I am a developer with a B.S. in Computer Science and Interaction
            Design from Northeastern University. I love expression through art
            and design and being able to combine that with coding.
          </p>
          <p>
            I am a passionate advocate for accessibility and representation for
            people of color and LGBTQ+ in tech and media. Other things I like
            are drumming, skating, the oxford comma, and photography.
          </p>
          <p>
            You can reach me at:{" "}
            <a id="email-link" href="mailto: h.jang521@yahoo.com">
              h.jang521@yahoo.com
            </a>
          </p>
          <div class="links row">
            <a href="https://github.com/harumijang" target="_blank">
              <img id="github" src={github}></img>
            </a>
            <a href="https://www.linkedin.com/in/harumi-jang/" target="_blank">
              <img id="linkedin" src={linkedin}></img>
            </a>
          </div>
        </div>
        <div class="col-lg-6">
          <img id="me" src={me}></img>
        </div>
      </div>
    );
  }
}

export default About;
