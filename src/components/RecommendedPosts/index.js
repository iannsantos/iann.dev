import React from 'react'
import { Container, RecommendedLink } from './styles'

export default function RecommendedPosts({ previous, next }) {
  return (
    <Container>
      {previous && (
        <RecommendedLink to={previous.fields.slug} className="previous">
          ◄
          <div>
            <p>{previous.frontmatter.date}</p>
            {previous.frontmatter.title}
          </div>
        </RecommendedLink>
      )}
      {next && (
        <RecommendedLink to={next.fields.slug} className="next">
          <div>
            <p>{next.frontmatter.date}</p>
            {next.frontmatter.title}
          </div>
          ►
        </RecommendedLink>
      )}
    </Container>
  )
}
