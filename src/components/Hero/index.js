import React from 'react'

import { Element, Link } from 'react-scroll'
import bg from '../../image/bg.jpg'
import mouse from '../../icons/mouse.svg'

import Photo from '../../image/yana/hero2.png'

const Hero = () => (
  <Element className="section-hero" id="Home" style={{ backgroundImage: `url(${bg})` }} name="home">
    <div className="section-hero-wrapper">
      <div className="Hero__left">
        <div className="Hero__phone">
          <a href="tel:9144261832">+1 914 426 1832</a>
        </div>
        <div className="Hero__title">
          <h1>
            Y<span>a</span>na
            <br />
            Alpert
          </h1>
        </div>
        <div className="Hero__about">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut saepe aliquam, tenetur unde laudantium
            voluptatem eos excepturi temporibus quaerat. Ratione eveniet.
          </p>
        </div>
        <div className="Hero__btn">
          <Link activeClass="active" to="contacts" spy={true} smooth={true} duration={500} id="Contact-me">
            <i className="fas fa-plus"></i> Contact me
          </Link>

          <span>
            <i className="far fa-clock"></i> I will get back to you ASAP and look forward to hear about your project
          </span>
        </div>
        <div className="Hero__scroll-btn">
          <a href="#scroll-btn">
            <img src={mouse} alt="scroll" />
          </a>
        </div>
      </div>
      <div className="Hero__right">
        <img src={Photo} />
      </div>
    </div>
  </Element>
)

export default Hero
