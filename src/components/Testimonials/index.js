import React from 'react'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import Slider from 'react-slick'

const sliderSettings = {
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 2,
  autoplay: true,
  autoplaySpeed: 5000,
  speed: 1000,
  appendArrows: false,
  dots: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
}

const Testimonials = () => (
  <div className="fifth-section">
    <div className="section-fifth-wrapper">
      <div className="section-title">
        <h2>TESTIMONIALS</h2>
        <p>What my clients say about me.</p>
      </div>
      <div className="testimonials-section">
        <Slider className="testimonials-section__slider" {...sliderSettings}>
          <div className="slider-item">
            <div className="slider-inner">
              <div className="slider-inner__user">
                <div className="photo">
                  <img src="https://via.placeholder.com/80x80" alt="photo user" />
                </div>
                <div className="name">
                  <span>-Steve Lehman</span>
                </div>
              </div>
              <div className="slider-inner__text">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia fugiat facere in quam voluptates
                  sequi dolore, voluptatibus voluptas, pariatur eos magni. Quam nulla inventore iste accusamus, placeat
                  facilis quod odit?
                </p>
              </div>
            </div>
          </div>
          <div className="slider-item">
            <div className="slider-inner">
              <div className="slider-inner__user">
                <div className="photo">
                  <img src="https://via.placeholder.com/80x80" alt="photo user" />
                </div>
                <div className="name">
                  <span>-Nancy Bayers</span>
                </div>
              </div>
              <div className="slider-inner__text">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia fugiat facere in quam voluptates
                  sequi dolore, voluptatibus voluptas, pariatur eos magni. Quam nulla inventore iste accusamus, placeat
                  facilis quod odit?
                </p>
              </div>
            </div>
          </div>
          <div className="slider-item">
            <div className="slider-inner">
              <div className="slider-inner__user">
                <div className="photo">
                  <img src="https://via.placeholder.com/80x80" alt="photo user" />
                </div>
                <div className="name">
                  <span>-Steve Lehman</span>
                </div>
              </div>
              <div className="slider-inner__text">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia fugiat facere in quam voluptates
                  sequi dolore, voluptatibus voluptas, pariatur eos magni. Quam nulla inventore iste accusamus, placeat
                  facilis quod odit?
                </p>
              </div>
            </div>
          </div>
          <div className="slider-item">
            <div className="slider-inner">
              <div className="slider-inner__user">
                <div className="photo">
                  <img src="https://via.placeholder.com/80x80" alt="photo user" />
                </div>
                <div className="name">
                  <span>-Nancy Bayers</span>
                </div>
              </div>
              <div className="slider-inner__text">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia fugiat facere in quam voluptates
                  sequi dolore, voluptatibus voluptas, pariatur eos magni. Quam nulla inventore iste accusamus, placeat
                  facilis quod odit?
                </p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  </div>
)

export default Testimonials
