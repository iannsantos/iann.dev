import React from 'react'
import ReactDisqusComments from 'react-disqus-comments'
import { CommentsTitle, Container } from './styles'

export default function Comments({ url, title }) {
  const completeURL = `https://www.iann.dev/${url}`
  console.log(completeURL)
  return (
    <Container>
      <CommentsTitle>Comentários</CommentsTitle>
      <ReactDisqusComments
        shortname="iann-dev"
        identifier={completeURL}
        title={title}
        url={completeURL}
      />
    </Container>
  )
}
