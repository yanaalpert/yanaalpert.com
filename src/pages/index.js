import React from 'react'

import Layout from '../components/layout'

import Hero from '../components/Hero'
import AboutMe from '../components/AboutMe'
import Skills from '../components/Skills'
import Services from '../components/Services'
import Testimonials from '../components/Testimonials'
import Portfolio from '../components/Portfolio'
import ContactMe from '../components/ContactMe'

const IndexPage = () => (
  <Layout>
    <Hero />
    <AboutMe />
    <Skills />
    <Services />
    <Testimonials />
    <Portfolio />
    <ContactMe />
  </Layout>
)

export default IndexPage
