import styled from 'styled-components'
import Link from 'next/link'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`
export const ImageBox = styled.div`
  display: flex;
  justify-content: center;
`

export const Info = styled.div`
  padding: 15px;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
`

export const LinkBox = styled.div`
  height: 40px;
  width: 300px;
  background-color: #12d998;
  border: none;
  cursor: pointer;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    text-decoration: none !important;
    color: #fff;
  }
`

export const Title = styled.h5`
  font-size: 1.2rem;
  text-align: center;
`

export const BackSearch = styled(Link)``
