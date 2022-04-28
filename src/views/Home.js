import React from "react";
import "../styles/Home.css";

function Home() {
  return (
    <main className="homeMain">
      <div className="homeTextContainer">
        <h1>Hi!</h1>
        <h1>I'm <span>Martin</span> Viola</h1>
        <h2 className="titleDescription">Web & mobile apps developer</h2>
      </div>
      {/* <img
        className="homeImage"
        src={process.env.PUBLIC_URL + `/src/images/martin.JPG`}
      /> */}
    </main>
  );
}

export default Home;
