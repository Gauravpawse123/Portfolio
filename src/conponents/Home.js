import React from "react";
import myPhoto from "./Images/me1.JPG";
import html from "./Images/html.png";
import css from "./Images/css.png";
import javaScript from "./Images/javascript.png";
import bootstarp from "./Images/bootstrap.png";
import react from "./Images/react.png";
import redux from "./Images/redux.png";
import node from "./Images/nodejs.png";
import express from "./Images/expressjs.png";
import mongodb from "./Images/mongodb.png";
import git from "./Images/git.png";
import github from "./Images/github.png";
import vscode from "./Images/vscode.png";
import chatgpt from "./Images/ChatGPT.png";
import mongodbCompass from "./Images/mongodbCompass.png";
import chrome from "./Images/chrome.png";
import postman from "./Images/postman.png";
import Contact from "./Contact";

export const Home = () => {
  return (
    <div className="container-fluid text-light">
      <div className="row text-light d-flex justify-content-center align-items-center text-center mt-5 mb-5 ">
        <div className="col-sm-6 col-md-6 about ">
          <h3 className="imp-text">Heyy there!👋....</h3>
          <h2>
            <span>I'm </span>Gaurav Pawse
          </h2>
          <h2 className="gradient-text">MERN Stack Developer</h2>
        </div>
        <div className="col-sm-6 col-md-6">
          <img
            src={myPhoto}
            alt="My Profile"
            style={{ height: "400px", width: "80%", borderRadius: "30px" }}
          />
        </div>
      </div>
      {/* Introduction */}
      <div className="container row col-sm-7">
        <h1 className="">Introduction</h1>
        <p>
          I'm a Motivated MERN stack developer with a strong foundation in{" "}
          <b>JavaScript, React, Node.js, Express.js and MongoDB.</b> Seeking an
          entry-level position to apply my technical skills and contribute to
          innovative web development projects.
        </p>
      </div>

      {/* Skills  */}

      <div className="container-fluid my-5">
        <h1 className=" text-center text-secondary">Skills</h1>
      </div>

      <div className="container-fluid row mt-2 text-center">
        <div className="text-center col">
          <img src={html} alt="" style={{ height: "100px" }} />
          <p>HTML5</p>
        </div>
        <div className="text-center col">
          <img src={css} alt="" style={{ height: "100px" }} />
          <p>CSS3</p>
        </div>
        <div className="text-center col">
          <img src={bootstarp} alt="" style={{ height: "100px" }} />
          <p>Bootstarp5</p>
        </div>
        <div className="text-center col">
          <img src={javaScript} alt="" style={{ height: "100px" }} />
          <p>Javascript(ES6+)</p>
        </div>
        <div className="text-center col">
          <img src={react} alt="" style={{ height: "100px" }} />
          <p>React</p>
        </div>
        <div className="text-center col">
          <img src={redux} alt="" style={{ height: "100px" }} />
          <p>Redux</p>
        </div>
      </div>
      <div className="container-fluid mt-2 row text-center">
        <div className="text-center col">
          <img src={node} alt="" style={{ height: "100px" }} />
          <p>Nodejs</p>
        </div>
        <div className="text-center col">
          <img src={express} alt="" style={{ height: "100px" }} />
          <p>Expressjs</p>
        </div>
        <div className="text-center col">
          <img src={mongodb} alt="" style={{ height: "100px" }} />
          <p>MongoDB</p>
        </div>
        <div className="text-center col">
          <img src={git} alt="" style={{ height: "100px" }} />
          <p>Git</p>
        </div>
        <div className="text-center col">
          <img src={github} alt="" style={{ height: "100px" }} />
          <p>Github</p>
        </div>
      </div>

      <div className="container text-center mt-5 my-5">
        <h1 className=" text-secondary">Tools and Software</h1>
      </div>
      <div className="container-fluid row mt-2 text-center">
        <div className="text-center col">
          <img src={vscode} alt="" style={{ height: "100px" }} />
          <p>VsCode</p>
        </div>
        <div className="text-center col">
          <img src={chatgpt} alt="" style={{ height: "100px" }} />
          <p>ChatGPT</p>
        </div>
        <div className="text-center col">
          <img src={mongodbCompass} alt="" style={{ height: "100px" }} />
          <p>MongodbCompass</p>
        </div>
        <div className="text-center col">
          <img src={chrome} alt="" style={{ height: "100px" }} />
          <p>Chrome</p>
        </div>
        <div className="text-center col">
          <img src={postman} alt="" style={{ height: "100px" }} />
          <p>Postman</p>
        </div>
      </div>
      <Contact />
    </div>
  );
};
export default Home;
