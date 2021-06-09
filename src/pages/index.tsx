import Link from 'next/link'

import { Layout } from 'layouts'

const IndexPage = (): React.ReactElement => (
  <Layout>
    <Link href="/about">
      <a>About</a>
    </Link>
  </Layout>
)

export default IndexPage
