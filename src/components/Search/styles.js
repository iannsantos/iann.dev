import styled from 'styled-components'
import { borderColor } from '../../styles/constants'

export const Container = styled.div`
  input {
    border: 1.5px solid ${borderColor};
    background: transparent;
    margin-bottom: 16px;
    padding: 8px;
    font-size: 18px;
    color: #fff;

    @media screen and (max-width: 400px) {
      width: 100%;
    }
  }
`
