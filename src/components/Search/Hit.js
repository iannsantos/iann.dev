import React from 'react'
import PostCard from '../PostCard'
// import { Container } from './styles';

export default function Hit({ hit }) {
  return (
    <PostCard
      slug={hit.fields.slug}
      title={hit.title}
      date={hit.date}
      description={hit.description}
      tags={hit.tags}
    />
  )
}
