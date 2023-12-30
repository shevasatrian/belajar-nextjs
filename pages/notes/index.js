
import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { Box, Flex, Grid, GridItem, Card, CardBody, CardHeader, CardFooter, Heading, Text, Button } from '@chakra-ui/react'

const inter = Inter({ subsets: ['latin'] })
const LayoutComponent = dynamic(() => import("@/layout"))

export default function Notes() {

  const router = useRouter() 
  const [notes, setNotes] = useState();

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`https://paace-f178cafcae7b.nevacloud.io/api/notes/delete/${id}`, { method: 'DELETE',})
      const result = await response.json()
      if (result?.success) {
        router.reload()
      }
      console.log('result => ', result)
    } catch (error) {
      
    }

  }

  useEffect(() => {
    
    async function fetchingData() {
      const res = await fetch("https://paace-f178cafcae7b.nevacloud.io/api/notes");
      const listNotes = await res.json();
      setNotes(listNotes); 
    }
    
    fetchingData();
  }, []);

  console.log('notes =>', notes);
  
  return (
    <>
      <LayoutComponent metaTitle="Notes">
        <Box padding='5'>
          <Flex justifyContent="end">
            <Button colorScheme="blue" onClick={() => router.push('/notes/add')}>Add Notes</Button>
          </Flex>
          <Flex>
            <Grid templateColumns='repeat(3, 1fr)' gap={5}>
              {
                notes?.data?.map((item) => (
                  <GridItem>
                    <Card>
                      <CardHeader>
                        <Heading>{item?.title}</Heading>
                      </CardHeader>
                      <CardBody>
                        <Text>{item?.description}</Text>
                      </CardBody>
                      <CardFooter
                        justify='space-between'
                        flexWrap='wrap'
                      >
                        <Button onClick={() => router.push(`/notes/edit/${item?.id}`)} flex='1' variant='ghost' >
                          Edit
                        </Button>
                        <Button onClick={() => handleDelete(item?.id)} flex='1' colorScheme='red' >
                          Delete
                        </Button>
                      </CardFooter>
                    </Card>
                  </GridItem>
                ))
              }
              
            </Grid>
          </Flex>
        </Box>
      </LayoutComponent>
    </>
  )
}

// export async function getStaticProps() {
//   const res = await fetch("https://simpeg-be.vercel.app/api/v2/notes")
//   const notes = await res.json()
//   return { props: { notes }, revalidate: 10 }
// }
