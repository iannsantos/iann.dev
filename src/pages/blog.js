import React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import Post from '../components/Post'
import Search from '../components/Search'
import SEO from '../components/seo'

export default function BlogPage() {
  const posts = [
    {
      title: 'My first post',
      description:
        'This is my first post telling about the experience of create a blog and portfolio with Gatsby and connecting it with a Netlify and your CMS (Netlify CMS).See you in the next post!! Thanks.',
      date: '03/03/2020',
      tags: ['gatsby', 'development'],
    },
    {
      title: 'My first post',
      description: 'Test post',
      date: '03/01/2020',
      tags: ['gatsby', 'development'],
    },
  ]

  return (
    <Layout>
      <SEO title="Blog" />
      <Container>
        <Search />
        {posts.map(post => (
          <Post
            title={post.title}
            description={post.description}
            date={post.date}
            tags={post.tags.join(', ')}
          />
        ))}
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
