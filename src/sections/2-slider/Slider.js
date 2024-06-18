// css
import "./Slider.css";

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

import { Slides } from "./data";

export const Slider = () => {
  //----------------
  // Hoocks
  //----------------
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
  let slidesLength = useRef(Slides().length); //I made this in global scope, Cuz it contains hock and can't use it inside any js-function

  //----------------
  // mapping bullets
  //----------------
  const mappingBullets = Slides().map((slide, index) => (
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
    const lastX = (slidesLength.current - 1) * ulSlider.current.offsetWidth;
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
          {Slides()}
        </ul>
      </Container>
    </div>
  );
};
