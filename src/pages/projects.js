import React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import Project from '../components/Project'
import SEO from '../components/seo'

export default function ProjectsPage() {
  const projects = [
    {
      title: 'My blog/portfolio',
      description: 'This blog and a good description',
    },
    {
      title: 'My blog/portfolio',
      description: 'This blog and a good description',
    },
    {
      title: 'My blog/portfolio',
      description: 'This blog and a good description',
    },
    {
      title: 'My blog/portfolio',
      description: 'This blog and a good description',
    },
  ]

  return (
    <Layout>
      <SEO title="Projects" />
      <Container>
        {projects.map(project => (
          <Project title={project.title} description={project.description} />
        ))}
      </Container>
    </Layout>
  )
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-gap: 16px;

  @media screen and (max-width: 500px) {
    grid-template-columns: repeat(1, auto);
  }
`
