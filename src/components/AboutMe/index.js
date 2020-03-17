import React from 'react'
import { Element } from 'react-scroll'

import Photo from '../../image/yana/cv_photo_web2.jpg'

const AboutMe = () => (
  <Element className="second-section" name="about">
    <div className="section-second-wrapper" id="scroll-btn">
      <div className="section-title">
        <h2>
          About <span>me</span>
        </h2>
        <p>UX & UI designer based in usa.</p>
      </div>
      <div className="section-about">
        <div className="section-about__photo">
          <img src={Photo} />
        </div>
        <div className="section-about__info">
          <div className="section-about-name">
            <h3>Hi, I'm James Brown</h3>
          </div>
          <div className="section-about-subtitle">
            <p>
              <span>UX & UI</span> designer based in usa
            </p>
          </div>
          <div className="section-about-text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure recusandae velit beatae est vitae harum
              culpa. Eaque dolore nesciunt ab officiis sed obcaecati temporibus ipsa, dignissimos nemo voluptatibus
              error! Suscipit. Eaque dolore nesciunt ab officiis sed obcaecati temporibus ipsa, dignissimos nemo
              voluptatibus error! Suscipit.
            </p>
          </div>
          <div className="section-about-personal-info">
            <div className="section-about-personal-info__column">
              <div className="section-about-media">
                <label>Birthday:</label>
                <p>4th april 1991</p>
              </div>
              <div className="section-about-media">
                <label>Age:</label>
                <p>29 Yr</p>
              </div>
              <div className="section-about-media">
                <label>Residence:</label>
                <p>USA</p>
              </div>
              <div className="section-about-media">
                <label>Address:</label>
                <p>California, USA</p>
              </div>
            </div>
            <div className="section-about-personal-info__column">
              <div className="section-about-media">
                <label>E-mail:</label>
                <p>forexample@gmail.com</p>
              </div>
              <div className="section-about-media">
                <label>Phone:</label>
                <p>+380 68 055 0000</p>
              </div>
              <div className="section-about-media">
                <label>Skype:</label>
                <p>James.Skype</p>
              </div>
              <div className="section-about-media">
                <label>Freelance:</label>
                <p>Available</p>
              </div>
            </div>
          </div>
          <div className="section-about-btn">
            <a href="#">Download CV</a>
          </div>
        </div>
      </div>
    </div>
  </Element>
)

export default AboutMe
