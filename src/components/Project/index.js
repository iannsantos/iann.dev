import React from 'react'
import { Container, Image } from './styles'

export default function Project({ title, description }) {
  return (
    <Container>
      <Image />
      <h1>{title}</h1>
      <p>{description}</p>
    </Container>
  )
}
