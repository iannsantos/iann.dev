import { Link } from 'gatsby'
import { darken } from 'polished'
import styled from 'styled-components'
import { secondaryColor } from '../../styles/constants'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin: 16px 0;
`

export const RecommendedLink = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 16px;
  border: 1px solid ${secondaryColor};
  color: #fff;
  font-size: 18px;
  width: 50%;

  &:hover {
    border: 1px solid ${darken(0.1, secondaryColor)};
    color: ${secondaryColor};
  }

  &.previous {
    /* align-items: flex-start; */
    margin-right: 8px;
  }

  &.next {
    /* align-items: flex-end; */
    margin-left: 8px;
  }

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    p {
      color: #c4c4c4;
      font-size: 12px;
    }
  }
`
