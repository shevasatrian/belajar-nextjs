
import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { Box, Flex, Grid, GridItem, Card, Heading, Text, Button, Input, Textarea } from '@chakra-ui/react'
import { useMutation } from '@/hooks/useMutation'

const inter = Inter({ subsets: ['latin'] })
const LayoutComponent = dynamic(() => import("@/layout"))

export default function AddNotes() {
  const { mutate } = useMutation()
  const router = useRouter() 
  const [notes, setNotes] = useState({
    title: "",
    description: "",
  })

  const HandleSumbit = async () => {
    const response = await mutate({ 
      url: 'https://paace-f178cafcae7b.nevacloud.io/api/notes',
      payload: notes,
    })
    console.log('response => ', response)
  }
  
  return (
    <>
      <LayoutComponent metaTitle="Notes">
        <Card margin='5' padding='5'>
          <Heading>Add Notes</Heading>
          <Grid gap='5 '>
            <GridItem>
              <Text>Title</Text>
              <Input type='text' onChange={(event) => setNotes({ ...notes, title:event.target.value})}/>
            </GridItem>
            <GridItem>
              <Text>description</Text>
              <Textarea type='text' onChange={(event) => setNotes({ ...notes, description:event.target.value})}/>
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

