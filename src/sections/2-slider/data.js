// this file has data of slices and return array of all. And every slide has its JSX

// ====== react hoocks
import { useState } from "react";

// ====== first slide photoes
import FromalImg from "../../images/formal pic.jpg";
import facebook from "../../images/facebook.png";
import github from "../../images/Github.png";
import linkedin from "../../images/LinkedIn_logo_initials.png";
import gmail from "../../images/Gmail_Icon.png";

// ====== second slide photoes
import condingVideo from "../../images/techno-video.mp4";
import HTML5 from "../../images/HTML5.png";
import CSS3 from "../../images/CSS3.png";
import JS from "../../images/JS.png";
import React from "../../images/react.png";

// ====== third slide photoes
import typing from "../../images/typing.png";
import C_PLUS from "../../images/C++.png";
import {
  faCheck,
  faLink,
  faXmarkCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// ====== third slide photoes
import Elzero from "../../images/elzero.jpg";
import codeZone from "../../images/codeZone2.png";
import dsoke from "../../images/dsouke.jpg";

export function Slides() {
  let [mentObj, setMentObj] = useState(null);

  const allSliders = [
    {
      social: [
        {
          img: facebook,
          href: "https://www.facebook.com/hesham.abdelazim.94",
          name: "facebook",
        },
        {
          img: github,
          href: "https://github.com/heshamabdelazim",
          name: "github",
        },
        {
          img: linkedin,
          href: "https://www.linkedin.com/in/hesham-abdelazim-678759283/",
          name: "linkedin",
        },
        {
          img: gmail,
          href: "mailto:heshamabdelazim3@gmail.com",
          name: "gmail",
        },
      ],
      socialMapping: function () {
        return this.social.map((el, index) => (
          <a href={el.href} target="_blank" key={index}>
            <img src={el.img} draggable="false" alt={el.name} />
          </a>
        ));
      },
      objectJSX: function () {
        return (
          <>
            <div className="one-image">
              <img src={FromalImg} alt="Formal-photo" draggable="false" />
            </div>
            <div className="left">
              <h2 draggable="false">Greetings,</h2>
              <h3>Hesham Abdelazim Kamel Ahmed.</h3>
              <h4>Physics Department - Faculty Of Science.</h4>
              <h5>Front-End developer (React.js).</h5>
              <div className="social">{this.socialMapping()}</div>
            </div>
          </>
        );
      },
    },
    {
      technologies: [
        { img: HTML5, name: "HTML5" },
        { img: CSS3, name: "CSS3" },
        { img: JS, name: "JS" },
        { img: React, name: "React" },
      ],
      technologiesMapping: function () {
        return this.technologies.map((technology, i) => (
          <div className={technology.name} key={i}>
            <img src={technology.img} draggable="false" alt={technology.name} />
            <span>{technology.name}</span>
          </div>
        ));
      },
      objectJSX: function () {
        return (
          <>
            <div className="video-slide">
              <video src={condingVideo} alt="video" autoPlay loop muted />
            </div>
            <div className="left">
              <h2>Daily coding, Daily development.</h2>
              <h3>+10 hours a day,</h3>
              <h4>Using technologies :</h4>
              <div className="techno">{this.technologiesMapping()}</div>
            </div>
          </>
        );
      },
    },
    {
      objectJSX: function () {
        return (
          <>
            <div className="one-image">
              <img
                src={typing}
                draggable="false"
                alt="Average rate of typing words is 82 WPM"
              />
              <a
                href="https://data.typeracer.com/pit/profile?user=read_palestine_history"
                target="_blank"
                className="d-flex flex-column align-items-center "
                title="Typing Record"
              >
                Verify
              </a>
            </div>
            <div className="left">
              <h2>Typing Words Per Minute (WPM).</h2>
              <h3>Average rate of typing words is 82 WPM.</h3>
              <div>
                <FontAwesomeIcon icon={faLink} />
                <a
                  target="_blank"
                  href="https://data.typeracer.com/pit/profile?user=read_palestine_history"
                  title="Typing Record"
                >
                  : Latest typing record here
                </a>
              </div>
            </div>
          </>
        );
      },
    },
    {
      allMentors: [
        {
          name: "Osama ElZero",
          languageLogo: JS,
          image: Elzero,
          hint: "Main instructor of Elzero-Web-School",
          youtube: "https://www.youtube.com/@ElzeroWebSchool",
          linkedin: "https://www.linkedin.com/in/osamaelzero/",
          technialSkills: [
            "HTML5",
            "CSS3",
            "JavaScript",
            "Data-Types",
            "Programming-Logic & Trainings",
            "BOM & DOM",
            "Web APIs",
            "Web Date & Time",
            "JSON",
            "XML Http Request",
            "Fetch",
            "Basics of OOP & JaveScript Class",
            "Promise and Async Functions",
            "Call Stack, LIFO & FIFO",
            "Git",
            "Git-Hub",
          ],
        },
        {
          name: "Ahmed Nasser",
          languageLogo: React,
          image: codeZone,
          hint: "Has more than 10 years in software industry",
          youtube: "https://www.youtube.com/c/codeZone",
          linkedin: "https://www.linkedin.com/in/ahmedjsdev/",
          technialSkills: [
            "React",
            "React Functional-Components",
            "React Class-Components",
            "React-Hoocks",
            "Bootstrap",
            "Redux-JS",
            "Data Management, Validation & Interactivity",
            "React Redux-Toolkit",
            "React Router DOM",
            "Building Simple E-Commerce ",
            "JSON-server",
            "Fundamentals of Node.js",
            "Clean-Code Training",
            "IIFE & Modules",
          ],
        },
        {
          name: "Mohammed ElDsoke",
          languageLogo: C_PLUS,
          image: dsoke,
          youtube: "https://www.youtube.com/@DesoukiEgypt",
          linkedin: "https://www.linkedin.com/in/mohamed-el-desouki-97280819b/",
          hint: "Lecture at the Faculty of Engineering and Computer Science - Information Systems Department",
          academicAccount:
            "https://faculty.psau.edu.sa/ar/psau/facultymember/m.eldesouki",
          technialSkills: [
            "C++ OOP",
            "C++ class Encapsulation",
            "C++ class Inheritance",
            "C++ class Polymerphism",
            "C++ class Abstraction",
            "C++ Method, Constructor and Operator overloading",
            "Fundamentals of Data Base",
          ],
        },
      ],

      technoLoop: function () {
        return mentObj.technialSkills.map((skill) => (
          <div className="d-flex gap-1 align-items-center ">
            <FontAwesomeIcon icon={faCheck} className="check" />
            <span>{skill}</span>
          </div>
        ));
      },

      objectJSX: function () {
        return (
          <>
            <div className="ment-pics">
              {this.allMentors.map((mentor, i) => (
                <>
                  <figure
                    onClick={(e) => {
                      setMentObj(mentor);
                    }}
                  >
                    <img src={mentor.image} draggable="false" />
                    <span>Eng. {mentor.name}</span>
                  </figure>
                  {/* The following is position fixed */}
                </>
              ))}
              {mentObj && (
                <div className="ment-window" onClick={() => setMentObj(null)}>
                  <div className="ment-details d-flex justify-content-between">
                    <div className="left position-relative ">
                      <img src={mentObj.languageLogo} draggable="false" />
                      {this.technoLoop()}
                    </div>
                    <div className="right d-flex flex-column">
                      <img src={mentObj.image} draggable="false" />
                      <div className="name">
                        <h3>Eng. {mentObj.name}</h3>
                        <p>{mentObj.hint}</p>
                        {mentObj.academicAccount && (
                          <a href={mentObj.academicAccount} target="_blank">
                            Academic-Account
                          </a>
                        )}
                        <a href={mentObj.youtube} target="_blank">
                          YouTube
                        </a>
                        <a href={mentObj.linkedin} target="_blank">
                          LinkedIn
                        </a>
                      </div>
                    </div>
                    {/* the following is exit icon */}
                    <FontAwesomeIcon
                      icon={faXmarkCircle}
                      className="x-icon"
                      onClick={() => setMentObj(null)}
                    />
                  </div>
                </div>
              )}
            </div>
            <div className="topic">
              <h2>Meet My Mentors</h2>
              <p>
                Experinced respectful Mentors that any of them has more than 10
                years of Experience . <br /> Press for details.
              </p>
            </div>
          </>
        );
      },
    },
  ];

  return allSliders.map((slide, index) => {
    return (
      <li key={index + 1} className={` slide slide${index + 1}`} id={index + 1}>
        {slide.objectJSX()}
      </li>
    );
  });
}
