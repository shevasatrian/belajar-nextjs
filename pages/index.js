
import { Inter } from 'next/font/google'
import { useEffect } from 'react'
import Image from 'next/image'
import dynamic from 'next/dynamic'

const inter = Inter({ subsets: ['latin'] })
const LayoutComponent = dynamic(() => import("@/layout"))

export default function Main({ children }) {

  // useEffect(() => {

  //   fetch("/api/hello")
  //   .then((res) => res.json())
  //   .then((res) => console.log("response => ", res))
  //   .catch((err) =>console.log("err => ", err))

  // }, [])
  return (
    <>
      <LayoutComponent metaTitle="Home">
        <div>
          {/* <p className='my-2'>Home</p> */}
          {/* <Image src="/next.png" width={400} height={400} alt="next img" />
          <img src="/next.png" style={{ width: 400, height: 400 }} alt="next img" /> */}
          Index

        </div>
      </LayoutComponent>
    </>
  )
}
