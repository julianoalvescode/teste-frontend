import styled from 'styled-components'

import { mobile, desktop, mobileSmall, desktopLarge } from 'styles'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  gap: 25px;

  ${desktop} {
    width: 60%;
  }

  ${desktopLarge} {
    width: 50%;
  }

  ${mobile} {
    width: 80%;
  }

  ${mobileSmall} {
    width: 90%;
  }
`

export const CardBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 400px;
  overflow-x: hidden;
  width: 100%;

  ::-webkit-scrollbar {
    width: 7px;
  }

  ::-webkit-scrollbar-track {
    background: none;
    border-radius: 3px;
  }

  ::-webkit-scrollbar-thumb {
    background: none;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`
