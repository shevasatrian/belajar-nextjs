
import { Inter } from 'next/font/google'
import dynamic from 'next/dynamic'

const inter = Inter({ subsets: ['latin'] })
const LayoutComponent = dynamic(() => import("@/layout"))

export default function Notes({ posts }) {
  console.log('data posts =>', posts)

  return (
    <>
      <LayoutComponent metaTitle="Posts">
        {posts.map((item) => (
          <div>
            <p>{item.id}</p>
            <p><b>{item.title}</b></p>
            <p>{item.body}</p>
          </div>
        ))}
      </LayoutComponent>
    </>
  )
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await res.json()
  // Pass data to the page via props
  return { props: { posts } }
}
