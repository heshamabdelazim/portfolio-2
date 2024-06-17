import { useRef } from "react";

export const Links = ({ showMenu }) => {
  const myUl = useRef();
  const linksArray = ["home", "about-H", "applications", "test"];

  const pressing = (e) => {
    for (let i = 0; i < myUl.current.children.length; i++) {
      myUl.current.children[i].classList.remove("pressed");
    }
    e.currentTarget.classList.add("pressed");
  };
  return (
    <ul
      className={`align-items-center`}
      ref={myUl}
      style={
        showMenu
          ? { transform: "translateY(100%)" }
          : { transform: "translateY(0)" }
      }
    >
      {linksArray.map((link, index) => (
        <li
          key={index + 1}
          onClick={(e) => {
            pressing(e);
          }}
        >
          <a href={`#${link}`}>{link}</a>
        </li>
      ))}
    </ul>
  );
};
