import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../../components/Layout'
import Pagination from '../../components/Pagination'
import PostCard from '../../components/PostCard'
import SEO from '../../components/seo'
import { Container } from './styles'

export default function BlogList(props) {
  const postList = props.data.allMarkdownRemark.edges
  const { currentPage, numPages } = props.pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage =
    currentPage - 1 === 1 ? '/blog' : `/blog/page/${currentPage - 1}`
  const nextPage = `/blog/page/${currentPage + 1}`

  return (
    <Layout>
      <SEO title="Blog" />
      <Container>
        {/* <Search /> */}
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
      <Pagination
        isFirst={isFirst}
        isLast={isLast}
        currentPage={currentPage}
        numPages={numPages}
        prevPage={prevPage}
        nextPage={nextPage}
      />
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
