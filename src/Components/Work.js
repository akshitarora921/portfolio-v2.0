import React from "react";

import Fade from "react-reveal/Fade";

import "../css/work.css";
import Project from "./Project";

function Work() {
  return (
    <div className='work'>
      <h1 className='heading'>
        <Fade bottom cascade>
          Work.
        </Fade>
      </h1>
      <div className='work-content'>
        <Project
          title='AnaMoney Website'
          service='React JS and Chakra UI'
          imgSrc='https://i.postimg.cc/PrDSxsKz/Fire-Shot-Capture-065-Ana-Money-web-ana-money.png'
          projectUrl='https://ana.money/#/'
        />
        <Project
          title='Whatsapp Clone'
          service='React JS, Redux, Redux-toolkit, Firebase and Material UI'
          imgSrc='https://i.postimg.cc/3Rxqywhy/Fire-Shot-Capture-056-React-App-localhost.png'
          projectUrl='https://whatsapp-clone-9498d.web.app/'
        />
        <Project
          title='Google Clone'
          service='React JS, Redux, Redux-toolkit and Material UI'
          imgSrc='https://i.postimg.cc/PrbHScfy/Fire-Shot-Capture-018-React-App-clone-fc020-web-app.png'
          projectUrl='https://clone-fc020.web.app/'
        />
        <Project
          title='Netflix Clone'
          service='React JS and Material UI'
          imgSrc='https://i.postimg.cc/tJ5BDxQR/Fire-Shot-Capture-006-Netflix-clone-netflix-clone-57636.png'
          projectUrl='https://netflix-clone-57636.web.app/'
        />
        <Project
          title='Instagram Clone'
          service='React JS and Firebase'
          imgSrc='https://i.postimg.cc/0ypnVW6f/Fire-Shot-Capture-012-Instagram-React-Clone-instagram-react-clone-1d8e6-web-app.png'
          projectUrl='https://instagram-react-clone-1d8e6.web.app/'
        />
        <Project
          title='Nest Story'
          service='ReactJs, NodeJs, MySql and ExpressJs'
          imgSrc='https://i.postimg.cc/XYt9ww7b/Fire-Shot-Capture-001-Nestory-localhost.jpg'
          projectUrl='#'
        />
        <Project
          title='Portfolio v1.0'
          service='Html and CSS'
          imgSrc='https://i.postimg.cc/MK7kkYNs/Fire-Shot-Capture-015-Akshit-Arora-akshitarora921-github-io.png'
          projectUrl='https://akshitarora921.github.io/home/'
        />
      </div>
    </div>
  );
}

export default Work;
