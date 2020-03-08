import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../../components/Layout'
import PostCard from '../../components/PostCard'
import { Container } from './styles'

export default function BlogList(props) {
  const postList = props.data.allMarkdownRemark.edges

  return (
    <Layout>
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
    </Layout>
  )
}

export const BlogListQuery = graphql`
  query BlogListQuery($limit: Int!, $skip: Int!) {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      limit: $limit
      skip: $skip
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
`
