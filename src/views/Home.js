import React from "react";
import { Link as LinkRouter } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  return (
    <main className="homeMain">
      <div className="homeContentContainer dflex dflexColumn ">
        {/* <div className="homeImageContainer dflex dflexColumn">
        <img
          className="homeImage"
          src={process.env.PUBLIC_URL + `/src/images/martin.JPG`}
          alt="img"
        />
      </div> */}
        <div className="homeTextContainer dflex">
          <div>
            <h1>Hi!</h1>
            <h1>
              I'm <span>Martin</span> Viola
            </h1>
            <h2 className="titleDescription">Web & mobile apps developer</h2>
          </div>
          <div className="homeDetailContainer">
            <h3>Technologies</h3>
            <div className="dflex techListsContainer">
              <ul className="listTechnologies">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Redux</li>
              </ul>
              <ul className="listTechnologies">
                <li>Node.js</li>
                <li>Express</li>
                <li>MongoDB</li>
                <li>React Native</li>
                <li>Selenium</li>
              </ul>
            </div>
          </div>
        </div>
          <div className="divBikeImage">
            <img
          className="bikeImage"
          src={process.env.PUBLIC_URL + `/src/images/martinBike.jpg`}
          alt="img"
        />
          </div>
      </div>
      <div className="navigationHome">
        <LinkRouter className="linkBackHome" to="/Projects">
          <p>Projects →</p>
        </LinkRouter>
      </div>
    </main>
  );
}

export default Home;
