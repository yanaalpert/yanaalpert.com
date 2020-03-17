import React from 'react'

import { Element } from 'react-scroll'

const ContactMe = () => (
  <Element className="seventh-section" name="contacts">
    <div className="section-seventh-wrapper" id="contact">
      <div className="section-title">
        <h2>
          Get In <span>Touch</span>
        </h2>
        <p>Feel Free To Contact Me Any Time.</p>
      </div>
      <div className="contact-wrapp">
        <div className="contact-wrapp__form">
          <div className="form-title">
            <span>How can I help you ?</span>
          </div>
          <div className="form-subTitle">
            <span>fill out this form we&apos;ll contact back shortly.</span>
          </div>
          <div className="cont-Form">
            <form name="MyForm">
              <input type="hidden" name="project_name" value="Site Name" />
              <input type="hidden" name="admin_email" value="forexample@gmail.com" />
              <input type="hidden" name="form_subject" value="Form" />

              <div id="winError"></div>
              <div className="form-name">
                <input type="text" id="name" name="Name" placeholder="Type your name" />
              </div>

              <div className="form-email">
                <input type="email" id="email" name="Email" placeholder="Type your email" />
              </div>

              <div className="form-textarea">
                <textarea name="text_comment" id="text_comment" placeholder="Type your messages"></textarea>
              </div>

              <div className="btn__send">
                <button
                  type="submit"
                  id="btn_submit"
                  name="done"
                  onClick={e => {
                    e.preventDefault()
                  }}
                >
                  <i className="fas fa-plus"></i>
                  <span> Send</span>
                </button>
              </div>
            </form>
            <div id="MessageSent">
              <div id="overlaySentPopup"></div>
              <div className="MessagePopup">
                <div>
                  <div className="PopupTitle">
                    <h2>Thank you!</h2>
                  </div>
                  <div className="PopupSubTitle">
                    <p>Your message has been sent</p>
                  </div>
                </div>
                <div id="SentPopupClose">
                  <i className="fas fa-times"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-wrapp__info">
          <div className="info-title">
            <span>Let’s Get Work With Me</span>
          </div>
          <div className="info-subTitle">
            <span>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
              laoreet dolore. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet,
              consectetuer adipiscing elit
            </span>
          </div>
          <div className="block-info">
            <div className="block-info__item">
              Address: <span>Atlanta, Georgia, USA</span>
            </div>
            <div className="block-info__item">
              Phone:{' '}
              <span>
                <a href="tel:9144261832">+1 914 426 1832</a>
              </span>
            </div>
            <div className="block-info__item">
              E-mail:{' '}
              <span>
                <a href="mailto:hello@yanaalpert.com">hello@yanaalpert.com</a>
              </span>
            </div>
            {/* <div className="block-info__item">
              Skype: <span>James.Skype</span>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  </Element>
)

export default ContactMe
