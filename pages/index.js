
import { Inter } from 'next/font/google'
import Layout from '@/layout'

const inter = Inter({ subsets: ['latin'] })

export default function Main({ children }) {
  return (
    <>
      <Layout>
        <div>
          <p>Home</p>
        </div>
      </Layout>
    </>
  )
}
