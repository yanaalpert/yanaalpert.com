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
        <p>UX & UI designer based in Atlanta.</p>
      </div>
      <div className="section-about">
        <div className="section-about__photo">
          <img src={Photo} />
        </div>
        <div className="section-about__info">
          <div className="section-about-name">
            <h3>Hi, I'm Yana Alpert</h3>
          </div>
          <div className="section-about-subtitle">
            <p>
              <span>UX & UI</span> designer based in Atlanta
            </p>
          </div>
          <div className="section-about-text">
            <p>
              Originally from Ukraine, from childhood I always wanted to learn and understand human behavior, I was
              always curious and explored everything.{' '}
              <p>
                I got my first computer at 5 years old, my mother has always been an example for me. She worked in an
                information center and I remember the time of floppy disks and punch cards. I studied at Computer
                colledge, then I graduated from university and information tehnologies have always been very close to
                me. At university, I developed an understanding of computers at both the physical and system's levels,
                an understanding of design principles, and developed analytical thinking.
              </p>{' '}
              I like to work in a team. I’m a consistent, patient and efficient. I enjoy the design of everyday things
              I'm always aspiring to learn something new, creative, logical and also constantly research innovations in
              my industry. In my free time, I cook, run marathons, travel, draw, I love photography and have a big
              collection of fridge magnets at home.
            </p>
          </div>
          <div className="section-about-personal-info">
            <div className="section-about-personal-info__column">
              <div className="section-about-media">
                <label>Birthday:</label>
                <p>15 November 1987</p>
              </div>
              <div className="section-about-media">
                <label>Age:</label>
                <p>32 Yr</p>
              </div>
              <div className="section-about-media">
                <label>Residence:</label>
                <p>USA</p>
              </div>
              <div className="section-about-media">
                <label>Address:</label>
                <p>Atlanta, USA</p>
              </div>
            </div>
            <div className="section-about-personal-info__column">
              <div className="section-about-media">
                <label>E-mail:</label>
                <p>hello@yanaalpert.com</p>
              </div>
              <div className="section-about-media">
                <label>Phone:</label>
                <p>+1(914)426-1832</p>
              </div>
              <div className="section-about-media">
                <label>Skype:</label>
                <p>crystal.yana</p>
              </div>
              <div className="section-about-media">
                <label>Freelance:</label>
                <p>Available</p>
              </div>
            </div>
          </div>
          <div className="section-about-btn">
            <a href="#">Download Portfolio</a>
          </div>
        </div>
      </div>
    </div>
  </Element>
)

export default AboutMe
