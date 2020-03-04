import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { Button, Container, Logo } from './styles'

export default function Header() {
  const {
    site: {
      siteMetadata: { title },
    },
  } = useStaticQuery(graphql`
    query getInfo {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Container>
      <Logo to="/">{title}</Logo>
      <div>
        <Button to="/me">me</Button>
        <Button to="/blog">blog</Button>
        <Button to="/projects">projects</Button>
      </div>
    </Container>
  )
}
