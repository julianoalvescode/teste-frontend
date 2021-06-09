import React from 'react'

import Image from 'next/image'

import * as S from './styles'

export const Error = (): React.ReactElement => {
  return (
    <>
      <S.Container>
        <S.ImageBox>
          <Image src="/static/img/error.svg" height="330" width="353" />
        </S.ImageBox>
        <S.Info>
          <S.Title>
            Ooops! Não foi possivel
            <br /> encontrar a página
          </S.Title>
          <S.LinkBox>
            <S.BackSearch href="/search">Voltar</S.BackSearch>
          </S.LinkBox>
        </S.Info>
      </S.Container>
    </>
  )
}
