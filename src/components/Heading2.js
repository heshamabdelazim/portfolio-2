function Heading2(props) {
  const h2Heading = document.querySelector(".heading2");
  const span1 = document.querySelector(".span1");
  const span2 = document.querySelector(".span2");
  let distance = 20;
  // h2Heading.addEventListener("mousemove",)
  h2Heading && h2Heading.addEventListener("mousemove", whileMoving);
  // functions here
  function whileMoving(e) {
    let { offsetX: x, offsetY: y } = e;
    console.log(x);
    let { offsetWidth: width, offsetHeight: height } = e.currentTarget;
    // some maths to put some action
    let xValue = Math.round((x / width) * distance - distance / 2); //when x = 10 then the answer is (10/453)*15 - 15/2 //Also when x = 200 then the answer is (200/453)*15 - 15/2
    let hValue = Math.round((y / height) * distance - distance / 2);
    span1.style.transform = `translate(${xValue}px, ${-hValue}px)`;
    span2.style.transform = `translate(${-xValue}px, ${hValue}px)`;
  }
  return (
    <>
      <h2 className="heading2">
        {props.h2}
        <span className="span1"></span>
        <span className="span2"></span>
      </h2>
    </>
  );
}
export default Heading2;
