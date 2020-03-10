import styled from 'styled-components'
import { secondaryColor } from '../../styles/constants'

export const Container = styled.section`
  margin: auto;
  max-width: 70rem;

  iframe[src*='ads-iframe'] {
    display: none;
  }

  #disqus_thread {
    a {
      color: ${secondaryColor} !important;
    }
  }
`
export const CommentsTitle = styled.h2`
  color: #fff;
  font-size: 2.1rem;
  font-weight: 700;
  padding-bottom: 2rem;
`
