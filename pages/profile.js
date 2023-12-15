
import { Inter } from 'next/font/google'
import Layout from '@/layout'

const inter = Inter({ subsets: ['latin'] })

export default function Profile() {
  return (
    <>
      <Layout>
        <div>
          <p>Profile</p>
        </div>
      </Layout>
    </>
  )
}
