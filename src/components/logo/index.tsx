import React from 'react'

import Image from 'next/image'

import * as S from './styles'

export const Logo = (): React.ReactElement => {
  return (
    <>
      <S.Container>
        <Image src="/static/img/logo.png" alt="Logo" width="40" height="40" />
        <S.Title>GetOrg</S.Title>
      </S.Container>
    </>
  )
}
