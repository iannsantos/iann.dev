import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { Image } from './styles'

export default function Avatar() {
  const { avatarImage } = useStaticQuery(graphql`
    query {
      avatarImage: file(relativePath: { eq: "avatar.png" }) {
        childImageSharp {
          fixed(width: 80, height: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return <Image fixed={avatarImage.childImageSharp.fixed} alt="Iann Santos" />
}
