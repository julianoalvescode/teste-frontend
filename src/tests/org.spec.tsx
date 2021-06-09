global.fetch = require('node-fetch')

import { OrgService, RepoService } from 'services'

describe('Testing Org Page', () => {
  it('Should Org Service', () => {
    return OrgService.getOrg('facebook').then((data) => {
      expect(data).toBeDefined()
    })
  })

  it('Not Should Org Service', () => {
    return OrgService.getOrg('asasas').then((data) => {
      expect(data).toEqual(false)
    })
  })

  it('Should Repo Service', () => {
    return RepoService.getRepo('facebook').then((data) => {
      expect(data).toBeDefined()
    })
  })

  it('Not Should Repo Service', () => {
    return RepoService.getRepo('asasas').then((data) => {
      expect(data).toEqual(false)
    })
  })
})
