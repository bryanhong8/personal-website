import React from "react"

import Header from "../components/Header.js"
import About from "../components/About.js"
import Research from "../components/Research.js"
import Teaching from "../components/Teaching.js"
import Service from "../components/Service.js"
import Other from "../components/Other.js"
import Contact from "../components/Contact.js"
import Footer from "../components/Footer.js"
import SEO from "../components/SEO.js"

// specify use of smooth-scroll if it detects an id class
if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

const IndexPage = () => (
  <div>
    <SEO title="Bryan Hong" />
    <Header />
    <About />
    <Research />
    <Teaching />
    <Service />
    <Other />
    <Contact />
    <Footer />
  </div>
)

export default IndexPage
