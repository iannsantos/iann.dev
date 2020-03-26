import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import Project from '../components/Project'
import SEO from '../components/seo'

export default function ProjectsPage() {
  const {
    blogImage,
    investSchool,
    star,
    calculator,
    whichcar,
  } = useStaticQuery(graphql`
    query {
      blogImage: file(relativePath: { eq: "code.png" }) {
        childImageSharp {
          fixed(width: 120, height: 120) {
            ...GatsbyImageSharpFixed
          }
        }
      }

      investSchool: file(relativePath: { eq: "invest-school.png" }) {
        childImageSharp {
          fixed(width: 150, height: 120) {
            ...GatsbyImageSharpFixed
          }
        }
      }

      star: file(relativePath: { eq: "star.png" }) {
        childImageSharp {
          fixed(width: 120, height: 120) {
            ...GatsbyImageSharpFixed
          }
        }
      }

      calculator: file(relativePath: { eq: "calculator.png" }) {
        childImageSharp {
          fixed(width: 120, height: 120) {
            ...GatsbyImageSharpFixed
          }
        }
      }

      whichcar: file(relativePath: { eq: "car_white.png" }) {
        childImageSharp {
          fixed(width: 120, height: 120) {
            ...GatsbyImageSharpFixed
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
      image: blogImage.childImageSharp.fixed,
    },
    {
      id: 2,
      title: 'InvestSchool',
      description:
        'Este foi um app (MVP) para o MegaHack da Shawee, feito com Flutter, para tentar passar a idéia que tivemos sobre o desafio da XP Investimentos.',
      link: 'https://github.com/iannsantos/megahack-shawee-flutter',
      image: investSchool.childImageSharp.fixed,
    },
    {
      id: 3,
      title: 'Starred Repositories',
      description:
        'Um app feito em React Native para listar os repositórios que o usuário deu estrela.',
      link: 'https://github.com/iannsantos/rocketseat-starred-repositories',
      image: star.childImageSharp.fixed,
    },
    {
      id: 4,
      title: 'WhichCar?',
      description:
        'Um aplicativo para descobrir informações sobre algum carro.',
      link: 'https://github.com/iannsantos/which-car-mobile',
      image: whichcar.childImageSharp.fixed,
    },
    {
      id: 5,
      title: 'Calculator',
      description:
        'Uma calculadora simples, feita com Flutter, a fim de aprendizado.',
      link: 'https://github.com/iannsantos/calculator-flutter',
      image: calculator.childImageSharp.fixed,
    },
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
  grid-template-columns: repeat(2, 50%);
  grid-gap: 16px;

  @media screen and (max-width: 500px) {
    grid-template-columns: repeat(1, auto);
  }
`
