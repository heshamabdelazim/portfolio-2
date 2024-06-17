// css
import "./Slider.css";

//images
import FromalImg from "../../images/formal pic.jpg";
import condingVideo from "../../images/Technology Background Video Loop For Website.mp4";
import facebook from "../../images/facebook.png";
import github from "../../images/Github.png";
import gmail from "../../images/Gmail_Icon.png";
import linkedin from "../../images/LinkedIn_logo_initials.png";
import HTML5 from "../../images/HTML5.png";
import CSS3 from "../../images/CSS3.png";
import JS from "../../images/JS.png";
import React from "../../images/React copy.png";
import typing from "../../images/typing.png";
import C_PLUS from "../../images/C++.png";
//images mentors
import Elzero from "../../images/elzero.jpg";
import codeZone from "../../images/codeZone2.png";
import dsoke from "../../images/dsouke.jpg";
import English from "../../images/evidence 2.JPG";
import firstProj from "../../images/first project.png";

// bootstrap
import { Button, CardBody, Container } from "react-bootstrap";

//react-hocks
import { useEffect, useRef, useState } from "react";

//font-awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faBookOpen,
  faCheck,
  faCode,
  faHeadset,
  faLink,
  faLongArrowLeft,
  faMarker,
  faSignal,
  faXmarkCircle,
} from "@fortawesome/free-solid-svg-icons";
import {
  faCss3,
  faHackerNews,
  faHtml5,
  faJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

export const Slider = () => {
  //----------------
  // Hoocks
  //----------------
  let [mentObj, setMentObj] = useState(null);
  useEffect(() => {
    ulSlider.current.addEventListener("scroll", () => {
      arrowUI(); //This function if last or beginning arrow. It will take disabled
      bulletsActive(); //bullets are interactive with scrolling
    });
    ulSlider.current.addEventListener("mousedown", (e) => {
      startDragging(e);
    });
    ulSlider.current.addEventListener("mousemove", (e) => {
      dragging(e);
    });
    document.addEventListener("mouseup", () => {
      endDragging();
    });
  });
  let ulSlider = useRef();
  let arrowRight = useRef();
  let arrowLeft = useRef();
  let isDragging = useRef(false); //for slider dragging
  let startX = useRef(); //for slider dragging
  let firstDrag = useRef(true); //for slider dragging
  //----------------
  // all li objects
  //----------------
  const introduction = {
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
      { img: gmail, href: "mailto:heshamabdelazim3@gmail.com", name: "gmail" },
    ],
    socialMapping: function () {
      return this.social.map((el, index) => (
        <a href={el.href} target="_blank">
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
  };
  const dailyCoding = {
    technologies: [
      { img: HTML5, name: "HTML5" },
      { img: CSS3, name: "CSS3" },
      { img: JS, name: "JS" },
      { img: React, name: "React" },
    ],
    technologiesMapping: function () {
      return dailyCoding.technologies.map((technology) => (
        <div className={technology.name}>
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
  };
  const fastTyping = {
    objectJSX: function () {
      return (
        <>
          <div className="one-image">
            <img
              src={typing}
              draggable="false"
              alt="Average rate of typing words is 82 WPM"
              draggable="false"
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
  };
  const mentorSection = {
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
            {this.allMentors.map((mentor) => (
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
  };
  const english = {
    englishSkills: [
      { name: "Writing", percent: 90, icon: faMarker },
      { name: "Reading", percent: 90, icon: faBookOpen },
      { name: "Speaking", percent: 75, icon: faSignal },
      { name: "Listening", percent: 85, icon: faHeadset },
    ],
    loopingSkills: function () {
      return this.englishSkills.map((object) => {
        return (
          <div className={object.name}>
            <h4 className="d-flex gap-2 align-items-center">
              <FontAwesomeIcon
                icon={object.icon}
                fontSize={"20px"}
                style={{ color: "#234b6e" }}
              />
              <span>{object.name}</span>
            </h4>
            <div
              style={{
                backgroundColor: "#e4e4e4",
                padding: "3px",
                borderRadius: "8px",
                border: "2px solid #006279",
              }}
            >
              <div
                style={{
                  width: `${object.percent}%`,
                  height: "16px",
                  background:
                    "linear-gradient(to right, rgb(150 126 255), #ff7171)",
                  borderRadius: "8px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white ",
                  fontWeight: "bold",
                  letterSpacing: "3px",
                }}
              >
                {object.percent}%
              </div>
            </div>
          </div>
        );
      });
    },
    objectJSX: function () {
      return (
        <>
          <div className="one-image  ">
            <a
              href="https://www.credly.com/go/ix5nZOn5"
              target="_blank"
              className="d-flex flex-column align-items-center "
            >
              Verify
            </a>
            <img
              src={English}
              draggable="false"
              title="Coursera Translation"
              alt={this.h2}
            />
          </div>
          <div className="left">
            <h2>English</h2>
            <h4>+15K words have been translated into Arabic.</h4>
            <div className="english-percent w-100 d-flex gap-4 flex-column">
              {this.loopingSkills()}
            </div>
          </div>
        </>
      );
    },
  };
  const allSliders = [
    introduction,
    dailyCoding,
    fastTyping,
    mentorSection,
    // english,
  ];
  //----------------
  // mapping sliders
  //----------------
  const mappingSliders = allSliders.map((slide, index) => {
    return (
      <li key={index + 1} className={` slide slide${index + 1}`} id={index + 1}>
        {slide.objectJSX()}
      </li>
    );
  });

  //----------------
  // mapping bullets
  //----------------
  const mappingBullets = allSliders.map((slide, index) => (
    <div
      id={index + 1}
      className={index == 0 && "active"}
      onClick={() => {
        scrolling(index + 1);
      }}
    />
  ));

  //----------------
  // const functions
  //----------------
  const scrolling = (id) => {
    ulSlider.current.scrollLeft = ulSlider.current.offsetWidth * (id - 1);
  };
  // function
  const bulletsActive = () => {
    const slideNumber =
      (ulSlider.current.scrollLeft + ulSlider.current.offsetWidth) /
      ulSlider.current.offsetWidth;
    // what is this sliderNumber? imagine 5 slides and every slide move is 100 but (first slide id=1 but move is 000)
    // so When you go to the third slide which is id=3 so it moves 200 so ((200 + 100) /100) = 3 third slide
    const allBullets = document.querySelector(".bullets").children;
    for (let i = 0; i < allBullets.length; i++) {
      allBullets[i].classList.remove("active");
      slideNumber == allBullets[i].id && allBullets[i].classList.add("active");
    }
  };
  // function
  const arrowClick = (e) => {
    ulSlider.current.scrollLeft +=
      e.target.id == "left"
        ? -ulSlider.current.offsetWidth
        : ulSlider.current.offsetWidth;
  };
  // function
  const arrowUI = () => {
    const lastX = (allSliders.length - 1) * ulSlider.current.offsetWidth;
    ulSlider.current.scrollLeft === lastX
      ? arrowRight.current.classList.add("disabled")
      : arrowRight.current.classList.remove("disabled");
    ulSlider.current.scrollLeft === 0
      ? arrowLeft.current.classList.add("disabled")
      : arrowLeft.current.classList.remove("disabled");
  };
  // function
  const startDragging = (e) => {
    isDragging.current = true;
    startX.current = firstDrag.current
      ? e.pageX
      : ulSlider.current.scrollLeft + e.pageX;
  };
  // function
  const dragging = (e) => {
    if (isDragging.current) {
      ulSlider.current.scrollLeft = startX.current - e.pageX;
    }
    // ulSlider.current.scrollLeft =
    //   isDragging.current && startX.current - e.pageX;
  };
  // function
  const endDragging = () => {
    isDragging.current = false;
    firstDrag.current = false;
  };

  return (
    /*structure is <slider> parent has 3 children [(background), (arrows & bullets), (container)] */
    <div className="slider position-relative">
      <div className="for-arrows position-absolute w-100 start-0 top-0">
        {/* arrows */}
        <FontAwesomeIcon
          icon={faArrowLeft}
          className="arrow-left disabled"
          ref={arrowLeft}
          id="left"
          onClick={(e) => arrowClick(e)}
        />
        <FontAwesomeIcon
          icon={faArrowRight}
          className="arrow-right"
          ref={arrowRight}
          id="right"
          onClick={(e) => arrowClick(e)}
        />
        {/* bullets */}
        <div className="bullets d-flex justify-content-center gap-5 position-absolute">
          {mappingBullets}
        </div>
      </div>
      <div className="bg-layer position-absolute" />
      <Container className="position-relative">
        <ul className="slider" ref={ulSlider}>
          {mappingSliders}
        </ul>
      </Container>
    </div>
  );
};
