import React from "react"
import Avatar from "../../components/Avatar"
import Layout from "../../components/Layout"
import SEO from "../../components/seo"
import { About, Container } from "./styles"

export default function MePage() {
  return (
    <Layout>
      <SEO title="Me" />
      <Container>
        <div>
          <Avatar />
        </div>
        {/* <SocialLinks>
          <p>LinkedIn</p>
          <p>Github</p>
          <p>Instagram</p>
        </SocialLinks> */}
        <About>
          <p>
            Me chamo Iann Santos, apaixonado por tecnologia desde criança.
            Comecei a me aventurar "fuçando" valores de jogos no Android com
            root no celular hahaha.
          </p>
          <br />
          <p>
            Atualmente trabalho como Software Developer na PDV365 onde atuo com
            a stack de Javascript usando React.js, React Native e Node.js
          </p>
          <br />
          <p>
            Estou sempre estudando para conhecer novas tecnologias e aprimorar
            meus conhecimentos.
          </p>
          <br />
          <p>
            Fiz este site pessoal para poder compartilhar os meus estudos e
            ainda conseguir ajudar alguém com isso. Também para mostrar o meu
            portifólio com alguns projetos que já fiz, sejam eles por estudo ou
            por trabalho.
          </p>
        </About>
      </Container>
    </Layout>
  )
}
