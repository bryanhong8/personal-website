import React from "react"

const Service = () => {
  return (
    <section id="service">
      <div className="md:flex items-start justify-between border-t border-black">
        {/* div for title*/}
        <div className="flex md:w-1/5 items-center mx-10 md:mx-12 my-6 mt-8 md:my-8">
          <svg className="text-custom-green fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M24 0h-24v24h24v-24z"/>
          </svg>
          <p className="mx-6 font-extrabold text-gray-800">service</p>
        </div>
        {/* div for content*/}
        <div className="md:flex md:w-4/5 mx-10 md:mx-12 md:ml-24 my-6 mb-8 md:my-8 text-gray-800">
          <div>
            <p>
              I am on the organizing committee for <a href="https://www.sciencerendezvousuoft.ca/" className="font-extrabold text-custom-green hover:underline">Science Rendezvous</a>, an
              annual all-day family-friendly street festival for the Toronto community that promotes
              science awareness and interest.
            </p>
            <br></br>
            <p>
              I’ve also served many executive roles
              on the <a href="https://uoft-pgsa.org/" className="font-extrabold text-custom-green hover:underline">Psychology Graduate Student Association</a>, helping to
              improve the graduate student experience in the Psychology department.
              During my time as President of the PGSA, I helped to organize the first
              Non-Academic Career Panel, where former Psychology graduate students
              shared their experiences transitioning to careers outside academia.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Service
