import React from "react"
import logo from "../assets/logo.svg"
import { FaAlignRight } from "react-icons/fa"
import PageLinks from "../constants/links"
import SocialLinks from "../constants/socialLinks"
const Navbar = () => {
  return <nav className = "navbar">
    <div className = "nav-center">
      <div className ="nav-header">
        <SocialLinks/>
        <PageLinks styleClass = "nav-links"></PageLinks>
        <button type = "button" className = "toggle-btn">
          <FaAlignRight></FaAlignRight>
        </button>
      </div>
    </div>
  </nav>
    
}

export default Navbar
