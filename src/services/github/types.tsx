export type ResponseRepo = {
  node: {
    id: string
    name: string
    url: string
    stargazers: {
      totalCount: number
    }
    forks: {
      totalCount: number
    }
  }
}

export type Response = {
  data: {
    search: {
      repositoryCount: number
      edges: ResponseRepo[]
    }
  }
}

export type Repo = {
  name: string
  key: string
  url: string
  stargazers: number
  forks: number
}
