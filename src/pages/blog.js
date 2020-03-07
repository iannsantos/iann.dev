import React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import PostList from '../components/PostList'
import Search from '../components/Search'
import SEO from '../components/seo'

export default function BlogPage() {
  return (
    <Layout>
      <SEO title="Blog" />
      <Container>
        <Search />
        <PostList />
      </Container>
    </Layout>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 400px) {
    align-items: center;
  }
`
