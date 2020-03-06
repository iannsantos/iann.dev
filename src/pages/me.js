import React from 'react'
import styled from 'styled-components'
import About from '../components/About'
import Avatar from '../components/Avatar'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import SocialLinks from '../components/SocialLinks'

export default function MePage() {
  return (
    <Layout>
      <SEO title="Me" />
      <Container>
        <div>
          <Avatar />
          <SocialLinks />
        </div>
        <About />
      </Container>
    </Layout>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 800px) {
    flex-direction: column;
  }

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 16px;
  }
`
