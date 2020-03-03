import { graphql, useStaticQuery } from 'gatsby'
import Icon from 'gatsby-image'
import React from 'react'
import { Container, Tag } from './styles'

export default function Post({ title, date, description, tags }) {
  const { tag } = useStaticQuery(graphql`
    query {
      tag: file(relativePath: { eq: "tag.png" }) {
        childImageSharp {
          fixed(width: 15, height: 15) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <Container>
      <div>
        <h1>{title || ''}</h1>
        <p>{date || ''}</p>
      </div>
      <p>{description || ''}</p>
      <Tag>
        <Icon fixed={tag.childImageSharp.fixed} alt="tag" />
        <p>{tags || ''}</p>
      </Tag>
    </Container>
  )
}
