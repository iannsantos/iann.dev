import React from 'react'
import FA from 'react-fontawesome'
import { Container, Tag } from './styles'

export default function Post({ title, date, description, tags }) {
  return (
    <Container>
      <div>
        <h1>{title || ''}</h1>
        <p>{date || ''}</p>
      </div>
      <p>{description || ''}</p>
      <Tag>
        <FA name="tag" />
        <p>{tags || ''}</p>
      </Tag>
    </Container>
  )
}
