import Image from 'gatsby-image'
import React from 'react'
import { Container } from './styles'

export default function Project({ title, description, link, image }) {
  return (
    <Container href={link} target="_blank" rel="noopener noreferrer">
      <div>
        <Image fixed={image} />
      </div>
      <h1>{title}</h1>
      <p>{description}</p>
    </Container>
  )
}
