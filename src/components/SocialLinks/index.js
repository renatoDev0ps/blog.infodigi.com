import React from 'react'

import Icons from './Icons'
import links from './content'

import * as S from './styled'

const SocialLinks = () => {
  return (
    <>
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
    </>
  )
}

export default SocialLinks