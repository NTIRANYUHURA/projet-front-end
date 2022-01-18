import React from "react"
import logo from "../assets/logo.svg"
import { FaAlignRight } from "react-icons/fa"
import PageLinks from "../constants/links"
import { Nav } from 'react-bootstrap';
import SocialLinks from "../constants/socialLinks"

const Navbar = () => {
  return<>
  <div class = "container">
    <SocialLinks/>
  <Nav className="justify-content-end" activeKey="/Accueil">
    <Nav.Item>
      <Nav.Link href="/home">Accueil</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-1">Gallerie</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-2">Tarifs et spécifications</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="disabled" >
        Contact
      </Nav.Link>
    </Nav.Item>
  </Nav>
  </div>
</>
}

export default Navbar
