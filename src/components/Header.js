import React from "react";
import { Link as LinkRouter } from "react-router-dom";
import "../styles/Header.css";

function Header() {
  return (
    <header>
      <div className="sideDrawerContainer">
        <p className="menuIcon">MENU</p>
        <div className="sideDrawerMenu">
        <LinkRouter className="drawerLink" to="*">
            <p>Intro</p>
          </LinkRouter>
          <LinkRouter className="drawerLink" to="/Projects">
            <p>Projects</p>
          </LinkRouter>
          <LinkRouter className="drawerLink" to="/CV">
            <p>CV</p>
          </LinkRouter>
          <LinkRouter className="drawerLink" to="/Contact">
            <p>Contact</p>
          </LinkRouter>
        </div>
      </div>
    </header>
  );
}

export default Header;
