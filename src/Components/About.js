import React from "react";
import Fade from "react-reveal/Fade";

import "../css/about.css";

function About() {
  return (
    <div className="about">
      <div className="about-content">
        <Fade bottom cascade>
          About.
        </Fade>
        <Fade bottom>
          <p>
            I am software Engineer, trying to learn and implement new things.
          </p>
        </Fade>
      </div>
      <img
        src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=676&q=80"
        alt="aboutphoto"
      />
    </div>
  );
}

export default About;
