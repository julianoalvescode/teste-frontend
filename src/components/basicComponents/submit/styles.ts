import styled, { css } from 'styled-components'
import { mobile, desktop } from 'styles'

import { lighten } from 'polished'

export const Button = styled.button`
  ${({ theme }) => css`
    height: 60px;
    width: 25%;
    background-color: ${theme.colors.secondary};
    border: none;
    cursor: pointer;
    color: ${theme.colors.white};
    border-radius: 6px;
    cursor: pointer;

    :hover {
      background-color: ${lighten(0.2, theme.colors.secondary)};
    }

    ${mobile} {
      display: none;
    }
  `}
`

export const ButtonDesktop = styled.button`
  ${({ theme }) => css`
    height: 60px;
    width: 100%;
    background-color: ${theme.colors.secondary};
    border: none;
    cursor: pointer;
    color: ${theme.colors.white};
    border-radius: 6px;
    cursor: pointer;

    :hover {
      background-color: ${lighten(0.2, theme.colors.secondary)};
    }

    ${desktop} {
      display: none;
    }
  `}
`
