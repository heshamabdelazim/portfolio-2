// React hoocks
import { useEffect, useState } from "react";
//logo image
import logo from "../images/my-logo-modified.png";
//fontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDotCircle,
  faWaveSquare,
  faWheelchairMove,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";
//css file
import "../pages/home-page/";

function Logo(props) {
  return (
    <div className={props.className}>
      <a className="my-logo">
        <div className="img-logo">
          <img src={logo} alt="logo" />
          {props.arrow && <div className="arrow"></div>}
        </div>
        {!props.normalText ? (
          <div className="nav-name">
            <span> {"<Hesham Abdelazim Kamel />"}</span>
          </div>
        ) : (
          <div className="normal-text">
            <h2>Greetings, </h2>
            <h3>This is Hesham Abdelazim</h3>
            <h4>Front-End Developer using React.js</h4>

            <Button>Continue</Button>
            {/* Now the redux job will be when we click the button we will make true then open and make the background go left  */}
          </div>
        )}
      </a>
    </div>
  );
}

export default Logo;
