import styled from 'styled-components'
import { secondaryColor } from '../../styles/constants'

export const Container = styled.section`
  p {
    color: rgba(255, 255, 255, 0.7);
    text-align: justify;
    font-size: 22px;

    strong {
      color: ${secondaryColor};
    }
  }
`
