import { graphql, useStaticQuery } from 'gatsby'
import Icon from 'gatsby-image'
import React from 'react'
import Layout from '../../components/Layout'
import SEO from '../../components/seo'
import { Container, Post, Search, Tag } from './styles'

export default function BlogPage() {
  const { tag, search } = useStaticQuery(graphql`
    query {
      tag: file(relativePath: { eq: "tag.png" }) {
        childImageSharp {
          fixed(width: 15, height: 15) {
            ...GatsbyImageSharpFixed
          }
        }
      }

      search: file(relativePath: { eq: "search.png" }) {
        childImageSharp {
          fixed(width: 15, height: 15) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Blog" />
      <Container>
        <Search>
          <input placeholder="Search on blog..." />
          <button>
            <Icon fixed={search.childImageSharp.fixed} alt="search" />
          </button>
        </Search>
        <Post>
          <div>
            <h1>My first post</h1>
            <p>01/03/2020</p>
          </div>
          <p>
            This is my first post telling about the experience of create a blog
            and portfolio with Gatsby and connecting it with a Netlify and your
            CMS (Netlify CMS). See you in the next post!! Thanks.
          </p>
          <Tag>
            <Icon fixed={tag.childImageSharp.fixed} alt="tag" />
            <p>gatsby, netlify</p>
          </Tag>
        </Post>
      </Container>
    </Layout>
  )
}
