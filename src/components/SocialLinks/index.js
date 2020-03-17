import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { Container } from './styles'

export default function SocialLinks() {
  const { links } = useStaticQuery(graphql`
    query {
      links: site {
        siteMetadata {
          social {
            twitter
            instagram
            github
            linkedin
          }
        }
      }
    }
  `)

  return (
    <Container>
      <a
        href={links.siteMetadata.social.instagram}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram size={18} alt="Instagram" />
      </a>
      <a
        href={links.siteMetadata.social.github}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub size={18} alt="Github" />
      </a>
      <a
        href={links.siteMetadata.social.twitter}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTwitter size={18} alt="Twitter" />
      </a>
      <a
        href={links.siteMetadata.social.linkedin}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={18} alt="LinkedIn" />
      </a>
    </Container>
  )
}
