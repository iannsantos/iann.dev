import styled from 'styled-components'
import { borderColor, secondaryColor } from '../../styles/constants'

export const Container = styled.button`
  padding: 16px;
  margin-bottom: 16px;
  border: 1.5px solid ${borderColor};
  background: transparent;
  width: 600px;

  &:hover {
    border: 1.5px solid ${secondaryColor};
  }

  > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    h1 {
      color: #fff;
      margin-bottom: 8px;
    }

    > p {
      color: #c4c4c4;
      font-size: 10px;
    }
  }

  > p {
    color: #c4c4c4;
    font-size: 14px;
    text-align: left;
  }
`
export const Tag = styled.span`
  display: flex;
  align-items: flex-end;

  margin-top: 16px;

  > p {
    color: #c2c2c2;
    font-size: 12px;
    margin: 0 8px;
  }
`
