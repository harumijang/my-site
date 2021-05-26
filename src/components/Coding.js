import React, { Component } from "react";
import { ReactVideo } from "reactjs-media";
import CentivVideo from "../assets/centiv.mp4";
import Welcome from "../assets/Welcome.png";
import { H1, H4, BODY } from "../base/fonts";
import github from "../assets/github-logo.png";
import open from "../assets/open.png";
import moviebox from "../assets/moviebox.png";
import tic from "../assets/tic.gif";
import type2 from "../assets/type2.png";
import twitter from "../assets/twitter.png";

class CODING extends Component {
  componentDidMount() {
    document.title = "Coding Work";
  }
  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col-sm">
            {" "}
            <ReactVideo src={CentivVideo} poster={Welcome} primaryColor="red" />
          </div>
          <div class="col-sm">
            <a href="https://centiv.netlify.app/" target="_blank">
              <H1 id="project-header">CENTIV</H1>
            </a>
            <div style={{ float: "left", marginLeft: "25px" }}>
              <a href="https://centiv.netlify.app/" target="_blank">
                <img id="open" src={open}></img>
              </a>
              <a
                href="https://github.com/wang-er/interaction-team-degree-capstone"
                target="_blank"
              >
                <img id="github1" src={github}></img>
              </a>
            </div>
            {/* <br></br> */}
            <BODY>
              Created for my senior capstone project, Centiv is a motivational
              and goal documenting app that lets users wager their money as a
              motivator to accomplish their goal.
            </BODY>
            <BODY>
              I was one of two developers and worked alongside two UX designers.
            </BODY>
            <H4>React Firebase</H4>
          </div>
        </div>
        <br></br>
        <br></br>
        <div class="row">
          <div class="col-sm">
            <img src={tic} style={{ width: "90%" }}></img>
          </div>
          <div class="col-sm">
            {" "}
            <a
              href="https://peaceful-yalow-843576.netlify.app/"
              target="_blank"
            >
              <H1 id="project-header">COVEYTOWN TICTACTOE</H1>
            </a>
            <div style={{ float: "left", marginLeft: "25px" }}>
              <a
                href="https://peaceful-yalow-843576.netlify.app/"
                target="_blank"
              >
                <img id="open" src={open}></img>
              </a>
              <a href="https://github.com/youngkar/covey.town" target="_blank">
                <img id="github1" src={github}></img>
              </a>
            </div>
            <br></br>
            <BODY>
              The final project of my Fundamentals of Software Engineering class
              was to develop and implement a new feature into an existing
              virtual meeting space codebase. My group added a feature where
              users can play Tic Tac Toe with other users and have wins recorded
              by the leaderboard. My role was to develop the frontend.
            </BODY>
            <BODY>
              <i>
                GIF demo is recorded by switching windows between the two
                players.
              </i>
            </BODY>
            <H4>TypeScript</H4>
          </div>
        </div>
        <br></br>
        <br></br>
        <div class="row">
          <div class="col-sm">
            <a href="https://moviebox4u.com/" target="_blank">
              <img id="moviebox" src={moviebox} style={{ width: "80%" }}></img>
            </a>
          </div>
          <div class="col-sm">
            {" "}
            <a href="https://moviebox4u.com/" target="_blank">
              <H1 id="project-header">MOVIEBOX</H1>
            </a>
            <div style={{ float: "left", marginLeft: "25px" }}>
              <a href="https://moviebox4u.com/" target="_blank">
                <img id="open" src={open}></img>
              </a>
              <a href="https://github.com/harumijang/moviebox" target="_blank">
                <img id="github1" src={github}></img>
              </a>
            </div>
            <br></br>
            <BODY>
              Enter your location and receive movie recommendations based on
              your current weather conditions.
            </BODY>
            <H4>React Express.js</H4>
          </div>
        </div>
        <br></br>
        <br></br>
        <div class="row">
          <div class="col-sm">
            <a
              href="https://peaceful-reaches-49570.herokuapp.com/"
              target="_blank"
            >
              {" "}
              <img id="type2" src={type2} style={{ width: "80%" }}></img>
            </a>
          </div>
          <div class="col-sm">
            {" "}
            <a
              href="https://peaceful-reaches-49570.herokuapp.com/"
              target="_blank"
            >
              <H1 id="project-header">DIVERSITY IN FILM</H1>
            </a>
            <div style={{ float: "left", marginLeft: "25px" }}>
              <a
                href="https://peaceful-reaches-49570.herokuapp.com/"
                target="_blank"
              >
                <img id="open" src={open}></img>
              </a>
              <a
                href="https://github.com/harumijang/type2project2"
                target="_blank"
              >
                <img id="github1" src={github}></img>
              </a>
            </div>
            <br></br>
            <BODY>
              For my final project in Typography II, we were tasked to select
              text and design it into a cohesive narrative and conceptually
              express the ideas of the content through design and typographic
              choices.
            </BODY>
            <BODY>
              I chose to convey how little representation there is for
              minorities in the movie industry. The project takes text from
              three NYT articles.To convey how little represented these groups
              are in an industry that mostly consists of straight white cis men,
              names are in highlighted with red. Clicking on the name will
              render a ‘small’ image of the person.
            </BODY>
            <H4>React</H4>
          </div>
        </div>
        <br></br>
        <br></br>
        <div class="row">
          <div class="col-sm">
            <a href="https://twitter.com/BotMiddle" target="_blank">
              <img id="twitter" src={twitter} style={{ width: "30%" }}></img>
            </a>
          </div>
          <div class="col-sm">
            {" "}
            <a href="https://twitter.com/BotMiddle" target="_blank">
              <H1 id="project-header">MUSIC TWITTER BOT</H1>
            </a>
            <div style={{ float: "left", marginLeft: "25px" }}>
              <a href="https://twitter.com/BotMiddle" target="_blank">
                <img id="open" src={open}></img>
              </a>
              <a
                href="https://github.com/harumijang/twitter-bot"
                target="_blank"
              >
                <img id="github1" src={github}></img>
              </a>
            </div>
            <br></br>
            <BODY>
              Twitter bot that gives you a song from the 2005-2011 era using the
              Spotify API.
            </BODY>
            <H4>Node.js</H4>
          </div>
        </div>
        <br></br>
        <br></br>
      </div>
    );
  }
}

export default CODING;
