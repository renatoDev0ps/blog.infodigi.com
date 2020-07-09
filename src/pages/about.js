import React from 'react';

import Layout from "../components/Layout"
import SEO from "../components/seo"

import Icons from '../components/About/Icons'
import links from '../components/About/content'

import * as S from '../components/About/styled'

const AboutPage = () => {
  return (
    <>
      <Layout>
        <SEO title="About" />
        <S.AboutHeader>
          <S.AboutTitle>Sobre Mim</S.AboutTitle>
          <S.AboutParagraph>
            Meu nome é Renato do Nascimento Oliveira, nasci em Madureira/RJ e 
            sou formado em Análise de Sistemas, Clouds (AWS, Google Cloud e Digital Ocean), 
            além de ser um entusiata da cultura DevOps.
          </S.AboutParagraph>
        </S.AboutHeader>
        <S.AboutDescription>
          <S.AboutParagraph>
            Por incrível que pareça, o desenvolvimento não foi a minha primeira 
            opção, iniciei no Direito, cursando dois períodos, mas não
            sentia-me confortável, embora gostasse. &nbsp;&nbsp;Logo em seguida 
            comecei a me envolver com o mundo da tecnologia, despertando uma 
            antiga paixão, assim como, a possibilidade de trazer soluções através da computação
            me envolveu.<br/>
            Em 2016, tive a oportunidade e apoio para mudar radicalmente de rumo e comecei
            o curso de Análise e Desenvolvimento na Estácio Natal - RN, e a cada dia 
            fico mais fascinado e feliz pela escolha que fiz.<br/>
            <br/>
            Hoje, como grande entusiasta da cultura DevOps, venho buscando dar minha singela
            contribuição e aprender mais a cada pesquisa.
          </S.AboutParagraph>
        </S.AboutDescription>
        <S.AboutDescription>
          <S.AboutTitle>Habilidades</S.AboutTitle>
          <S.AboutParagraph>&#9642;&nbsp; Docker & Docker Compose (Containers Management)</S.AboutParagraph>
          <S.AboutParagraph>&#9642;&nbsp; Cloud Computing (AWS, Google Cloud and Digital Ocean)</S.AboutParagraph>
          <S.AboutParagraph>&#9642;&nbsp; Infrastructure-as-code (Terraform)</S.AboutParagraph>
          <S.AboutParagraph>&#9642;&nbsp; Git and GitFlow (Best Praticies)</S.AboutParagraph>
          <S.AboutParagraph>&#9642;&nbsp; NodeJS (Backend)</S.AboutParagraph>
          <S.AboutParagraph>&#9642;&nbsp; ReactJS (Frontend)</S.AboutParagraph>
          <S.AboutParagraph>&#9642;&nbsp; React Native (Mobile)</S.AboutParagraph>
          <S.AboutParagraph>&#9642;&nbsp; HTML Template Language (Frontend)</S.AboutParagraph>
          <S.AboutParagraph>&#9642;&nbsp; CSS (Stylus)</S.AboutParagraph>
          <S.AboutParagraph>&#9642;&nbsp; JavaScript (ES6/7)</S.AboutParagraph>
          <S.AboutParagraph>&#9642;&nbsp; PostgresSQL, MySQL, SQLite3 (SQL Language)</S.AboutParagraph>
          <S.AboutParagraph>&#9642;&nbsp; MongoDB (No-SQL)</S.AboutParagraph>
          <S.AboutParagraph>&#9642;&nbsp; Operations System (Linux, MacOs, Windows)</S.AboutParagraph>
          <S.AboutParagraph>&#9642;&nbsp; Network Management (Cloud Computing)</S.AboutParagraph>
          <S.AboutParagraph>&#9642;&nbsp; O que não sei, aprendo rápido =)</S.AboutParagraph>
        </S.AboutDescription>
        <S.AboutDescription>
          <S.AboutTitle>Contato</S.AboutTitle>
          <S.AboutParagraph>
            Você pode entrar em contato comigo através de qualquer uma das minhas
            redes sociais.
          </S.AboutParagraph>
        </S.AboutDescription>
        <S.SocialLinkWrapper>
          <S.SocialLinkList>
            {links.map((link, i) => {
              const Icon = Icons[link.label]

              return (
                <S.SocialLinkItem key={i}>
                  <S.SocialLinksLink 
                    href={link.url} 
                    title={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <S.IconWrapper>
                      <Icon />
                    </S.IconWrapper>
                  </S.SocialLinksLink>
                </S.SocialLinkItem>
              )
            })}
          </S.SocialLinkList>
        </S.SocialLinkWrapper>
      </Layout>
    </>
  );
}

export default AboutPage;