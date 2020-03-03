import { graphql, useStaticQuery } from 'gatsby'
import Icon from 'gatsby-image'
import React from 'react'
import Layout from '../../components/Layout'
import Post from '../../components/Post'
import SEO from '../../components/seo'
import { Container, Search } from './styles'

export default function BlogPage() {
  const { search } = useStaticQuery(graphql`
    query {
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
        <Post
          title="My first post"
          description="This is my first post telling about the experience of create a blog and
        portfolio with Gatsby and connecting it with a Netlify and your CMS
        (Netlify CMS). See you in the next post!! Thanks."
          date="03/03/2020"
          tags="gatsby, development"
        />
        <Post
          title="My first post"
          description="This is my first post telling about the experience of create a blog and
        portfolio with Gatsby and connecting it with a Netlify and your CMS
        (Netlify CMS). See you in the next post!! Thanks."
          date="03/03/2020"
          tags="gatsby, development"
        />
        <Post
          title="My first post"
          description="This is my first post telling about the experience of create a blog and
        portfolio with Gatsby and connecting it with a Netlify and your CMS
        (Netlify CMS). See you in the next post!! Thanks."
          date="03/03/2020"
          tags="gatsby, development"
        />

        <hr />
        <br />
        <br />
        <br />
        <br />
        <br />
      </Container>
    </Layout>
  )
}
