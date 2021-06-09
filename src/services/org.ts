import * as I from 'shared/interfaces'

class Org {
  public async getOrg(name: string): Promise<I.Org | boolean> {
    return await fetch(`https://api.github.com/orgs/${name}`, {
      method: 'GET',
    }).then(async (response) => {
      const { status } = response
      const data = await response.json()

      if (status !== 200) {
        return false
      }

      return data
    })
  }
}

export const OrgService = new Org()
