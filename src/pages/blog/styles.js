import styled from 'styled-components'
import { borderColor, secondaryColor } from '../../styles/constants'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Search = styled.div`
  input {
    border: 1.5px solid ${borderColor};
    background: transparent;
    margin-bottom: 16px;
    padding: 8px;
    font-size: 18px;
    color: #fff;
  }

  button {
    font-size: 18px;
    padding: 8px;
    background: transparent;
    border: 1.5px solid ${borderColor};
  }

  button:hover {
    border: 1.5px solid ${secondaryColor};
  }
`
