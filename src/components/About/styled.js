import styled from "styled-components"
import media from 'styled-media-query'

export const AboutHeader = styled.header`
  color: var(--postColor);
  margin: auto;
  max-width: 70rem;
  padding: 5rem 5rem 0;

  ${media.lessThan("large")`
    padding: 3rem 0 0;
    max-width: 100%;
  `}
`

export const AboutTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  padding: 0 1.4rem;
  margin: 1rem auto;

  ${media.lessThan("large")`
    font-size: 2rem;
    line-height: 1.1;
    padding: 0 1.4rem;
    margin: 0.2rem auto;
  `}
`

export const AboutDescription = styled.div`
  color: var(--postColor);
  margin: auto;
  max-width: 70rem;
  padding: 2rem 5rem 0;

  ${media.lessThan("large")`
    padding: 3rem 0 0;
    max-width: 100%;
  `}
`

export const AboutParagraph = styled.p`
  font-size: 1.3rem;
  font-weight: 300;
  padding: 0 1.4rem;
  line-height: 1.6;

  ${media.lessThan("large")`
    font-size: 1rem;
    font-weight: 200;
    padding: 0 1.4rem;
  `}
`

export const SocialLinkWrapper = styled.nav`
  margin: 2rem auto;
  width: 100%;
`

export const SocialLinkList = styled.ul`
  align-items: center;
  display: flex;
  justify-content: space-evenly;
  list-style: none;
`

export const SocialLinkItem = styled.li``

export const SocialLinksLink = styled.a`
  color: var(--white);
  text-decoration: none;
  transition: color 0.5s;

  &:hover {
    color: var(--highlight);
  }
`

export const IconWrapper = styled.div`
  fill: #bbb;
  width: 30px;
  height: 30px;
`