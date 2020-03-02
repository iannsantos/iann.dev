import { graphql, useStaticQuery } from 'gatsby'
import Icon from 'gatsby-image'
import React from 'react'
import { Container, SocialButton } from './styles'

export default function SocialLinks() {
  const {
    instagram,
    github,
    twitter,
    linkedin,
    links,
  } = useStaticQuery(graphql`
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

      instagram: file(relativePath: { eq: "instagram.png" }) {
        childImageSharp {
          fixed(width: 20, height: 20) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      github: file(relativePath: { eq: "github.png" }) {
        childImageSharp {
          fixed(width: 20, height: 20) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      twitter: file(relativePath: { eq: "twitter.png" }) {
        childImageSharp {
          fixed(width: 20, height: 20) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      linkedin: file(relativePath: { eq: "linkedin.png" }) {
        childImageSharp {
          fixed(width: 20, height: 20) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <Container>
      <SocialButton href={links.siteMetadata.social.instagram} target="_blank">
        <Icon fixed={instagram.childImageSharp.fixed} alt="Instagram" />
      </SocialButton>
      <SocialButton href={links.siteMetadata.social.github} target="_blank">
        <Icon fixed={github.childImageSharp.fixed} alt="Github" />
      </SocialButton>
      <SocialButton href={links.siteMetadata.social.twitter} target="_blank">
        <Icon fixed={twitter.childImageSharp.fixed} alt="Twitter" />
      </SocialButton>
      <SocialButton href={links.siteMetadata.social.linkedin} target="_blank">
        <Icon fixed={linkedin.childImageSharp.fixed} alt="LinkedIn" />
      </SocialButton>
    </Container>
  )
}
