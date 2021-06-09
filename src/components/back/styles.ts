import styled, { css } from 'styled-components'

export const Container = styled.a`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 5px;
    text-decoration: none;
    color: ${theme.colors.black};
    font-size: 1.2rem;
    transition: all 0.3s ease-in;
    cursor: pointer;

    :hover {
      color: ${theme.colors.primary};
    }
  `}
`
