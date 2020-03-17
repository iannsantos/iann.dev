import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import Project from '../components/Project'
import SEO from '../components/seo'

export default function ProjectsPage() {
  const { blogImage } = useStaticQuery(graphql`
    query {
      blogImage: file(relativePath: { eq: "code.png" }) {
        childImageSharp {
          fluid(maxWidth: 150, maxHeight: 120) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const projects = [
    {
      id: 1,
      title: 'Meu blog/portifólio',
      description:
        'Meu blog pessoal e portifólio, ou como eu o chamo, blogfólio!!',
      link: 'https://github.com/iannsantos/iann.dev',
      image: blogImage.childImageSharp.fluid,
    },
    {
      id: 2,
      title: 'Meu blog/portifólio',
      description:
        'Meu blog pessoal e portifólio, ou como eu o chamo, blogfólio!!',
      link: 'https://github.com/iannsantos/iann.dev',
      image: blogImage.childImageSharp.fluid,
    },
    // {
    //   title: 'My blog/portfolio',
    //   description: 'This blog and a good description',
    // },
    // {
    //   title: 'My blog/portfolio',
    //   description: 'This blog and a good description',
    // },
    // {
    //   title: 'My blog/portfolio',
    //   description: 'This blog and a good description',
    // },
  ]

  return (
    <Layout>
      <SEO title="Projects" />
      <Container>
        {projects.map(project => (
          <Project
            key={project.id}
            title={project.title}
            description={project.description}
            link={project.link}
            image={project.image}
          />
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
