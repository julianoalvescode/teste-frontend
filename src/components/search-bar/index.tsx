import React from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'

import * as S from './styles'

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
      <S.Container onSubmit={handleSubmit(onSubmit)}>
        <S.Input
          {...register('repository', { required: true })}
          type="text"
          placeholder="Enter your URL"
        />
        <S.Button type="submit">GET INFO</S.Button>
      </S.Container>
      {errors.repository && 'The fiel is empty'}
    </>
  )
}
