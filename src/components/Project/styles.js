import styled from 'styled-components'
import { borderColor, secondaryColor } from '../../styles/constants'

export const Container = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  border: 1.5px solid ${borderColor};
  background: transparent;
  border-radius: 16px;

  &:hover {
    border: 1.5px solid ${secondaryColor};
  }

  h1 {
    font-size: 24px;
    font-weight: bold;
    color: #fff;
    margin: 16px 0;
  }

  p {
    color: #c4c4c4;
  }

  & > div {
    width: 150px;
    height: 120px;
    background: #333;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
