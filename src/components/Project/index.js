import React from 'react'
import { Container, Image } from './styles'

export default function Project({ title, description, link, image }) {
  return (
    <Container href={link} target="_blank" rel="noopener noreferrer">
      <Image fluid={image} />
      <h1>{title}</h1>
      <p>{description}</p>
    </Container>
  )
}
