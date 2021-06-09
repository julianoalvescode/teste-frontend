import React from 'react'

import Link from 'next/link'

import * as S from './styles'

import { IoMdArrowBack } from 'react-icons/io'

const MyButton = React.forwardRef(({ onClick, href }, ref) => {
  return (
    <S.Container href={href} onClick={onClick} href={ref}>
      <IoMdArrowBack size="16" />
      Back
    </S.Container>
  )
})

export const BackLink = (): React.ReactElement => {
  return (
    <>
      <Link href="/search" passHref>
        <MyButton />
      </Link>
    </>
  )
}
