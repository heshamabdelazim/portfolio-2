function Test() {
  // Js
  const one = {
    h1: "greetings sire1",
    h2: "the desesrt awaits you.",
    p: "nice good",
    objectJSX: function () {
      return (
        <>
          <h1>{this.h1}</h1>
        </>
      );
    },
  };
  const two = {
    h1: "greetings sire2",
    h2: "the desesrt awaits you.",
    p: "nice good",
    de7king: "this is de7king",
  };
  const three = {
    h1: "greetings sire3",
    h2: "the desesrt awaits you.",
    p: "nice good",
    differntKey: true,
  };
  const four = {
    h1: "greetings sire4",
    h2: "the desesrt awaits you.",
    p: "nice good",
  };

  const array = [one, two, three, four];
  const looping = array.map((object, index) => {
    // the following is JS
    return (
      <>
        {object.de7king && <h2>{object.de7king}</h2>}
        {object.differntKey && <h1>yes we found it</h1>}
      </>
    );
  });

  // jsX
  return (
    <>
      <h1>This is test</h1>
      <div>{looping}</div>
    </>
  );
}
export default Test;
