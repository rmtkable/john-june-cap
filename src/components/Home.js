import React from "react";
import '../styles/home.css'
import downtownPic from "../assets/downTownPic.jpg"

const Home = () => {
  return (
    // <div class="dtown">
    <div class="home">
    <img src={downtownPic} alt="Downtown Cincinnati" />
    <p class="landing-text">Cincinnati: Queen of the Midwest!</p>
    </div>
    // </div>
  );
};

export default Home;
