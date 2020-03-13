import React from 'react'
import FA from 'react-fontawesome'
import { Container, PostCardLink, Tag } from './styles'

export default function PostCard({ title, date, description, tags, slug }) {
  return (
    <PostCardLink cover to={slug}>
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
    </PostCardLink>
  )
}
