import React from 'react'
import { Container, LinkButton } from './styles'

export default function Pagination({
  isFirst,
  isLast,
  currentPage,
  numPages,
  prevPage,
  nextPage,
}) {
  return (
    <Container>
      {!isFirst && <LinkButton to={prevPage}>◄ Anterior</LinkButton>}
      <p>
        {currentPage} de {numPages}
      </p>
      {!isLast && <LinkButton to={nextPage}>Próximo ►</LinkButton>}
    </Container>
  )
}
