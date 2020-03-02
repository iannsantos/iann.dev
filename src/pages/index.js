import React from 'react'
import Avatar from '../components/Avatar'
import Layout from '../components/Layout'
import SocialLinks from '../components/SocialLinks'
import { Bio, BioText, Container } from './indexStyles'

export default function IndexPage() {
  return (
    <Layout>
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
      </Container>
    </Layout>
  )
}
