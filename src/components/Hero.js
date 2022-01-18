import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"

const query= graphql`
    {
      file(relativePath: {eq: "baniere.jpg"}) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `

const Hero = () => {
  const{
    file: {
      childImageSharp: {fluid},
    }
  } = useStaticQuery(query);
  
  return <header className = "hero">
    <div className = "section center">
    <Image fluid= {fluid} className = "baniere"/>
    </div>
  </header>
}

export default Hero
