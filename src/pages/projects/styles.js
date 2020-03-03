import styled from 'styled-components'
import { borderColor, secondaryColor } from '../../styles/constants'

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-gap: 16px;
  padding: 10px;
  margin-bottom: 48px;
`

export const Project = styled.button`
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
