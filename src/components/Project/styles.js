import styled from 'styled-components'
import { borderColor, secondaryColor } from '../../styles/constants'

export const Container = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  border: 1.5px solid ${borderColor};
  background: transparent;

  &:hover {
    border: 1.5px solid ${secondaryColor};
  }

  h1 {
    font-size: 24px;
    font-weight: bold;
    color: #fff;
    margin: 8px 0;
  }

  p {
    color: #c4c4c4;
  }
`

export const Image = styled.div`
  width: 150px;
  height: 120px;
  background: #333;
`
