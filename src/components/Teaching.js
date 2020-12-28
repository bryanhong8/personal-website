import React from "react"

const Teaching = () => {
  return (
    <section id="teaching">
      <div className="md:flex items-start justify-between border-t border-black">
        {/* div for title*/}
        <div className="flex md:w-1/5 items-center mx-10 md:mx-12 my-6 mt-8 md:my-8">
          <svg className="text-custom-blue fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M24 0h-24v24h24v-24z"/>
          </svg>
          <p className="mx-6 font-extrabold text-gray-800">teaching</p>
        </div>
        {/* div for content*/}
        <div className="md:flex md:w-4/5 mx-10 md:mx-12 md:ml-24 my-6 mb-8 md:my-8 text-gray-800">
          <div>
            <p>
              I love having the opportunity to share my knowledge with others and
              equipping students with new skills. I have developed materials for and
              taught <a href="https://fas.calendar.utoronto.ca/course/psy201h1" className="font-extrabold text-custom-blue hover:underline">PSY201 (Statistics I)</a>, an
              introductory statistics course at the University of Toronto. I have over four years
              of experience as a teaching assistant across eight different undergraduate
              courses, ranging from introductory psychology courses aimed at first-year
              students to research seminar courses aimed at upper-year specialist students.
            </p>
            <br></br>
            <p>
              I also am a certified instructor for <a href="https://carpentries.org/" className="font-extrabold text-custom-blue hover:underline">The Carpentries</a>, an
              international non-profit organization dedicated to teaching foundational
              computational and data literacy skills. With the Carpentries, I’ve led
              workshops teaching Bash, Python, and R.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Teaching
