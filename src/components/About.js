import React from "react";
import "./about.css";
import MayankProfile from "../assets/img/images/MayankProfile.jpg"
const AboutMe = () => {
  return (
    <section className="about section" id="about">
      <div className="heading">
        <h2>About Me</h2>
      </div>

      <div className="about-container">
        <div className="home-img-main">
          <img className="home-img" src={MayankProfile} alt="MayankProfile" />
        </div>
        <div className="about-text" id="user-detail-intro">
          <p>
            Hello stranger! 👋, my name is Mayank Khandelwal and I am a Full Stack
            Developer, passionate about building digital products that improve
            the everyday experience for people.
            <br />
            <br />I am a quick learner with core knowledge of Full stack
            technology and working with tech stacks like HTML, CSS, Javascript,
            Node Js, MongoDB, Express, etc., and passionate about developing
            user-friendly web applications. Looking forward to applying and
            enhancing my skills and knowledge as a developer.
          </p>
          <br />

          <div className="information">
            <div className="info-box">
              <i className="bx bxs-user"></i>
              <span>Name</span> -<h3>Mayank Khandelwal</h3>
            </div>

            <div className="info-box">
              <i className="bx bxs-phone"></i>
              <span>Mobile Number</span> -
              <span id="contact-phone">+91 8010608683</span>
            </div>

            <div className="info-box">
              <i className="bx bxs-envelope"></i>
              <span>E-Mail</span> -
              <span id="contact-email">khandelwalmayank.k@gmail.com</span>
            </div>
          </div>

          <a
            id="resume-link"
            href="https://drive.google.com/file/d/1KHNjnqrpVbdIa4RCkdblkMeu9JczrqJj/view?usp=sharing"
            download="MayankResume.pdf"
          >
            <button className="resume-button" id="resume-button">
              Resume
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
