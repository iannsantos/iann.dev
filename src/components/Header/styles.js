import AniLink from 'gatsby-plugin-transition-link/AniLink'
import styled from 'styled-components'
import { secondaryColor } from '../../styles/constants'

export const Container = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 32px;
`
export const Logo = styled(AniLink).attrs(props => {
  return {
    bg: '#232129',
    direction: 'left',
    duration: 0.6,
    cover: true,
  }
})`
  font-family: 'Righteous';
  font-size: 30px;
  font-weight: bold;
  color: #fff;

  @media screen and (max-width: 800px) {
    font-size: 32px;
  }

  @media screen and (max-width: 500px) {
    font-size: 28px;
  }
`

export const Button = styled(AniLink).attrs({
  activeStyle: {
    color: secondaryColor,
  },
  bg: '#232129',
  direction: 'down',
  duration: 0.6,
  cover: true,
})`
  font-family: 'Righteous';
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  margin-left: 16px;

  &:hover {
    color: ${secondaryColor};
  }

  @media screen and (max-width: 800px) {
    font-size: 20px;
  }

  @media screen and (max-width: 500px) {
    font-size: 18px;
    margin-left: 8px;
  }
`
