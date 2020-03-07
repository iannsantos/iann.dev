import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import PostCard from '../PostCard'
import { Container } from './styles'

export default function PostList({ latestPost = false }) {
  let { posts, latestPosts } = useStaticQuery(graphql`
    query PostList {
      posts: allMarkdownRemark(
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
              description
              tags
              title
            }
          }
        }
      }

      latestPosts: allMarkdownRemark(
        limit: 3
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
              description
              tags
              title
            }
          }
        }
      }
    }
  `)

  const postList = !latestPost ? posts.edges : latestPosts.edges

  return (
    <Container>
      <p>latest posts...</p>
      {postList.map(
        ({
          node: {
            id,
            frontmatter: { title, date, description, tags },
            fields: { slug },
          },
        }) => (
          <PostCard
            key={id}
            title={title}
            description={description}
            date={date}
            tags={tags}
            slug={slug}
          />
        )
      )}
    </Container>
  )
}
