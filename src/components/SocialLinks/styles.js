import styled from 'styled-components'
import { secondaryColor } from '../../styles/constants'

export const Container = styled.div`
  display: flex;
  margin: 8px 8px;

  a {
    padding: 0 4px;

    svg {
      color: #fff;
    }

    svg:hover {
      color: ${secondaryColor};
    }
  }
`
