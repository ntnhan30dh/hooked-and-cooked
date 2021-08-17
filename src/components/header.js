import React, { useState }   from "react"
import logo from "../images/logo.png"
import orderNow from "../images/orderNow_pink.png"
import { Link } from "gatsby"
import Contact from './contact'

const Header = (props) => {
 
  let menuActive = props.menuState ? "is-inactive" : ""
  let change = props.menuState ? "change" : ""
  const link = " text-2xl sm:text-sm md:text-xl  font-bold flex  items-center w-max pl-0 sm:pl-8 py-2 xsm:py-2  sm:py-0 sm:pl-4 lg:pl-8"
  const span = "my-auto text-charcoal text-yellow uppercase hover:text-lipstick "
  return (
    <header className="headerWrapper relative z-50 w-full py-4  sm:py-0 sticky top-0 bg-transparent  /bg-yellow ">
      <nav className="nav /flex justify-between items-center w-full flex-col sm:flex-row">
        <div className="left w-28 md:w-32 lg:w-48">
          <Link to="/" className=" " >
            <img src={logo} alt="logo" />
          </Link>
        
        </div>
        <div className= {`rightDiv  hidden  justify-center items-center h-screen absolute top-0 right-0 bg-blue ${menuActive}`}>
       <div className="   ">
          <Link onClick={props.toggleMenu} to="/#story" className={link} activeClassName="bg-black">
            <span className={span}>Our Story</span>
          </Link>
          <Link onClick={props.toggleMenu} to="/#menu" className={link}>
            <span className={span}>menu</span>
          </Link>

          <Link onClick={props.toggleMenu} to="/#followus" className={link}>
            <span className={span}>follow Us</span>
          </Link>

          <Link onClick={props.toggleMenu} to="/#followus" className={link} >
            <span className={span}>Contact</span>
          </Link>

          <Link onClick={props.toggleMenu} to="/" className=" w-24  lg:w-32 sm:ml-10 py-4 xxsm:pb-1/5 sm:py-0" >
         
           <span className={span}> Order now</span>
          </Link>
       </div>
        </div>
        <div  className={`burgerMenu  absolute top-0 right-0 ${change}`} onClick={props.toggleMenu} onKeyDown={props.toggleMenu} role = "button" tabIndex={-1}>
          <div class="bar1"></div>
          <div class="bar2"></div>
          <div class="bar3"></div>
        </div>
      </nav>
    </header>
  )
}

export default Header
