import React, { useEffect } from 'react'

import { useRouter } from 'next/router'

const IndexPage = (): React.ReactElement => {
  const router = useRouter()

  useEffect(() => {
    router.push('/search')
  }, [])

  return (
    <>
      <h1>Seja Bem-vindo</h1>
    </>
  )
}
export default IndexPage
