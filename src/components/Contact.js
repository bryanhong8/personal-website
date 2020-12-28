import React from "react"

const Contact = () => {
  return (
    <section id="contact">
      <div className="md:flex items-start justify-between border-t border-black">
        {/* div for title*/}
        <div className="flex md:w-1/5 items-center mx-10 md:mx-12 my-6 mt-8 md:my-8">
          <svg className="text-custom-purple fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M24 0h-24v24h24v-24z"/>
          </svg>
          <p className="mx-6 font-extrabold text-gray-800">contact</p>
        </div>
        {/* div for content*/}
        <div className="md:flex md:w-4/5 mx-10 md:mx-12 md:ml-24 my-6 mb-8 md:my-8 text-gray-800">
          <div>
            <p>
              If you have any questions or want to get in touch with me, feel free
              to message me via <a href="mailto:bryan.hong@mail.utoronto.ca" className="font-extrabold text-custom-purple hover:underline">email</a>, <a href="https://twitter.com/bryan_hong_" className="font-extrabold text-custom-purple hover:underline">Twitter</a>,
              or <a href="https://www.linkedin.com/in/bryan-hong-154b21122/" className="font-extrabold text-custom-purple hover:underline">LinkedIn</a>! You
              can also find me on <a href="https://github.com/bryanhong8" className="font-extrabold text-custom-purple hover:underline">GitHub</a> and <a href="https://scholar.google.ca/citations?hl=en&pli=1&user=Xu2u0_UAAAAJ" className="font-extrabold text-custom-purple hover:underline">Google Scholar</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
