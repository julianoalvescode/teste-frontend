import React from 'react'
import Head from 'next/head'

import * as S from 'templates/search/styles'
import * as C from 'components'

import { motion } from 'framer-motion'

const SearchPage = (): React.ReactElement => (
  <>
    <Head>
      <title>Search Organization</title>
    </Head>

    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
      <S.Container>
        <C.Logo />
        <C.Search />
      </S.Container>
    </motion.div>
  </>
)

export default SearchPage
