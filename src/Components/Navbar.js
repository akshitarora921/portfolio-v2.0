import React from "react";

import { Link, animateScroll as scroll } from "react-scroll";

import "../css/navbar.css";

function Navbar() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <nav>
      <ul>
        <li>
          <Link
            className="link"
            activeClass="active"
            to="home"
            spy
            smooth
            offset={-70}
            duration={500}
            onClick={scrollToTop}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className="link"
            activeClass="active"
            to="home"
            spy
            smooth
            offset={-70}
            duration={500}
            onClick={scrollToTop}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className="link"
            activeClass="active"
            to="home"
            spy
            smooth
            offset={-70}
            duration={500}
            onClick={scrollToTop}
          >
            Work
          </Link>
        </li>
        <li>
          <Link
            className="link"
            activeClass="active"
            to="home"
            spy
            smooth
            offset={-70}
            duration={500}
            onClick={scrollToTop}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
