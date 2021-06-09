import styled, { css } from 'styled-components'

import { desktop, mobileSmall, mobile } from 'styles'

export const Container = styled.div`
  background-color: #ffff;
  border-radius: 15px;
  box-shadow: -2px 5px 15px 0px rgba(0, 0, 0, 0.08);
  -webkit-box-shadow: -2px 5px 15px 0px rgba(0, 0, 0, 0.08);
  -moz-box-shadow: -2px 5px 15px 0px rgba(0, 0, 0, 0.08);
  display: flex;
  align-items: center;
  justify-content: space-around;

  ${desktop} {
    height: 95px;
    width: 600px;
  }

  ${mobile} {
    padding: 0px 25px;
    width: 360px;
    justify-content: flex-start;
  }

  ${mobileSmall} {
    padding: 0px 25px;
    width: 290px;
    height: 80px;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 25px;
`

export const Input = styled.input`
  ${({ theme }) => css`
    width: 55%;
    height: 80px;
    border: none;
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.gray};

    ::placeholder {
      color: ${theme.colors.gray};
    }

    :-webkit-autofill {
      -webkit-box-shadow: 0 0 0px 1000px white inset;
    }

    ${mobileSmall} {
      font-size: ${theme.font.sizes.xxsmall};
    }
  `}
`
