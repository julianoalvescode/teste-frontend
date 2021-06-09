import React, { useEffect, useState } from 'react'
import Head from 'next/head'

import * as S from './styles'
import * as C from 'components'

import { useStoreOrg, useStoreRepo } from 'store'
import { OrgService, RepoService } from 'services'

import { motion } from 'framer-motion'

import { getParam } from 'utils'

const OrgPage = (): React.ReactElement => {
  const { repo, addRepo } = useStoreRepo((state) => state)
  const { org, addOrg } = useStoreOrg()
  const [isError, SetError] = useState(false)

  useEffect(() => {
    const name = getParam('name')

    async function getData(): Promise<void> {
      if (name !== undefined) {
        const orgApi = await OrgService.getOrg(name)
        const repoApi = await RepoService.getRepo(name)

        if (orgApi !== false) {
          addOrg(orgApi)
          addRepo(repoApi)
        } else {
          SetError(true)
        }
      } else {
        SetError(true)
      }
    }

    getData()
  }, [])

  return (
    <>
      <Head>
        <title>Org</title>
      </Head>
      <motion.div
        className="container-org"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        {!isError ? (
          <S.Container>
            <C.BackLink />
            <C.Avatar data={org} />
            <S.CardBox>
              {repo.length ? (
                repo.map((i) => <C.Card data={i} key={i.id} />)
              ) : (
                <h1>Sem repositório</h1>
              )}
            </S.CardBox>
          </S.Container>
        ) : (
          <C.Error />
        )}
      </motion.div>
    </>
  )
}

export default OrgPage
