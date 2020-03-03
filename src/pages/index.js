import React from 'react'
import Avatar from '../components/Avatar'
import Layout from '../components/Layout'
import Post from '../components/Post'
import SEO from '../components/seo'
import SocialLinks from '../components/SocialLinks'
import { Bio, BioText, Container, LatestPosts } from './indexStyles'

export default function IndexPage() {
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
          <Post
            title="My first post"
            description="This is my first post telling about the experience of create a blog and
        portfolio with Gatsby and connecting it with a Netlify and your CMS
        (Netlify CMS). See you in the next post!! Thanks."
            date="03/03/2020"
            tags="gatsby, development"
          />
        </LatestPosts>
      </Container>
    </Layout>
  )
}
