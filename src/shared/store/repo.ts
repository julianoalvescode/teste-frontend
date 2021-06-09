import { Repo } from 'shared/interfaces'

export interface RepoStore {
  repo: Repo[] | null
  addRepo: (data: Repo | boolean) => void
}
