import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

function Applications() {
  let [sections, setSections] = useState();
  useEffect(() => {
    setSections(document.querySelectorAll(".applications .section"));
  }, []);
  console.log(sections);
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      //this entries will hold all sections
      console.log(entry);
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  });
  sections &&
    sections.forEach((section) => {
      observer.observe(section);
    });
  return (
    <div className="applications">
      <div className="section  ">
        <Container>
          <div className="d-flex justify-content-between align-items-center gap-4 p-5 section-ceontent">
            <h1>Greetings sire</h1>
            <h1> This is me hesham</h1>
          </div>
        </Container>
      </div>
      <div className="section  ">
        <Container>
          <div className="d-flex justify-content-between align-items-center gap-4 p-5 section-ceontent">
            <h2>This is section two</h2>
            <h2>This is HEsham Front-end developer</h2>
          </div>
        </Container>
      </div>
      <div className="section  ">
        <Container>
          <div className="d-flex justify-content-between align-items-center gap-4 p-5 section-ceontent">
            <h2>This is section three</h2>
            <h2>This is HEsham back-end developer</h2>
          </div>
        </Container>
      </div>
      <div className="section ">
        <Container>
          <div className="d-flex justify-content-between align-items-center gap-4 p-5 section-ceontent">
            <h2>This is section four</h2>
            <h2>This is HEsham Front-end developer</h2>
          </div>
        </Container>
      </div>
    </div>
  );
}
export default Applications;
