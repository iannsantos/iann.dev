import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 16px;
  }
`

export const About = styled.section`
  margin-bottom: 48px;
  p {
    color: rgba(255, 255, 255, 0.7);
    text-align: justify;
    font-size: 1.4rem;
  }
`
