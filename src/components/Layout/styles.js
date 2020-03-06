import styled from 'styled-components'

export const LayoutWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 10vh 15vw;

  @media screen and (max-width: 800px) {
    width: 100%;
    padding: 10vh 5vw;
  }
`

export const LayoutMain = styled.div`
  width: 700px;
`
