import React from "react"
import { Link } from "gatsby"

const Oop = () => {

  return (
    <section>
      <div className="pt-16">
        <div className="mx-6 md:mx-12 my-8 p-4 md:w-2/3 tracking-tight">
          <p>
            Oops, this page doesn't seem to exist. Click <Link to="/#top" className="font-extrabold">here</Link> to
            go back.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Oop
