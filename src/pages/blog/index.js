import { graphql, useStaticQuery } from 'gatsby'
import Icon from 'gatsby-image'
import React from 'react'
import styled from 'styled-components'
import Layout from '../../components/Layout'
import Post from '../../components/Post'
import SEO from '../../components/seo'
import { borderColor, secondaryColor } from '../../styles/constants'

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
          description="Test post."
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
      </Container>
    </Layout>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Search = styled.div`
  input {
    border: 1.5px solid ${borderColor};
    background: transparent;
    margin-bottom: 16px;
    padding: 8px;
    font-size: 18px;
    color: #fff;
  }

  button {
    font-size: 18px;
    padding: 8px;
    background: transparent;
    border: 1.5px solid ${borderColor};
  }

  button:hover {
    border: 1.5px solid ${secondaryColor};
  }
`
