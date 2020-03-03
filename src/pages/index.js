import { graphql, useStaticQuery } from 'gatsby'
import Icon from 'gatsby-image'
import React from 'react'
import Avatar from '../components/Avatar'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import SocialLinks from '../components/SocialLinks'
import { Bio, BioText, Container, LatestPosts, Post, Tag } from './indexStyles'

export default function IndexPage() {
  const { tag } = useStaticQuery(graphql`
    query {
      tag: file(relativePath: { eq: "tag.png" }) {
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
      <SEO title="Home" />
      <Container>
        <Bio>
          <Avatar />
          <BioText>
            Iann Santos
            <br />
            Software Developer
          </BioText>
        </Bio>
        <SocialLinks />
        <LatestPosts>
          <p>latest posts...</p>
          <Post>
            <div>
              <h1>My first post</h1>
              <p>01/03/2020</p>
            </div>
            <p>
              This is my first post telling about the experience of create a
              blog and portfolio with Gatsby and connecting it with a Netlify
              and your CMS (Netlify CMS). See you in the next post!! Thanks.
            </p>
            <Tag>
              <Icon fixed={tag.childImageSharp.fixed} alt="tag" />
              <p>gatsby, netlify</p>
            </Tag>
          </Post>
        </LatestPosts>
      </Container>
    </Layout>
  )
}
