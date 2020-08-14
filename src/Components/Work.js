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
          service="Frontend Design"
          imgSrc="https://i.postimg.cc/tJ5BDxQR/Fire-Shot-Capture-006-Netflix-clone-netflix-clone-57636.png"
          projectUrl="https://netflix-clone-57636.web.app/"
        />
        <Project
          title="Netflix Clone"
          service="Frontend Design"
          imgSrc="https://i.postimg.cc/tJ5BDxQR/Fire-Shot-Capture-006-Netflix-clone-netflix-clone-57636.png"
          projectUrl="https://netflix-clone-57636.web.app/"
        />
        <Project
          title="Netflix Clone"
          service="Frontend Design"
          imgSrc="https://i.postimg.cc/tJ5BDxQR/Fire-Shot-Capture-006-Netflix-clone-netflix-clone-57636.png"
          projectUrl="https://netflix-clone-57636.web.app/"
        />
        <Project
          title="Netflix Clone"
          service="Frontend Design"
          imgSrc="https://i.postimg.cc/tJ5BDxQR/Fire-Shot-Capture-006-Netflix-clone-netflix-clone-57636.png"
          projectUrl="https://netflix-clone-57636.web.app/"
        />
      </div>
    </div>
  );
}

export default Work;
