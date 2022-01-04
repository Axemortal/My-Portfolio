import React from "react";
import Person from "../Images/Portrait-image.png";
import HTMLLogo from "../Images/HTML-logo.svg";
import CSSLogo from "../Images/CSS-logo.svg";
import JSLogo from "../Images/Javascript-logo.svg";
import ReactLogo from "../Images/React-logo.svg";

export default function About() {
  return (
    <>
      <section className="section section__about">
        <div className="container">
          <h2 className="section--title">About</h2>
          <div className="photo-intro-flex">
            <img className="image-myself" src={Person} alt="yifan's potrait" />
            <div className="section__introduction">
              <h3>Frontend Web Developer</h3>
              <p>
                <span className="italics">
                  I am incredibly invested in understanding how technology works
                  behind-the-scenes
                </span>
              </p>
              <ul className="about--ul">
                <li className="about--li">Phone: +65 9440 7553</li>
                <li className="about--li">Email: wuyifan2001@gmail.com</li>
                <li className="about--li">
                  Location: Jurong East, Singapore (Open to Remote)
                </li>
              </ul>
              <p>
                I learned Frontend Web Development through a{" "}
                <span tabIndex="1" className="link--accent">
                  <a href="https://scrimba.com/learn/frontend" target="_blank" rel="noopener noreferrer">
                    full course in Scrimba
                  </a>
                </span>{" "}
                and graduated from the course. I know the fundamentals of HTML,
                CSS, Javascript and can use React to build websites. This is my
                first individual project on building websites with React!
              </p>
              <p>
                I am currently available to work full-time and am actively
                searching for internships related to programming.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="section__skills">
          <h2 className="section--title">Skills</h2>
          <div className="skills--grid">
            <img className="skill--logo logo_HTML" src={HTMLLogo} alt="html logo"/>
            <img className="skill--logo logo_CSS" src={CSSLogo} alt="css logo"/>
            <img className="skill--logo logo_JS" src={JSLogo} alt="javascript logo"/>
            <img className="skill--logo logo_React" src={ReactLogo} alt="react logo"/>
          </div>
        </div>
      </section>
    </>
  );
}
