import React, { useState, useEffect } from 'react'

import { Link } from 'react-scroll'

const Header = () => {
  const [menuDown, setMenuDown] = useState(0)

  const handler = () => {
    setMenuDown(window.scrollY > 0)
  }

  useEffect(
    () => {
      window.addEventListener('scroll', handler)
    },
    () => {
      window.removeEventListener('scroll', handler)
    }
  )

  return (
    <header className={`Header ${menuDown ? `menu-down` : ``}`} name="home">
      <div className="Header-wrapper">
        <div className="Header__logo">
          <a href="/">.YANA</a>
        </div>
        <nav className="navFull">
          <ul>
            <li>
              <Link activeClass="active" to="home" spy={true} smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li>
              <Link activeClass="active" to="about" spy={true} smooth={true} duration={500}>
                About Me
              </Link>
            </li>
            <li>
              <Link activeClass="active" to="services" spy={true} smooth={true} duration={500}>
                My services
              </Link>
            </li>
            <li>
              <Link activeClass="active" to="portfolio" spy={true} smooth={true} duration={500}>
                Portfolio
              </Link>
            </li>
            <li>
              <Link activeClass="active" to="contacts" spy={true} smooth={true} duration={500}>
                Contacts
              </Link>
            </li>
          </ul>
        </nav>
        <div className="Header__burger-menu" id="Header__burger-menu">
          <span></span>
        </div>

        <div className="Header__links">
          <ul>
            <li>
              <a href="#">
                <i className="fab fa-github-alt"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
          </ul>
          <span>Follow Me</span>
        </div>

        <div className="Header__menu">
          <div className="menu-wrapp">
            <nav className="nav">
              <ul>
                <li>
                  <a href="#Home">Home</a>
                </li>
                <li>
                  <a href="#scroll-btn">About me</a>
                </li>
                <li>
                  <a href="#section-mySkills">My resume</a>
                </li>
                <li>
                  <a href="#MyServices">My services</a>
                </li>
                <li>
                  <a href="#Portfolio">Portfolio</a>
                </li>
                <li>
                  <a href="#contact">Contacts</a>
                </li>
              </ul>
            </nav>
            <div className="info">
              <div className="info-wrapp">
                <span>CONTACT INFO :</span>
                <ul className="contact">
                  <li>California, USA</li>
                  <li>+380 68 055 0000</li>
                  <li>forexample@gmail.com</li>
                </ul>
                <span>FOLLOW ME :</span>
                <ul className="link">
                  <li>
                    <a href="#">
                      <i className="fab fa-github-alt"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="close_btn">
            <span></span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
