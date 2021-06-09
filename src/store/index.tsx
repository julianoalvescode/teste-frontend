import create from 'zustand'

import * as I from 'shared/interfaces'

export const useStoreOrg = create<I.OrgStore>((set) => ({
  org: {},
  addOrg: (data) => set({ org: data }),
}))

export const useStoreRepo = create<I.RepoStore>((set) => ({
  repo: [{}],
  addRepo: (data) => set({ repo: data }),
}))
