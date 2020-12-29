import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Research = () => {

  const data = useStaticQuery(graphql`
    query {
      cemsPdf: file(relativePath: {eq: "2020_CEMS_Hong.pdf"}) {
        id
        publicURL
      }
    }
  `)

  return (
    <section id="research">
      <div className="md:flex items-start justify-between border-t border-black">
        {/* div for title*/}
        <div className="flex md:w-1/5 items-center mx-10 md:mx-12 my-6 mt-8 md:my-8">
          <svg className="text-custom-red fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M24 0h-24v24h24v-24z"/>
          </svg>
          <p className="mx-6 font-extrabold text-gray-800">research</p>
        </div>
        {/* div for content*/}
        <div className="md:flex md:w-4/5 mx-10 md:mx-12 md:ml-24 my-6 mb-8 md:my-8 text-gray-800">
          <div>
            <p>
              Broadly, I’m interested in studying autobiographical memory and aging.
              One major project I’ve been working on is the development and validation
              of HippoCamera, a smartphone app that leverages principles from cognitive neuroscience
              to improve memory for events from our day-to-day lives. You can read
              more about our work over at <a href="https://www.theglobeandmail.com/canada/article-toronto-teams-hippocamera-a-high-tech-memory-aid-for-alzheimers/" className="font-extrabold text-custom-red hover:underline">The Globe and Mail</a>
              , <a href="https://www.ctvnews.ca/sci-tech/how-smartphone-technology-is-being-used-to-combat-memory-loss-1.4486191" className="font-extrabold text-custom-red hover:underline">CTV</a>
              , and <a href="https://www.economist.com/1843/2019/09/04/a-new-app-could-help-you-recall-important-memories" className="font-extrabold text-custom-red hover:underline">The Economist</a>.
            </p>
            <br></br>
            <p>
              I am also keenly interested in investigating how our memories are organized—specifically,
              I am curious about the role of context on memory for naturalistic events, such
              as spatial routes, movies, and autobiographical events. You can read about my latest
              project looking at the effect of time and event boundaries on the episodic richness
              and temporal organization of recall for the movie Forrest Gump <a href={data.cemsPdf.publicURL} className="font-extrabold text-custom-red hover:underline">here</a> (this
              work was presented at the Context and Episodic Memory Symposium in 2020)!
            </p>
            <br></br>
            <p className="underline">Publications</p>
            {/* make a separate div for each bullet */}
            <div className="flex items-start justify-between mb-2">
              <p className="pr-6 font-semibold">→</p>
              <p>
                Yeung, L. K., Olsen, R. K., <b>Hong, B.</b>, Mihajlovic, V., D'Angelo, M. C.,
                Kacollja, A., Ryan, J. D. & Barense, M. D. (2019). Object-in-place memory
                predicted by anterolateral entorhinal cortex and parahippocampal cortex
                volume in older adults. <i>Journal of Cognitive Neuroscience, 31</i>(5), 711-729.
              </p>
            </div>
            <div className="flex items-start justify-between">
              <p className="pr-6 font-semibold">→</p>
              <p>
                Newsome, R. N., Trelle, A. N., Fidalgo, C., <b>Hong, B.</b>, Smith, V. M.,
                Jacob, A., Ryan, J.D., Rosenbaum, R.S., Cowell, R.A., and Barense, M. D. (2018).
                Dissociable contributions of thalamic nuclei to recognition memory: novel
                evidence from a case of medial dorsal thalamic damage. <i>Learning & Memory,
                25</i>(1), 31-44.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Research
