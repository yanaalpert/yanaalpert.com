import React from 'react'
import { Element } from 'react-scroll'

const Portfolio = () => (
  <Element className="sixth-section" name="portfolio">
    <div className="section-sixth-wrapper" id="Portfolio">
      <div className="section-title">
        <h2>Portfolio</h2>
        <p>Meet My Awesome Works and Enjoy.</p>
      </div>
    </div>
    <div className="section-portfolio">
      <div className="portfolio">
        <div className="inner inner_width Html">
          <a href="image/01.jpg" className="onHover">
            <div className="img">
              <img src="https://via.placeholder.com/1280x853" alt="work" />
            </div>
            <div className="details-wrapp">
              <div className="details">
                <div className="details__title">
                  <span>Our Photography</span>
                </div>
                <div className="details__btn">
                  <i className="fas fa-plus"></i>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div className="inner inner_width Html">
          <a href="https://via.placeholder.com/1280x853" className="onHover">
            <div className="img">
              <img src="https://via.placeholder.com/1280x853" alt="work" />
            </div>
            <div className="details-wrapp">
              <div className="details">
                <div className="details__title">
                  <span>Our Photography</span>
                </div>
                <div className="details__btn">
                  <i className="fas fa-plus"></i>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </Element>
)

export default Portfolio
