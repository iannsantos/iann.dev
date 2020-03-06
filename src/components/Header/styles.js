import { Link } from 'gatsby'
import styled from 'styled-components'
import { secondaryColor } from '../../styles/constants'

export const Container = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 32px;
`
export const Logo = styled(Link)`
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

export const Button = styled(Link).attrs({
  activeStyle: {
    color: secondaryColor,
  },
})`
  font-family: 'Righteous';
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  margin-left: 16px;

  @media screen and (max-width: 800px) {
    font-size: 20px;
  }

  @media screen and (max-width: 500px) {
    font-size: 18px;
    margin-left: 8px;
  }
`
