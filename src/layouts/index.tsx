import React, { ReactNode } from 'react'

import * as S from './styles'
import 'react-toastify/dist/ReactToastify.css'

type Props = {
  children?: ReactNode
}

export const Layout = ({ children }: Props): React.ReactElement => (
  <>
    <S.Container>{children}</S.Container>
  </>
)
