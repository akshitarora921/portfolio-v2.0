import React from "react";
import Fade from "react-reveal/Fade";

import "../css/contact.css";

function Contact() {
  return (
    <div className="contact">
      <h1>
        <fade bottom cascade>
          Contact.
        </fade>
      </h1>
      <Fade bottom>
        <div className="contact-content">
          <h1>
            Let's talk
            <span className="amazing-color">with eachother</span>
          </h1>
          <a href="mailto:akshitarora9211@gmail.com">
            akshitarora9211@gmail.com
          </a>
          <ul>
            <li>
              <a target="_blank" rel="noopener noreferrer" href="">
                Github
              </a>
            </li>
            <li>
              <a target="_blank" rel="noopener noreferrer" href="">
                LinkedIn
              </a>
            </li>
            <li>
              <a target="_blank" rel="noopener noreferrer" href="">
                Instagram
              </a>
            </li>
            <li>
              <a target="_blank" rel="noopener noreferrer" href="">
                Stackoverflow
              </a>
            </li>
          </ul>
        </div>
      </Fade>
      <span className="footer">Made with ♥️ by Akshit Arora </span>
    </div>
  );
}

export default Contact;
