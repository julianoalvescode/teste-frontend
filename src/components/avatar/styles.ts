import styled from 'styled-components'

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
  font-size: 1.8rem;
`

export const Description = styled.p`
  color: #6a737d;
`

export const Location = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`

export const LocationTitle = styled.p`
  color: #24292e;
  font-size: 0.9rem;
`
