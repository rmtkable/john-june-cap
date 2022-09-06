import React from "react";
import '../styles/home.css'
import downtownPic from "../assets/downTownPic.jpg"
import {FaChessQueen} from "react-icons/fa";

const Home = () => {
  return (
    <div class="home container-fluid">
      <img className="homeimg" src={downtownPic} alt="Downtown Cincinnati" />
      <p class="landing-text"><FaChessQueen /> Cincinnati: Queen of the Midwest! <FaChessQueen /></p>
    </div>
  );
};

export default Home;