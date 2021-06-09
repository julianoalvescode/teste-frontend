import { Org } from 'shared/interfaces'

export interface OrgStore {
  org: Org
  addOrg: (data: Org | boolean) => void
}
