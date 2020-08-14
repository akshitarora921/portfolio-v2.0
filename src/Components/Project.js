import React from "react";
import Fade from "react-reveal/Fade";

import "../css/project.css";

function Project({ imgSrc, title, service, projectUrl }) {
  return (
    <Fade bottom>
      <div className="project">
        <a href={projectUrl}>
          <img src={imgSrc} alt={title} />
        </a>
        <h1>{title}</h1>
        <span>{service}</span>
      </div>
    </Fade>
  );
}

export default Project;
