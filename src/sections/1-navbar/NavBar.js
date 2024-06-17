//bootstrap
import { Container } from "react-bootstrap";

// fontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
// Logo
import logo from "./my-logo-modified.png";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Links } from "./Links";

//CSS
import "./navbar.css";

export const NavBar = () => {
  let [showMenu, setShowMenu] = useState(false);

  useEffect(() => {});

  return (
    <nav className="nav-bar ">
      <Container className="d-flex justify-content-between align-items-center container">
        {/* Logo start */}
        <a className="my-logo">
          <div className="img-logo">
            <img src={logo} alt="logo" />
            <div className="arrow" />
          </div>
          <div className="nav-name">
            <div className="name">
              <span>{"<"}</span>
              <span className="content"> Hesham Abdelazim</span>
              <span>{"/>"}</span>
            </div>
          </div>
        </a>
        {/* Logo end */}
        <FontAwesomeIcon
          icon={faBars}
          onClick={() => {
            setShowMenu(!showMenu);
          }}
        />
        <Links showMenu={showMenu} />
      </Container>
    </nav>
  );
};
