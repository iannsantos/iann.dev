---
title: Quais foram os ingredientes da receita desse blog?
description: >-
  Brincadeiras a parte, descubra quais foram as tecnologias, pacotes, plugins e
  etc.. usadas para montar esse super blog!
date: '2020-03-19 09:42:59'
tags:
  - gatsby
  - react
  - frontend
---
## Introdução

Fala guys, como teve uma galerinha que me perguntou e me sugeriu fazer um post falando sobre as tecnologias que usei pra fazer o blog, aqui estou.

Vou dividir esse post em 3 partes:
1. Framework, plugins e/ou pacotes usados.
2. Domínio, hospedagem e deploy.
3. Como foi fazer, quais foram os desafios, onde encontrei ajuda e porque fiz.

Só uma coisinha antes, muitas das coisas que aprendi e consegui fazer aqui, foi por causa do curso do [Willian Justen](https://willianjusten.com.br/) na [Udemy](https://www.udemy.com/course/gatsby-crie-um-site-pwa-com-react-graphql-e-netlify-cms/), se você tiver interesse, vale muito a pena! Agora sem mais enrolação, vamos direto ao ponto.

### Framework, plugins e/ou pacotes usados

O framework usado foi o [GatsbyJS](https://www.gatsbyjs.org/), que basicamente usa o **React**, porém é bem mais focado em performance e otimizações. Usa também o [GraphQL](https://graphql.org/) para puxar todas informações do site (metadata) e também para puxar as imagens. Precisamos destacar alguns plugins do Gatsby:
* gatsby-image
* gatsby-transformer-sharp
* gatsby-plugin-sharp
* gatsby-transformer-remark
* gatsby-plugin-netlify-cms
* gatsby-plugin-transition-link
* gatsby-plugin-offline
* gatsby-plugin-styled-components

Você os encontra no próprio site do Gatsby, e são todos muito bem documentados.

Alguns packages que também merecem destaque são: 
* react-disqus-comments
* styled-components
* styled-media-query
* react-icons

### Domínio, hospedagem e deploy

Bom, algumas pessoas me perguntaram sobre o domínio, eu comprei ele no [Google Domains](https://domains.google/intl/pt-BR/), custa R$50,00 por ano, achei bem de boa e curti demais o **.dev** hahah.
 
Sobre a hospedagem, está no [Netlify](https://www.netlify.com/), usando o plano gratuito (que da pra usar de boassa). Uma coisa muito dahora que ele oferece, é o **continous deploy**, você conecta com algum repositório (Github, GitLab ou Bitbucket), escolhe o branch, o comando de build e a partir de disso ele vai ficar monitorando alterações nesse branch para fazer o deploy automágico. Você economiza muito tempo com isso.

### Como foi fazer, quais foram os desafios, onde encontrei ajuda e porque fiz

Então, fazer esse blog foi um desafio pra mim, nem tanto na questão de conhecimento porque eu já conhecia e já usava o React, só tive que entender mesmo como o Gatsby trabalhava com algumas coisas, mas o maior desafio foi ter tempo para me dedicar nele hahahah, meio que estava me virando com 1~2 horas por dia, mas saiu, finalmente!

Quase tudo que tive dúvida encontrei na documentação mesmo (inclusive, a documentação do Gatsby é uma das melhores que já vi), alguns outros problemas que tive apenas procurei no Google e foi bem de boa para achar e resolver.

Como já foi explicado no primeiro post, fiz esse blog pra poder me aproximar mais da comunidade de tecnologia, começar a contribuir de alguma forma, é um dos meus sonhos (espero conseguir realizar), quero ajudar as pessoas que estão começando, que estão enfrentando os problemas que eu enfrentei (embora eu esteja começando também hahaha). Quero falar também dos projetos que estou fazendo, das coisas que estou aprendendo, de como estou aprendendo e etc... Por último, fazer dele um portifólio, nada melhor do que você mesmo desenvolver o site em que vai mostrar seus feitos, certo?

Então é isso, espero que esteja bom para o primeiro (segundo) post, caso tenham alguma outra dúvida podem perguntar por aqui ou por qualquer outra social, vai ser um prazer ajudar.