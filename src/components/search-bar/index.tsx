import React from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'

import * as S from './styles'
import * as BC from 'components/basicComponents'

export const Search = (): React.ReactElement => {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data): void => {
    router.push(`/org?name=${data.repository}`)
  }

  return (
    <>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.Container>
          <S.Input
            {...register('repository', { required: true })}
            type="text"
            placeholder="Enter your URL"
          />
          <BC.ButtonSubmit isDesktop={false} name="GET INFO" />
        </S.Container>
        <BC.ButtonSubmit isDesktop={true} name="GET INFO" />
        {errors.repository && 'The fiel is empty'}
      </S.Form>
    </>
  )
}
