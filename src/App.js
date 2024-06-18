// import logo from "./logo.svg";
//css
// import "../src/css/home.css";
import "../src/css/AboutUsSilder.css";
// import "../src/css/navbar.css";
// import "../src/css/logo.css";
// import "../src/css/applicatoin.css";
// import "../src/css/Heading.css";
// import "../src/css/Head2.css";
// import "./css/Heading.css";

// sectoins
import { NavBar } from "./sections/1-navbar/NavBar";
import { Slider } from "./sections/2-slider/Slider";
// import AboutUs from "./sections/About-us";
// import Home from "./sections/2-slider/Slider"; //k
// import ReactLogo from "./components/ReactLogo";
// import Footer from "./components/Footer";
// import { Route, Routes } from "react-router-dom";
// import Applications from "./pages/Applicatoins";
// import AboutUs from "./pages/About-us";
// import { useState } from "react";
// import Test from "./pages/test";

function App() {
  return (
    <div className="App">
      <div className="nav-parent">
        {/* why did we wrap the NavBar? to make z-index:99;  */}
        <NavBar />
      </div>
      <div className="home">
        <div className="overflow-hidden">
          <Slider />
        </div>
      </div>
      {/* <div className="test">
        <AboutUs />
      </div> */}
      {/* <Routes>
        <Route path="/applications" element={<Applications />} />
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about-h" element={<AboutUs />} />
        <Route path="/test" element={<Test />} />
      </Routes> */}
      {/* the following inside projects */}
      {/* <SideBar/>  */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;

/* <p>
  Edit <code>src/App.js</code> and save to reload.
</p> */

/* <a
  className="App-link"
  href="https://reactjs.org"
  target="_blank"
  rel="noopener noreferrer"
>
  Learn React
</a> */
