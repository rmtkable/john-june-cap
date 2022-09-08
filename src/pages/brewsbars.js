import React from "react";
import '../styles/brewsBars.css'
import rhinegeistPic from "../assets/rhinegeistPic.jpg"

export const Brewsbars = () => {
    return (
        <div>
            <div className="home">
                <div className="brew-banner">
                    <div className="aboutContainer">
                        <h1>Breweries and Bars</h1>
                    </div>
                </div>
            <div className="brewHeader">
                <h1>Check out some of the top Breweries and Bars in Cincinnati!</h1>
            </div>

            <div className="brewCards">
                <div className="container-card">
                    <h5 className="card-title">Rhinegeist</h5>
                    <img src={rhinegeistPic} className="card-img-top" alt="Rhinegeist Brewery" />
                </div>
                <div className="card-body">
                    <p className="card-text">This large brewery and event space in historic Over-the-Rhine (housed in an old Moerlein bottling plant) produces hoppy and sessionable ales and Cidergeist, its line of crushable ciders. The seasonal deck is an excellent addition to the city’s rooftop bar scene. The first half of Rhinegeist’s name hails from its location in Cincinnati. The second half, “Geist,” is a German word that translates to “ghost” and a nod to the city’s German heritage.</p>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Brewsbars
