import React from "react";
import Fade from "react-reveal/Fade";

import "../css/header.css";

function Header() {
  return (
    <div className="header">
      <h1 className="heading-background">AKSHIT</h1>
      <header>
        <h1>
          <Fade bottom cascade>
            akshitarora.
          </Fade>
        </h1>
      </header>
      <Fade bottom>
        <p className="header-title">
          Hi{" "}
          <span aria-label="emoji" role="img">
            👋
          </span>{" "}
          You found me! I am Akshit.
          <br />
          Software Engineer
          <br />
          from India
          <br />
          <button>
            <a
              href="mailto:akshitarora9211@gmail.com"
              rel="noopener noreferrer"
            >
              Contact
            </a>
          </button>
        </p>
      </Fade>
    </div>
  );
}

export default Header;
