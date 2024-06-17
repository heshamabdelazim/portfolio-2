//images
import FromalImg from "../images/formal pic.jpg";
import condingVideo from "../images/Technology Background Video Loop For Website.mp4";
import facebook from "../images/facebook.png";
import github from "../images/Github.png";
import gmail from "../images/Gmail_Icon.png";
import linkedin from "../images/LinkedIn_logo_initials.png";
import HTML5 from "../images/HTML5.png";
import CSS3 from "../images/CSS3.png";
import JS from "../images/JS.png";
import React from "../images/React copy.png";
import typing from "../images/typing.png";
import Elzero from "../images/elzero.jpg";
import codeZone from "../images/codeZone2.png";
import English from "../images/evidence 2.JPG";
import firstProj from "../images/first project.png";
import secondProj from "../images/second project.png";

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
} from "@fortawesome/free-solid-svg-icons";
import {
  faCss3,
  faHackerNews,
  faHtml5,
  faJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import Heading from "../components/Heading";
import Heading2 from "../components/Heading2";

// import Logo from "../components/logo";

function Home() {
  // useState
  let [parentUl, setParentUl] = useState();
  let [pressed, setPressed] = useState(false);

  //useEffect for declaring dom as variables
  useEffect(() => {
    // if (!sessionStorage.getItem("pressed")) {
    //   sessionStorage.setItem("pressed", false);
    // }
    setParentUl(document.querySelector(".home ul"));
  }, [pressed]); //Normally, when you declare variables the dependency is empty but why We put this dependency pressed? because when pressing on click we can see the dom (allBullets)
  //So after pressing, it will re - render again to see allBullets.

  let introduction = {
    image: FromalImg,
    h1: "Greetings,",
    h2: "This is Hesham Abdelazim Kamel Ahmed.❤️",
    h3: "React - Front End Developer.",

    social: [
      { img: facebook, href: "https://www.facebook.com/hesham.abdelazim.94" },
      { img: github, href: "https://github.com/heshamabdelazim" },
      {
        img: linkedin,
        href: "https://www.linkedin.com/in/hesham-abdelazim-678759283/",
      },
      { img: gmail, href: "mailto:heshamabdelazim3@gmail.com" },
    ],
    socialMapping: function () {
      return this.social.map((el, index) => (
        <a href={el.href} target="_blank">
          <img src={el.img} draggable="false" />
        </a>
      ));
    },
    objectJSX: function () {
      return (
        <>
          <div className="one-image">
            <img src={this.image} alt="video" autoPlay loop muted />
          </div>
          <div className="text">
            <h1>{this.h1}</h1>
            <h2>{this.h2}</h2>
            <h3>{this.h3}</h3>
            <div className="social">{this.socialMapping()}</div>
          </div>
        </>
      );
    },
  };
  let dailyCoding = {
    video: condingVideo,
    h1: "Daily coding, Daily development.",
    h2: "+10 hours a day,",
    h3: "Using technologies :",
    technologies: [
      { img: HTML5, name: "HTML5" },
      { img: CSS3, name: "CSS3" },
      { img: JS, name: "JS" },
      { img: React, name: "React" },
    ],
    technologiesMapping: function () {
      return dailyCoding.technologies.map((technology) => (
        <div className={technology.name}>
          <img src={technology.img} draggable="false" />
          <span>{technology.name}</span>
        </div>
      ));
    },
    objectJSX: function () {
      return (
        <>
          <div className="video-slide">
            <video src={this.video} alt="video" autoPlay loop muted />
          </div>
          <div className="text">
            <h1>{this.h1}</h1>
            <h2>{this.h2}</h2>
            <h3>{this.h3}</h3>
            <div className="techno">{this.technologiesMapping()}</div>
          </div>
        </>
      );
    },
  };
  let fastTyping = {
    image: typing,
    h1: "Typing Words Per Minute (WPM).",
    h2: "Average rate of typing words is 82 WPM.",
    title: "Typing Record",
    a: "Latest typing record here",
    ahref: "https://data.typeracer.com/pit/profile?user=read_palestine_history",
    objectJSX: function () {
      return (
        <>
          <div className="one-image">
            <img src={this.image} draggable="false" alt={this.h2} />
            <a
              href="https://data.typeracer.com/pit/profile?user=read_palestine_history"
              target="_blank"
              className="d-flex flex-column align-items-center "
            >
              Verify
            </a>
          </div>
          <div className="text">
            <h1>{this.h1}</h1>
            <h2>{this.h2}</h2>
            <div>
              <FontAwesomeIcon icon={faLink} />
              <a
                target="_blank"
                href="https://data.typeracer.com/pit/profile?user=read_palestine_history"
              >
                : {this.a}
              </a>
            </div>
          </div>
        </>
      );
    },
  };
  let meetMentors = {
    image: Elzero,
    image2: codeZone,
    h1: "Meet My Mentors:",
    title: "Go to YouTube",
    // h2: "From Osama Elzero :",
    ahrefOsama: "https://www.youtube.com/@ElzeroWebSchool",
    ahrefNasser: "https://www.youtube.com/c/codeZone",

    content: [
      {
        name: "Osama",
        progress: [
          "HTML5",
          "CSS3",
          "JS",
          "Web API",
          "JSON",
          "Fetching",
          "Git-Hub",
        ],
      },
      {
        name: "Ahmed",
        progress: [
          "React",
          "Redux-js",
          "Redux-Toolkit",
          "Clean-Code",
          "React-Hoocks",
        ],
      },
    ],

    loopingNames: function () {
      //the following it has nested mapping
      return this.content.map((object) => (
        <ul className={object.name}>
          <h4 className=" d-flex gap-2 align-items-center ">
            <FontAwesomeIcon icon={faCode} className="text-black" />{" "}
            <span className="text-center">Eng. {object.name}</span>
          </h4>
          {object.progress.map((li) => (
            <li className="d-flex gap-2 align-items-center ">
              <FontAwesomeIcon icon={faCheck} />
              <span>{li}</span>
            </li>
          ))}
        </ul>
      ));
    },
    objectJSX: function () {
      return (
        <>
          <div className="two-image d-flex gap-3">
            <a className="elzero " href={this.ahrefOsama} target="_blank">
              <img src={this.image} draggable="false" title={this.title} />
              <span>Osama El-zero</span>
            </a>
            <a className="nasser " href={this.ahrefNasser} target="_blank">
              <img src={this.image2} draggable="false" title={this.title} />
              <span>Ahmed Nasser</span>
            </a>
          </div>
          <div className="text">
            <h1>{this.h1}</h1>
            <div className="content d-flex justify-content-between">
              {this.loopingNames()}
            </div>
          </div>
        </>
      );
    },
  };
  let english = {
    image: English,
    title: "Coursera Translation",
    h1: "English.",
    h4: "+15K words have been translated into Arabic.",
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
              src={this.image}
              draggable="false"
              title={this.title}
              alt={this.h2}
            />
          </div>
          <div className="text">
            <h1>{this.h1}</h1>
            <h4>{this.h4}</h4>
            <div className="english-percent w-100 d-flex gap-4 flex-column">
              {this.loopingSkills()}
            </div>
          </div>
        </>
      );
    },
  };

  // putting all sliders in array then mapping
  const allSliders = [
    introduction,
    dailyCoding,
    fastTyping,
    meetMentors,
    english,
  ];
  const mappingSliders = allSliders.map((slide, index) => {
    return (
      <li
        key={index + 1}
        className={` slide slide${
          index + 1
        } d-flex align-items-center  justify-content-evenly`}
        id={index + 1}
      >
        {slide.objectJSX()}
      </li>
    );
  });
  // let bullets = () => {}; //we make empty function to put it in the global scope then updating later

  //function updating here
  const bullets = allSliders.map((slide, index, array) => {
    return <div id={`${index + 1}`}></div>;
  });

  // ---------- slider = slides + bullets -------------
  // 2 arrows functions left and right in slider

  if (parentUl) {
    const allArrows = document.querySelectorAll(".home .holder > svg"),
      allSlides = parentUl.children,
      slideWidth = allSlides[0].offsetWidth,
      allBullets = document.querySelectorAll(".bullets div");
    let slideNumber = 1;
    // pressing on arrows then updating slideNumber then scroll in the function
    allArrows.forEach((arrow) => {
      arrow.addEventListener("click", (e) => {
        arrow.id === "left"
          ? slideNumber >= 2 && --slideNumber
          : slideNumber <= allSlides.length - 1 && ++slideNumber; //according to the bottom it will move the width
        checkingScroll();
      });
    });
    // pressing on bullets then updating slideNumber and activate then scroll
    allBullets.forEach((bullet) => {
      bullet.addEventListener("click", (e) => {
        slideNumber = +bullet.id;
        checkingScroll();
      });
    });
    function checkingScroll() {
      //this function aims to alawys checking slideNumber then scroll, Also activate bullets Also arrows
      // scroll
      parentUl.scrollLeft = (slideNumber - 1) * slideWidth;
      //bullets
      allBullets.forEach((bullet) => {
        bullet.classList.remove("active");
        bullet.id == slideNumber && bullet.classList.add("active");
      });

      //arrows
      allArrows.forEach((arrow) => {
        const arrowLeft = allArrows[0],
          arrowRight = allArrows[1];

        slideNumber == 1
          ? arrowLeft.classList.add("disabled")
          : arrowLeft.classList.remove("disabled");
        slideNumber == allSlides.length
          ? arrowRight.classList.add("disabled")
          : arrowRight.classList.remove("disabled");
      });
    }
    checkingScroll(); //we call it again to make first bullet active by default
  }
  //-------------- second section PROJECTS
  //making one class then call it inside our sectionProjects
  class SectionContent {
    // private
    static count = 0;
    constructor(image, name, link, parag, span) {
      this.i = image;
      this.n = name;
      this.l = link;
      this.p = parag;
      this.s = span;
      SectionContent.count++;
      //declaring doms as attributes, To use them in functions
    }
    functionOfAll() {
      return (
        !this.hide && (
          <div className="card-container  ">
            <div className="card">
              <div className="face front">
                <img src={this.i} alt={this.n} />
                <div className="text ">
                  <h3>{this.n}</h3>
                  <p>
                    <span>{this.s}</span>.
                  </p>
                  <button onClick={(e) => this.openCard(e)}>open card</button>
                </div>
              </div>
              <div className="face back">
                <div className="x-back" onClick={() => this.backCards()}>
                  X
                </div>
              </div>
            </div>
            <div className="content"></div>
          </div>
        )
      );
    }

    openCard(e) {
      const selectedCard = e.target.parentElement.parentElement.parentElement;
      const allCardsParents = document.querySelectorAll(".projects .card");

      // SectionContent.allCardsParents.length !== 0 &&
      allCardsParents.forEach((card) => {
        card.classList.remove("open-card");
        selectedCard.classList.add("open-card");
        card.parentElement.classList.add("hidden");
        selectedCard.parentElement.classList.remove("hidden");
      });
    }
    backCards() {
      const allCardsParents = document.querySelectorAll(".projects .card");
      allCardsParents.forEach((card) => {
        card.parentElement.classList.remove("hidden");
        card.classList.remove("open-card");
      });
    }
  }

  console.log(SectionContent.allCardsParents);
  //creating sectionProjects that holds all Object
  const allCards = [
    new SectionContent(firstProj, "Lyon", "test", "test", "HTML + CSS"),
    // new SectionContent(secondProj, "casber", "test", "test", "HTML + CSS"),
    // new SectionContent(secondProj, "casber", "test", "test", "HTML + CSS"),
    // new SectionContent(secondProj, "casber", "test", "test", "HTML + CSS"),
  ];
  const mappingCards = allCards.map((cardObj, index) => {
    return cardObj.functionOfAll();
  });

  return (
    <>
      <div className="home">
        <div className="intro position-relative">
          <div className="background position-absolute" />
          {/* <div className="second-background-color position-absolute"></div> */}
          <Container>
            <div className="holder position-relative">
              {/*This holder just to make position:relative for arrows left and right */}
              {/* {pressed && ( */}
              {/* <> */}
              <FontAwesomeIcon
                icon={faArrowLeft}
                className="arrow-left disabled"
                id="left"
              />
              <FontAwesomeIcon
                icon={faArrowRight}
                className="arrow-right"
                id="right"
              />
              <ul className="slider ">{mappingSliders}</ul>
              {/* {pressed && ( */}
              <div className="bullets d-flex justify-content-center gap-5 position-absolute">
                {bullets}
              </div>
            </div>
          </Container>
        </div>
        <div className="projects position-relative p-5 ">
          <Container>
            <Heading h1="Projects " />
            <div className="ui position-absolute ">{`</>`}</div>
            <div className="parent-projects d-flex ">{mappingCards}</div>
            <h2
              style={{
                color: "red",
                marginTop: "50px",
              }}
            >
              Note, I stopped here but I give you what had happened:
              <ul>
                <li>
                  - I successfully made cards by class generating objects from
                  it.
                </li>
                <li>
                  - I tried to make for the chosen cards position : fixed; and
                  made other cards blur.
                </li>
                <li>
                  - what problem I had faced? you can't position: fixed; with
                  the chosen card itself.
                </li>
                <li>
                  - You should position : fixed with the parent that holds all
                  cards so you need to display: none; of other cards.
                </li>
              </ul>
            </h2>
          </Container>
        </div>
        <div className="email" id="mail">
          <Container>
            <div className="form-details">
              <h1 className="text-danger">Contact me</h1>
              <form>
                <div className="name">
                  <label for="name">Client-Name</label>
                  <input type="text" id="name"></input>
                </div>
                <div className="phone">
                  <label for="phone">Phone</label>
                  <input type="number" id="phone"></input>
                </div>
                <div className="company">
                  <label for="company">company?</label>
                  <select id="company" type="select"></select>
                  {/* {company?} */}
                </div>
              </form>
            </div>
          </Container>
        </div>
        <div className="parent">
          <div className="box">
            <div className="face front">front</div>
            <div className="face back">back</div>
          </div>
        </div>
        <div className="footer">This is footer</div>
      </div>
    </>
  );
}
export default Home;
