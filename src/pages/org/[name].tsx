import React, { useEffect, useState } from 'react'
import Head from 'next/head'

import * as S from 'templates/org/styles'
import * as C from 'components'

import { OrgService, RepoService } from 'services'

import { motion } from 'framer-motion'

const OrgPage = (props): React.ReactElement => {
  const [isError, SetError] = useState(false)

  useEffect(() => {
    if (props.repo == false && props.org == false) {
      SetError(true)
    }
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
            <C.Avatar data={props.org} />
            <S.CardBox>
              {props.repo.length ? (
                props.repo.map((i) => <C.Card data={i} key={i.id} />)
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

export async function getStaticProps({ params }) {
  const orgApi = await OrgService.getOrg(params.name)
  const repoApi = await RepoService.getRepo(params.name)

  return {
    props: { org: orgApi, repo: repoApi },
  }
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          name: 'facebook',
        },
      },
    ],
    fallback: false,
  }
}

export default OrgPage
