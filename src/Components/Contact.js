import React from "react";
import Fade from "react-reveal/Fade";

import "../css/contact.css";

function Contact() {
  return (
    <div className='contact'>
      <h1>
        <Fade bottom cascade>
          Contact.
        </Fade>
      </h1>
      <Fade bottom>
        <div className='contact-content'>
          <h1>
            <span className='amazing-color'>Let's talk</span>
          </h1>
          <a className='email' href='mailto:akshitarora9211@gmail.com'>
            akshitarora9211@gmail.com
          </a>
          <ul>
            <li>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://github.com/akshitarora921'
              >
                Github
              </a>
            </li>
            <li>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://www.linkedin.com/in/akshit-arora/'
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://www.instagram.com/_arorakshit/'
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://docs.google.com/document/d/1bg9gP4pgWWqQBU_HPIDh-kC2P5CormX1RorivY8FyCk/edit'
              >
                Resume
              </a>
            </li>
            <li>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://thepurplethread.notion.site/Akshit-Arora-23b75241fc174bd98a8c7c8fed99ae1a'
              >
                Notion
              </a>
            </li>
          </ul>
        </div>
      </Fade>
      <div className='footer'>
        Made with
        <span role='img' aria-label='emoji'>
          💙
        </span>
        by Akshit Arora
      </div>
    </div>
  );
}

export default Contact;
