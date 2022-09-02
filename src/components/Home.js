import React from "react";
import '../styles/home.css'
import downtownPic from "../assets/downTownPic.jpg"
import {FaChessQueen} from "react-icons/fa";

const Home = () => {
  return (
    <div class="home">
    <img src={downtownPic} alt="Downtown Cincinnati" />
    
    <p class="landing-text"><FaChessQueen /> Cincinnati: Queen of the Midwest! <FaChessQueen /></p>
  
      <img src={downtownPic} alt="Downtown Cincinnati" />
      <p class="landing-text">Cincinnati: Queen of the Midwest!</p>
    </div>
  );
};

export default Home;