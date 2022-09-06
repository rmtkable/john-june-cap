import React from "react";
import '../styles/footer.css'

function Footer() {
  return (
    <div className="footer">
          <h3>Capstone</h3>
          <p>
            Created by Kable Academy's 2022 Summer Bootcamp team of John
            Schuessler and Tyler Wellman.
          </p>
        <div className="">
          <h3>John Schuessler</h3>
          <a href="https://github.com/jschuess11">Github</a>
          <a href="https://www.linkedin.com/in/johnschuessler/">LinkedIn</a>
        </div>
        <div className="">
          <h3>Tyler Wellman</h3>
          <a href="https://github.com/TangoKilo85">Github</a>
          <a href="https://www.linkedin.com/in/tyler-wellman-776815243/">
            LinkedIn
          </a>
        </div>
    </div>
  );
}

export default Footer;
