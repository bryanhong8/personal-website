import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Img from "gatsby-image"

const About = () => {

  const data = useStaticQuery(graphql`
    query {
      headshotPic: file(relativePath: {eq: "hong_headshot_2020.jpg"}) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cvPdf: file(relativePath: {eq: "CV_Hong.pdf"}) {
        id
        publicURL
      }
    }
  `)

  return (
    <section>
      <div className="md:flex pt-16">
      {/* put image at top if mobile*/}
        <Img
            fluid={data.headshotPic.childImageSharp.fluid}
            alt="Hi, it's me!"
            style={{height: "100%", width: "100%"}}
            className="md:hidden"
        />
        {/* container for about text section */}
        <div className="md:w-2/3">
          <div className="bg-custom-yellow mx-6 md:mx-12 my-8 p-4 md:w-2/3 tracking-tight">
            <p>
              Hi, my name is Bryan Hong! I’m a PhD candidate studying the cognitive
              neuroscience of memory with Dr. Morgan Barense at the University of Toronto.
            </p>
            <br></br>
            <p>A copy of my CV can be downloaded <a href={data.cvPdf.publicURL} className="font-extrabold hover:underline">here</a>.</p>
          </div>
        </div>
        {/* put image at bottom if not mobile*/}
        <Img
            fluid={data.headshotPic.childImageSharp.fluid}
            alt="Hi, it's a picture of me!"
            className="hidden md:block w-1/2 mr-12"
        />
      </div>
    </section>
  )
}

export default About
