import * as I from 'shared/interfaces'

class Repo {
  public async getRepo(name: string): Promise<I.Repo | boolean> {
    return await fetch(`https://api.github.com/orgs/${name}/repos`, { method: 'GET' }).then(
      async (response) => {
        const { status } = response
        const data = await response.json()

        if (status !== 200) {
          return false
        }

        return data
      }
    )
  }
}

export const RepoService = new Repo()
