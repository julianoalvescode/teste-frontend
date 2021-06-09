import styled from 'styled-components'

import { desktop, mobileSmall } from 'styles'

export const Container = styled.form`
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

  ${mobileSmall} {
    width: 90%;
    height: 80px;
  }
`

export const Input = styled.input`
  width: 55%;
  height: 80px;
  border: none;
  font-size: 1.1rem;
  color: #7a7d95;

  ::placeholder {
    color: #7a7d95;
  }

  :-webkit-autofill {
    background-color: none !important;
  }

  ${mobileSmall} {
    font-size: 0.9rem;
  }
`

export const Button = styled.button`
  height: 60px;
  width: 25%;
  background-color: #12d998;
  border: none;
  cursor: pointer;
  color: #fff;
  border-radius: 6px;
`
