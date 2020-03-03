import React from 'react'
import Layout from '../../components/Layout'
import SEO from '../../components/seo'
import { Container, Image, Project } from './styles'

export default function ProjectsPage() {
  return (
    <Layout>
      <SEO title="Projects" />
      <Container>
        <Project>
          <Image />
          <h1>My blog/porfolio</h1>
          <p>This blog and a good description</p>
        </Project>

        <Project>
          <Image />
          <h1>My blog/porfolio</h1>
          <p>This blog and a good description</p>
        </Project>

        <Project>
          <Image />
          <h1>My blog/porfolio</h1>
          <p>This blog and a good description</p>
        </Project>

        <Project>
          <Image />
          <h1>My blog/porfolio</h1>
          <p>This blog and a good description</p>
        </Project>

        <Project>
          <Image />
          <h1>My blog/porfolio</h1>
          <p>This blog and a good description</p>
        </Project>
      </Container>
    </Layout>
  )
}
