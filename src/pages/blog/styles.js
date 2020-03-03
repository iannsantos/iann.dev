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

export const Post = styled.div`
  padding: 16px;
  border: 1.5px solid ${borderColor};

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
