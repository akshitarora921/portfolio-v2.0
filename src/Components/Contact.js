import React from "react";
import Fade from "react-reveal/Fade";

import "../css/contact.css";

function Contact() {
  return (
    <div className="contact">
      <h1>
        <Fade bottom cascade>
          Contact.
        </Fade>
      </h1>
      <Fade bottom>
        <div className="contact-content">
          <h1>
            Let's talk
            <span className="amazing-color">with eachother</span>
          </h1>
          <a className="email" href="mailto:akshitarora9211@gmail.com">
            akshitarora9211@gmail.com
          </a>
          <ul>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/akshitarora921"
              >
                Github
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/akshit-arora/"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/_arorakshit/"
              >
                Instagram
              </a>
            </li>
            <li>
              <a target="_blank" rel="noopener noreferrer" href="#">
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
