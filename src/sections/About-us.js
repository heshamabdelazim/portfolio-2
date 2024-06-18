//react
import { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";

//pics
import pic2 from "../images/military-servivce-modified.png";
import pic3 from "../images/evidence 2.JPG";

//font-awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faHome,
} from "@fortawesome/free-solid-svg-icons"; //all of these are icons
import Heading from "../components/Heading2";

export function AboutUs() {
  // useStates hock
  let [myParentUl, setMyParentUl] = useState();
  let [slide, setSlide] = useState(1);

  //--------- making drag
  useEffect(() => {
    // the following lines to catch a dom
    setMyParentUl(document.querySelector(".about .parentUl"));
  }, []);

  //we will object every pic then put it inside array then mapping inside that array

  const card2 = {
    image: pic2,
    title: "military cirtificate",
    parag: "my military services is exmpted",
  };
  const card3 = {
    image: pic3,
    title: "English",
    // parag: "Over 20K words into Arabic to engage the language",
    parag:
      "To enhance Egnlish in writing, reading & translating over 20K words into Arabic.",
  };
  // the following array has objects to put it
  const cardsArray = [card2, card3];
  //-------
  let puttingCards = cardsArray.map((card, index) => {
    return (
      <li
        className="slide d-flex align-items-center flex-row-reverse justify-content-between"
        id={index + 1}
      >
        <div className="image" draggable="false">
          <img draggable="false" src={card.image} alt={card.title}></img>
          {/* this attribute draggable="false" makes the picture can't be dragged, Try it. */}
        </div>
        <div className="text">
          <h2>{card.title.toUpperCase()}</h2>
          <p>{card.parag}</p>
        </div>
      </li>
    );
  });
  //-------mapping of slides finished

  // dragging
  myParentUl && console.log(myParentUl.scrollLeft);
  let isDragging = false,
    startX,
    isStartDragging = true;

  const startDragging = (e) => {
    isDragging = true;
    myParentUl.classList.add("dragging");
    startX = isStartDragging ? e.pageX : myParentUl.scrollLeft + e.pageX; //when you click on area 1127 forExample. then you go to the dragging function
    startX = e.pageX;
    console.log(startX, "this is startX");
  };

  const dragging = (e) => {
    if (isDragging) {
      myParentUl.scrollLeft = startX - e.pageX;
    }
  };
  const stopDragging = (e) => {
    isDragging = false;
    console.log(
      myParentUl.scrollLeft,
      "this is distance object moves (scrollLeft)"
    );
    myParentUl.classList.remove("dragging");
    isStartDragging = false;
  };
  myParentUl && myParentUl.addEventListener("mousedown", startDragging);
  myParentUl && myParentUl.addEventListener("mousemove", dragging);
  myParentUl && document.addEventListener("mouseup", stopDragging);

  if (myParentUl) {
    const allArrows = document.querySelectorAll(".holder svg");
    const slideWidth = myParentUl.children[0].offsetWidth;
    allArrows.forEach((arrow) => {
      arrow.addEventListener("click", (e) => {
        myParentUl.scrollLeft += arrow.id === "left" ? -slideWidth : slideWidth;
      });
    });
  }
  return (
    <div className="about">
      <Container>
        <h1>This is about HELLOOO</h1>
        <div className="holder">
          {/*I made <holder> to position:relative of arrows left & right. Nothing more  */}
          <ul className="parentUl">{puttingCards}</ul>
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="arrow-left"
            id="left"
          />
          <FontAwesomeIcon
            icon={faArrowRight}
            className="arrow-right"
            id="right"
          />
        </div>
        <div className="text-test">
          <h1>Greetings sire</h1>
          <h3>The desert awaits you</h3>
        </div>
        <Heading h1="Hello guys" />
        <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
      </Container>
      <label for="beso">take a photo</label>
      <input type="file" id="beso" capture="" />
    </div>
  );
}
