import React from 'react'
import Image from 'next/image'

import * as S from './styles'

import * as I from 'shared/interfaces'

import { GrLocation } from 'react-icons/gr'

export const Avatar = ({ data }: { data: I.Org }): React.ReactElement => {
  return (
    <S.Container>
      <S.LogoBox>
        {data.avatar_url && <Image loading="lazy" width="100" height="100" src={data.avatar_url} />}
      </S.LogoBox>
      <S.Info>
        <S.Title>{data.name}</S.Title>
        {data.description && <S.Description>{data.description}</S.Description>}
        {data.location && (
          <S.Location>
            <GrLocation size="15" />
            <S.LocationTitle>{data.location}</S.LocationTitle>
          </S.Location>
        )}
      </S.Info>
    </S.Container>
  )
}
