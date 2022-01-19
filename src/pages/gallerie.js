import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"

const query= graphql`
    {
      file(relativePath: {eq: "couple2.jpg"}) {
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `

const Gallerie = () => {
  const{
    file: {
      childImageSharp: {fixed},
    }
  } = useStaticQuery(query);
  
  return <section className = "gallerie">
    <div className = "section center">
      <h2>Couple</h2>
    <Image fixed= {fixed} className = "couple2"/>
    </div>
  </section>
}

export default Gallerie
