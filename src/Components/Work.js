import React from "react";

import Fade from "react-reveal/Fade";

import "../css/work.css";
import Project from "./Project";

function Work() {
  return (
    <div className="work">
      <h1 className="heading">
        <Fade bottom cascade>
          Work.
        </Fade>
      </h1>
      <div className="work-content">
        <Project
          title="Netflix Clone"
          service="React JS and Material UI"
          imgSrc="https://i.postimg.cc/tJ5BDxQR/Fire-Shot-Capture-006-Netflix-clone-netflix-clone-57636.png"
          projectUrl="https://netflix-clone-57636.web.app/"
        />
        <Project
          title="Instagram Clone"
          service="React JS and Firebase"
          imgSrc="https://i.postimg.cc/0ypnVW6f/Fire-Shot-Capture-012-Instagram-React-Clone-instagram-react-clone-1d8e6-web-app.png"
          projectUrl="https://instagram-react-clone-1d8e6.web.app/"
        />
        <Project
          title="Nest Story"
          service="ReactJs, NodeJs, MySql and ExpressJs"
          imgSrc="https://i.postimg.cc/XYt9ww7b/Fire-Shot-Capture-001-Nestory-localhost.jpg"
          projectUrl="#"
        />
        <Project
          title="Portfolio v1.0"
          service="Html and CSS"
          imgSrc="https://i.postimg.cc/MK7kkYNs/Fire-Shot-Capture-015-Akshit-Arora-akshitarora921-github-io.png"
          projectUrl="https://akshitarora921.github.io/home/"
        />
      </div>
    </div>
  );
}

export default Work;
