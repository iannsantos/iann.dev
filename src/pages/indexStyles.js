import styled from 'styled-components'
import { borderColor } from '../styles/constants'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Bio = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  /* margin-bottom: 8px; */
`

export const BioText = styled.p`
  color: #fff;
  text-align: left;
  margin: 0 0 0 8px;
`
export const LatestPosts = styled.div`
  > p {
    color: #fff;
    font-size: 24px;
    font-weight: bold;
    margin: 16px 0;
  }
`

export const Post = styled.div`
  padding: 8px;
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
