
import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { Box, Flex, Grid, GridItem, Card, Heading, Text, Button, Input, Textarea } from '@chakra-ui/react'

const inter = Inter({ subsets: ['latin'] })
const LayoutComponent = dynamic(() => import("@/layout"))

export default function EditNotes() {

  const router = useRouter() 
  const { id } = router?.query
  const [notes, setNotes] = useState()

  const HandleSumbit = async () => {
    try {
      const response = await fetch(`https://paace-f178cafcae7b.nevacloud.io/api/notes/update/${id}`, { method: 'PATCH', headers: {"Content-type": "application/json"}, body: JSON.stringify({ title: notes?.title, description: notes?.description }),})
      const result = await response.json()
      if (result?.success) {
        router.push("/notes")
      }
      console.log('result => ', result)
    } catch (error) {
      
    }
  }

  useEffect(() => {
    
    async function fetchingData() {
      const res = await fetch(`https://paace-f178cafcae7b.nevacloud.io/api/notes/${id}`);
      const listNotes = await res.json();
      console.log('list notes => ', listNotes?.data)
      setNotes(listNotes?.data); 
    }
    
    fetchingData();
  }, [id]);
  
  return (
    <>
      <LayoutComponent metaTitle="Notes">
        <Card margin='5' padding='5'>
          <Heading>Edit Notes</Heading>
          <Grid gap='5 '>
            <GridItem>
              <Text>Title</Text>
              <Input type='text' value={notes?.title || ""} onChange={(event) => setNotes({ ...notes, title:event.target.value})}/>
            </GridItem>
            <GridItem>
              <Text>description</Text>
              <Textarea type='text' value={notes?.description || ""} onChange={(event) => setNotes({ ...notes, description:event.target.value})}/>
            </GridItem>
            <GridItem>
              <Button colorScheme="blue" onClick={() => HandleSumbit()}>Submit</Button>
            </GridItem>
          </Grid>
        </Card>
      </LayoutComponent>
    </>
  )
}

