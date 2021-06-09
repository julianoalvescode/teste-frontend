import React from 'react'

import * as S from './styles'

import * as I from 'shared/interfaces'

export const Card = ({ data }: { data: I.Repo }): React.ReactElement => {
  return (
    <>
      <S.Container>
        <S.Info>
          <S.Title>{data.name}</S.Title>
          <S.Description>{data.description}</S.Description>
        </S.Info>
      </S.Container>
    </>
  )
}
