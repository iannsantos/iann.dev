import React from 'react'
import { FaTags } from 'react-icons/fa'
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
          <FaTags color="#fff" />
          <p>
            {tags.map((tag, index) => (
              <a>
                {tag}
                {index !== tags.length - 1 ? ', ' : ''}
              </a>
            ))}
          </p>
        </Tag>
      </Container>
    </PostCardLink>
  )
}
