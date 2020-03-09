import React from 'react'
import styled from 'styled-components'
import Bio from '../components/Bio'
import Layout from '../components/Layout'
import PostList from '../components/PostList'
import SEO from '../components/seo'
import SocialLinks from '../components/SocialLinks'

export default function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <Container>
        <Bio />
        <SocialLinks />
        <PostList />
      </Container>
    </Layout>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
