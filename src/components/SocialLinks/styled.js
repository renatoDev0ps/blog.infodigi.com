import styled from 'styled-components'
import media from 'styled-media-query'

export const SocialLinkWrapper = styled.nav`
  margin: 2rem auto;
  width: 100%;

  ${media.lessThan("large")`
    display: none;
  `}
`

export const SocialLinkList = styled.ul`
  align-items: center;
  display: flex;
  justify-content: space-around;
  list-style: none;
`

export const SocialLinkItem = styled.li``

export const SocialLinksLink = styled.a`
  color: var(--texts);
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