
import { Inter } from 'next/font/google'
import Layout from '@/layout'
import { useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Main({ children }) {

  useEffect(() => {

    fetch("/api/hello")
    .then((res) => res.json())
    .then((res) => console.log("response => ", res))
    .catch((err) =>console.log("err => ", err))

  }, [])
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
