import React from "react"

const Other = () => {
  return (
    <section id="other">
      <div className="md:flex items-start justify-between border-t border-black">
        {/* div for title*/}
        <div className="flex md:w-1/5 items-center mx-10 md:mx-12 my-6 mt-8 md:my-8">
          <svg className="text-custom-orange fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M24 0h-24v24h24v-24z"/>
          </svg>
          <p className="mx-6 font-extrabold text-gray-800">other</p>
        </div>
        {/* div for content*/}
        <div className="md:flex md:w-4/5 mx-10 md:mx-12 md:ml-24 my-6 mb-8 md:my-8 text-gray-800">
          <div>
            <p>Here are some of the other projects and fun things’ve worked on:</p>
            {/* make a separate div for each bullet */}
            <div className="flex items-start justify-between mb-2">
              <p className="pr-6 font-semibold">→</p>
              <p>
                This website was made with Gatsby, styled with Tailwind CSS and deployed with Netlify. The design
                is loosely inspired by <a href="http://www.studiowyse.com/all-work/the-grid" className="font-extrabold text-custom-orange hover:underline">The Grid</a>, a
                now-discontinued weekly Toronto newspaper. You can check out the
                source code for the site <a href="https://github.com/bryanhong8/personal-website" className="font-extrabold text-custom-orange hover:underline">here</a>!
              </p>
            </div>
            <div className="flex items-start justify-between">
              <p className="pr-6 font-semibold">→</p>
              <p>
                I was on the organizing committee for <a href="https://psychhack2019.github.io/landing/index.html" className="font-extrabold text-custom-orange hover:underline">PsychHacks</a>, a 24
                hour hackathon event that helped both graduate and undergraduate
                students develop and practice their programming skills in a
                psychology research setting.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Other
