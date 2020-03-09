import { Link } from 'gatsby'
import { darken } from 'polished'
import styled from 'styled-components'
import { secondaryColor } from '../../styles/constants'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  p {
    color: #fff;
  }

  a {
    color: ${secondaryColor};
  }
`

export const LinkButton = styled(Link)`
  &:hover {
    color: ${darken(0.2, secondaryColor)};
  }
`
