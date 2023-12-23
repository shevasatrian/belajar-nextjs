
import { Inter } from 'next/font/google'
import Layout from '@/layout'

const inter = Inter({ subsets: ['latin'] })

export default function Main({ children }) {
  return (
    <>
      <Layout metaTitle="Home">
        <div>
          <p className='my-2'>Home</p>
        </div>
      </Layout>
    </>
  )
}
