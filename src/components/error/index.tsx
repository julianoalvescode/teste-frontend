import React from 'react'

import Image from 'next/image'

import * as S from './styles'
import * as C from 'components'

export const Error = (): React.ReactElement => {
  return (
    <>
      <S.Container>
        <S.ImageBox>
          <Image src="/static/img/error.svg" height="330" width="280" />
        </S.ImageBox>
        <S.Info>
          <S.Title>
            Ooops! Não foi possivel
            <br /> encontrar a página
          </S.Title>
          <C.BackLink />
        </S.Info>
      </S.Container>
    </>
  )
}
