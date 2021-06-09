import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 100%;
    background-color: ${theme.colors.white};
    padding: 25px 30px;
    border-radius: 6px;
    cursor: pointer;
  `}
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`

export const Title = styled.h4``

export const Description = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.xxsmall};
  `}
`
