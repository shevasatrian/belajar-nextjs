
import { Inter } from 'next/font/google'
import Layout from '@/layout'

const inter = Inter({ subsets: ['latin'] })

export default function Profile() {
  return (
    <>
      <Layout metaTitle="Profile" metaDescription="Semua informasi ini adalah seputar profile user">
        <div>
          <p className='my-2'>Profile</p>
        </div>
      </Layout>
    </>
  )
}
