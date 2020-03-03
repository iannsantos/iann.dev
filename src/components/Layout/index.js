import React from 'react'
import GlobalStyle from '../../styles/global'
import Header from '../Header'
import { LayoutMain, LayoutWrapper } from './styles'

export default function Layout({ children }) {
  return (
    <LayoutWrapper>
      <GlobalStyle />
      <LayoutMain>
        <Header />
        {children}
      </LayoutMain>
    </LayoutWrapper>
  )
}
