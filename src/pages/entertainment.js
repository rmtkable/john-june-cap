import React from "react";
import kingsIsland from "../assets/kingsIsland.jpg"
import '../styles/entertainment.css';

export const Entertainment = () => {
    return (
        <div>
            <div className="home">
                <div className="entertainment-banner">
                    <div className="aboutContainer">
                        <h1>Entertainment</h1>
                    </div>
                </div>
            <div className="entertainmentHeader">
                <h1>Looking for Fun? Check out these Entertainment Hotspots!</h1>
            </div>

            <div className="entertainmentCards">
                <div className="container-card">
                    <h5 className="card-title">King's Island</h5>
                    <img src={kingsIsland} className="card-img-top" alt="King's Island" />
                </div>
                <div className="card-body">
                    <p className="card-text">Home to more than 100 incredible rides and attractions, Kings Island boasts the perfect combination of world-class thrills and family-friendly fun! Experience some of the wildest roller coasters in the world, including a brand new record breaker in Orion and longstanding legends like The Beast, then explore an award-winning kids' area, enormous accompanying waterpark, and so much more!</p>
                </div>
                    <div class="card-body">
                    <a href="https://www.visitkingsisland.com/" target="_blank" rel="noreferrer" class="card-link">Website</a>
                    </div>
            </div>
        </div>
        </div>
    )
}

export default Entertainment