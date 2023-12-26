
import { Inter } from 'next/font/google'
import { useEffect } from 'react'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })
const LayoutComponent = dynamic(() => import("@/layout"))

export default function Notes({ notes }) {

  console.log("notes data => ", notes)

  return (
    <>
      <LayoutComponent metaTitle="Notes">
        <div>
          {notes.data.map((item) => (
            <div>
              <Link href={`/notes/${item.id}`}>{item.title}</Link>
            </div>
              // <div className='border border-solid border-gray-600 mb-3 mx-2'>
              //   <p>{item.title}</p>
              //   <p>{item.description}</p>
              // </div>
            ))}

        </div>
      </LayoutComponent>
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch("https://simpeg-be.vercel.app/api/v2/notes")
  const notes = await res.json()
  return { props: { notes }, revalidate: 10 }
}
