import { Link } from 'gatsby'
import styled from 'styled-components'
import { borderColor, secondaryColor } from '../../styles/constants'

export const PostCardLink = styled(Link)`
  width: 100%;
`

export const Container = styled.section`
  padding: 16px;
  margin-bottom: 16px;
  border: 1.5px solid ${borderColor};
  background: transparent;

  &:hover {
    border: 1.5px solid ${secondaryColor};
  }

  & > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    /* align-items: center; */

    h1 {
      font-size: 24px;
      font-weight: bold;
      color: #fff;
      margin-bottom: 8px;

      @media screen and (max-width: 800px) {
        font-weight: bold;
        font-size: 20px;
      }
    }

    & > p {
      color: #c4c4c4;
      font-size: 12px;
    }
  }

  p {
    color: #c4c4c4;
    font-size: 14px;
    text-align: left;
  }
`
export const Tag = styled.span`
  display: flex;
  align-items: flex-end;

  margin-top: 16px;

  & > p {
    color: #c2c2c2;
    font-size: 12px;
    margin: 0 8px;
  }

  & > span {
    color: #fff;
  }
`
