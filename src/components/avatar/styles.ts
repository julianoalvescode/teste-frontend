import styled, { css } from 'styled-components'

import { desktop, mobileSmall } from 'styles'
export const Container = styled.main`
  display: flex;
  align-items: center;
  gap: 20px;
  background-color: #fff;
  padding: 20px 25px;
  border-radius: 10px;
  width: 100%;
  cursor: pointer;

  ${mobileSmall} {
    flex-direction: column;
    gap: 6px;
  }
`

export const LogoBox = styled.div`
  ${mobileSmall} {
    img {
      display: none !important;
    }
  }
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 400px;

  ${desktop} {
    width: 500px;
  }

  ${mobileSmall} {
    width: 300px;
  }
`

export const Title = styled.h4`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
  `}
`

export const Description = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.xxsmall};
  `}
`

export const Location = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`

export const LocationTitle = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.xxsmall};
  `}
`
