import React from 'react'

import * as S from './styles'

export const ButtonSubmit = ({
  name,
  isDesktop,
}: {
  name: string
  isDesktop: boolean
}): React.ReactElement => {
  return (
    <>
      {isDesktop ? (
        <S.ButtonDesktop type="submit">{name}</S.ButtonDesktop>
      ) : (
        <S.Button type="submit">{name}</S.Button>
      )}
    </>
  )
}
