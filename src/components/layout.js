import React from 'react'

import './style.scss'

import Helmet from 'react-helmet'

import Header from './Header'
import Footer from './Footer'

import AppleTouch from '../icons/favicon/apple-touch-icon.png'
import Icon32 from '../icons/favicon/favicon-32x32.png'
import Icon16 from '../icons/favicon/favicon-16x16.png'

const Layout = ({ children }) => {
  return (
    <>
      <Helmet title="Yana Alpert">
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />

        <link rel="apple-touch-icon" sizes="180x180" href={AppleTouch} />
        <link rel="icon" type="image/png" sizes="32x32" href={Icon32} />
        <link rel="icon" type="image/png" sizes="16x16" href={Icon16} />

        <link href="https://fonts.googleapis.com/css?family=Poppins:400,500,600,700&display=swap" rel="stylesheet" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css"
          integrity="sha256-46qynGAkLSFpVbEBog43gvNhfrOj+BmwXdxFgVK/Kvc="
          crossOrigin="anonymous"
        />
      </Helmet>

      <div className="Page">
        {/* <div id="loader" className="vertical--center">
          <svg className="spinner" viewBox="0 0 50 50">
            <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
          </svg>
        </div> */}

        <Header />

        <div className="Page_wrapper">
          {children} <Footer />
        </div>
      </div>
    </>
  )
}

export default Layout
