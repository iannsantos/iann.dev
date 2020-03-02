import { Link } from "gatsby"
import styled from "styled-components"
import { primaryColor, secondaryColor } from "../../styles/constants"

export const Container = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 100px 0 80px 0;
`
export const Logo = styled(Link)`
  font-family: "Righteous";
  font-size: 30px;
  font-weight: bold;
  color: ${primaryColor};
`

export const Button = styled(Link).attrs({
  activeStyle: {
    color: secondaryColor,
  },
})`
  font-family: "Righteous";
  font-size: 18px;
  font-weight: bold;
  color: ${primaryColor};
  margin: 0 0 0 16px;
`
