import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  @media screen and (min-width: 400px) {
    align-items: center;
  }

  & > p {
    color: #fff;
    font-size: 24px;
    font-weight: bold;
    margin: 16px 0;
  }
`
