import React from 'react'
import { Element } from 'react-scroll'

const SERVICES = [
  {
    title: 'Graphic Design',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos fugit ipsum magnam voluptatem'
  },
  {
    title: 'Graphic Design',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos fugit ipsum magnam voluptatem'
  },
  {
    title: 'Graphic Design',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos fugit ipsum magnam voluptatem'
  }
]

const Services = () => (
  <Element className="fourth-section" name="services">
    <div className="section-fourth-wrapper" id="MyServices">
      <div className="section-title">
        <h2>
          My <span>Services</span>
        </h2>
        <p>Services I Offer To My Clients.</p>
      </div>
      <div className="section-services">
        {SERVICES.map(S => {
          return (
            <div className="service__inner" key={S.title}>
              <div className="service__inner-title">
                <h6>{S.title}</h6>
              </div>
              <div className="service__inner-subTitle">
                <p>{S.description}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  </Element>
)

export default Services
