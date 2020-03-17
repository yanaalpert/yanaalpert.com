import React from 'react'

const Skills = () => (
  <div className="third-section" id="section-mySkills">
    <div className="section-third-wrapper">
      <div className="section-title">
        <h2>
          My <span>Resume</span>
        </h2>
        <p>I'm Available For Freelance Projects.</p>
      </div>
      <div className="section-resume">
        <div className="section-resume__education">
          <div className="section-resume-title">
            <h4>Education</h4>
          </div>
          <div className="section-resume-timeline">
            <div>
              <div className="section-resume-timeline__title">
                <h5>Master In Computer Science</h5>
                <span>2012 - 2014</span>
              </div>
              <div className="section-resume-timeline__text">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, quaerat. Perspiciatis reiciendis
                  libero voluptas quas? Atque ad tempore obcaecati beatae, repellat doloribus repellendus, libero autem
                  nobis.
                </p>
              </div>
            </div>
            <div>
              <div className="section-resume-timeline__title">
                <h5>Studied at California University</h5>
                <span>2008 - 2012</span>
              </div>
              <div className="section-resume-timeline__text">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, quaerat. Perspiciatis reiciendis
                  libero voluptas quas? Atque ad tempore obcaecati beatae, repellat doloribus repellendus, libero autem
                  nobis.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="section-resume__experience">
          <div className="section-resume-title">
            <h4>Experience</h4>
          </div>
          <div className="section-resume-timeline">
            <div>
              <div className="section-resume-timeline__title">
                <h5>UI/UX Developer</h5>
                <span>2014 - 2015</span>
              </div>
              <div className="section-resume-timeline__text">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, quaerat. Perspiciatis reiciendis
                  libero voluptas quas? Atque ad tempore obcaecati beatae, repellat doloribus repellendus, libero autem
                  nobis.
                </p>
              </div>
            </div>
            <div>
              <div className="section-resume-timeline__title">
                <h5>Senior Developer</h5>
                <span>2015 - 2019</span>
              </div>
              <div className="section-resume-timeline__text">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, quaerat. Perspiciatis reiciendis
                  libero voluptas quas? Atque ad tempore obcaecati beatae, repellat doloribus repellendus, libero autem
                  nobis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-mySkills">
        <div className="mySkills" id="mySkills">
          <div className="left-wrapp">
            <div className="skill-title">
              <label>
                Php<span> - 1 year of experience</span>
              </label>
              <label data-num="50" className="skill-bar-percent">
                0
              </label>
              <label>%</label>
            </div>
            <div className="skillbar" data-percent="50%">
              <div className="skill-bar one"></div>
            </div>

            <div className="skill-title">
              <label>
                Html / Css<span> - 3 years of experience</span>
              </label>
              <label data-num="85" className="skill-bar-percent">
                0
              </label>
              <label>%</label>
            </div>
            <div className="skillbar" data-percent="85%">
              <div className="skill-bar two"></div>
            </div>
          </div>
          <div className="right-wrapp">
            <div className="skill-title">
              <label>
                Javascript<span> - 2 years of experience</span>
              </label>
              <label data-num="55" className="skill-bar-percent">
                0
              </label>
              <label>%</label>
            </div>
            <div className="skillbar" data-percent="55%">
              <div className="skill-bar three"></div>
            </div>

            <div className="skill-title">
              <label>
                Web Design<span> - 3 years of experience</span>
              </label>
              <label data-num="75" className="skill-bar-percent">
                0
              </label>
              <label>%</label>
            </div>
            <div className="skillbar" data-percent="75%">
              <div className="skill-bar four"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Skills
