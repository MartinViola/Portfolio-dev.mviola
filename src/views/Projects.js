import React from "react";
import { Link as LinkRouter } from "react-router-dom";
import "../styles/Projects.css";

function Projects() {
  return (
    <main className="projectsMain">
      <h2 className="projectsTitle">Latest projects:</h2>
      <div className="projectsContentContainer dflex">
        <div className="projectContainer">
          <h3>React Sports</h3>
          <img
            className="projectImage"
            src={process.env.PUBLIC_URL + `/src/images/reactSports.png`}
            alt="img"
          />
          <p>Type: web & mobile app.</p>
          <p>Project: group.</p>
          <p>Tech: Full stack MERN & React Native.</p>
        </div>
        <div className="projectContainer">
          <h3>MyTinerary</h3>
          <img
            className="projectImage"
            src={process.env.PUBLIC_URL + `/src/images/mytinerary.png`}
            alt="img"
          />
          <p>Type: web & mobile app.</p>
          <p>Project: individual.</p>
          <p>Tech: Full stack MERN & React Native.</p>
        </div>
        <div className="projectContainer">
          <h3>Pet shop</h3>
          <img
            className="projectImage"
            src={process.env.PUBLIC_URL + `/src/images/petShop.png`}
            alt="img"
          />
          <p>Type: static web.</p>
          <p>Project: group.</p>
          <p>Tech: HTML, CSS, JavaScript & Git.</p>
        </div>
        <div className="projectContainer">
          <h3>Amazing Events</h3>
          <img
            className="projectImage"
            src={process.env.PUBLIC_URL + `/src/images/amazingEvents.png`}
            alt="img"
          />
          <p>Type: static web.</p>
          <p>Project: individual.</p>
          <p>Tech: HTML, CSS & JavaScript.</p>
        </div>
        <div className="projectContainer">
          <h3>Might Ducks HL</h3>
          <img
            className="projectImage"
            src={process.env.PUBLIC_URL + `/src/images/mightyDucks.png`}
            alt="img"
          />
          <p>Type: static web.</p>
          <p>Project: individual.</p>
          <p>Tech: HTML & CSS.</p>
        </div>
      </div>
      <div className="dflex dflexSpacebetween">
      <LinkRouter className="linkBackHome" to="*">
        <p>← Intro</p>
      </LinkRouter>
      <LinkRouter className="linkBackHome" to="/CV">
        <p>CV →</p>
      </LinkRouter>
      </div>
    </main>
  );
}

export default Projects;
