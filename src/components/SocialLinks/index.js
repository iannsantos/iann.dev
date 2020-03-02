import { graphql, useStaticQuery } from 'gatsby'
import Icon from 'gatsby-image'
import React from 'react'
import { Container } from './styles'

export default function SocialLinks() {
  const { instagram, github, twitter, linkedin } = useStaticQuery(graphql`
    query {
      instagram: file(relativePath: { eq: "instagram.svg" }) {
        childImageSharp {
          fixed(width: 20, height: 20) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      github: file(relativePath: { eq: "github.svg" }) {
        childImageSharp {
          fixed(width: 20, height: 20) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      twitter: file(relativePath: { eq: "twitter.svg" }) {
        childImageSharp {
          fixed(width: 20, height: 20) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      linkedin: file(relativePath: { eq: "linkedin.svg" }) {
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
      <Icon fixed={instagram.childImageSharp.fixed} alt="Instagram" />
      <Icon fixed={github.childImageSharp.fixed} alt="Github" />
      <Icon fixed={twitter.childImageSharp.fixed} alt="Twitter" />
      <Icon fixed={linkedin.childImageSharp.fixed} alt="LinkedIn" />
    </Container>
  )
}
