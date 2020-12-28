import React, { useState } from "react"
import { Link } from "gatsby"

const Header = () => {
  // keep menus not expanded as default
  const [isExpanded, toggleExpansion] = useState(false)

  return (
    <header>
      <div className="fixed w-full z-30 flex justify-between items-center h-16 pb-2 bg-white border-b-2 border-black">
        {/* container for name */}
        <div className="pt-8 pb-2 pl-6 md:pl-12 pr-20 border-r-2 border-black">
          <Link to="/#top" className="font-extrabold text-2xl tracking-tighter" onClick={() => isExpanded ? toggleExpansion(!isExpanded) : ""}>Bryan Hong</Link>
        </div>
        {/* container for menu icon */}
        <div className="md:hidden pt-8 pb-2 px-6 md:px-12">
          <button type="button" onClick={() => toggleExpansion(!isExpanded)} className="block focus:outline-none focus:text-gray-400 hover:text-gray-400">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path className={`${ isExpanded ? `invisible` : `visible` }`} d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z"/>
              <path className={`${ isExpanded ? `visible` : `invisible` }`} d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>
            </svg>
          </button>
        </div>
        {/* container for expanded navigation */}
        <div className="hidden md:block pt-8 pb-2 px-6 md:px-12">
          <ul className="flex text-right text-gray-800 tracking-tight">
            <Link to="/#research" className="transition-all hover:text-custom-red hover:font-extrabold"><li>research</li></Link>
            <li className="px-2"> / </li>
            <Link to="/#teaching" className="transition-all hover:text-custom-blue hover:font-extrabold"><li>teaching</li></Link>
            <li className="px-2"> / </li>
            <Link to="/#service" className="transition-all hover:text-custom-green hover:font-extrabold"><li>service</li></Link>
            <li className="px-2"> / </li>
            <Link to="/#other" className="transition-all hover:text-custom-orange hover:font-extrabold"><li>other</li></Link>
            <li className="px-2"> / </li>
            <Link to="/#contact" className="transition-all hover:text-custom-purple hover:font-extrabold"><li>contact</li></Link>
          </ul>
        </div>
      </div>
      {/* container for drop down */}
      <div className={`${ isExpanded ? `translate-y-0 ease-out transition delay-150 duration-300` : `-translate-y-full ease-in transition delay-150 duration-300`} fixed w-full z-20 bg-white inset-x-0 top-0 overflow-auto translate-y-0 transform`}>
        <ul className="pt-16 flex-col text-right text-gray-800 tracking-tight">
          <Link to="/#research"><li className="px-6 pt-3 h-10 border-b border-custom-red hover:text-custom-red hover:font-extrabold transition-all" role="presentation" onClick={() => toggleExpansion(!isExpanded)}>research</li></Link>
          <Link to="/#teaching"><li className="px-6 pt-3 h-10 border-b border-custom-blue hover:text-custom-blue hover:font-extrabold transition-all" role="presentation" onClick={() => toggleExpansion(!isExpanded)}>teaching</li></Link>
          <Link to="/#service"><li className="px-6 pt-3 h-10 border-b border-custom-green hover:text-custom-green hover:font-extrabold transition-all" role="presentation" onClick={() => toggleExpansion(!isExpanded)}>service</li></Link>
          <Link to="/#other"><li className="px-6 pt-3 h-10 border-b border-custom-orange hover:text-custom-orange hover:font-extrabold transition-all" role="presentation" onClick={() => toggleExpansion(!isExpanded)}>other</li></Link>
          <Link to="/#contact"><li className="px-6 pt-3 h-10 border-b border-custom-purple hover:text-custom-purple hover:font-extrabold transition-all" role="presentation" onClick={() => toggleExpansion(!isExpanded)}>contact</li></Link>
        </ul>
      </div>
      {/* container for overlay */}
      <div className={`${ isExpanded ? `translate-y-0 ease-out transition delay-150 duration-300` : `-translate-y-full ease-in transition delay-150 duration-300`} fixed w-full h-full z-10 bg-black bg-opacity-80 inset-x-0 top-0 overflow-auto translate-y-0 transform`} role="presentation" onClick={() => toggleExpansion(!isExpanded)}></div>
    </header>
  )
}

export default Header
