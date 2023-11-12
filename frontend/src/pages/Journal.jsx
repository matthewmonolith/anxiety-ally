import { useNavbarHeight } from "../components/NavbarHeightContext";
import React, { useState } from "react";
// const Journal = () => {
//   const navbarHeight = useNavbarHeight();

//   return (
//     <div style={{ paddingTop: `${navbarHeight}px` }}>
//       <h1>My journal</h1>
//     </div>
//   );
// };

import {
  Box,
  Button,
  ChakraProvider,
  Container,
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
  VStack,
  Flex,
  Text,
  Center,
  SimpleGrid,
  Stack,
  Divider
} from "@chakra-ui/react";
import {useGetJournalsQuery, useCreateJournalMutation } from '../slices/journalsApiSlice'

const Journal= () => {
  const {data: journals, isLoading, error, refetch} = useGetJournalsQuery();
  const [createJournal] = useCreateJournalMutation();

  const [mood, setMood] = useState('');
  const [title, setTitle] = useState('');
  const [caption, setCaption] = useState('');
  const [intensity, setIntensity] = useState(1)

  const createJournalHandler = async (e) => {
    e.preventDefault();
    try {
      await createJournal({mood, title, caption, intensity});
      setMood('');
      setTitle('');
      setCaption('');
      setIntensity(1);
      refetch();
    } catch (error) {
      console.error('Error creating journal:', error);
    }
  };

  return (
    <>
    <form onSubmit={createJournalHandler}>
       <VStack spacing={6} align="start" width="100%">
          <Text fontSize={'3xl'}>My Journal</Text>
          <FormControl>
            <FormLabel>Mood:</FormLabel>
            <Select placeholder="Select mood" value={mood} onChange={(e) => setMood(e.target.value)} focusBorderColor="green.500">
              <option value="happy">Happy</option>
              <option value="sad">Sad</option>
              <option value="calm">Calm</option>
              <option value="neutral">Neutral</option>
            </Select>
          </FormControl>

          <FormControl width="100%">
            <FormLabel>Journal Title:</FormLabel>
            <Textarea
              placeholder="Write a title for your journal post"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              size="lg"
              resize="vertical"
              focusBorderColor="green.500"
            />
          </FormControl>

          <FormControl width="100%">
            <FormLabel>Journal Entry:</FormLabel>
            <Textarea
              placeholder="Write a your journal entry here..."
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              size="lg"
              resize="vertical"
              focusBorderColor="green.500"
            />
          </FormControl>

          <FormControl mb="4">
                <FormLabel>Intensity of emotions:</FormLabel>
                <Select
                  value={intensity}
                  onChange={(e) => setIntensity(parseInt(e.target.value))}
                >
                  {Array.from({ length: 10 }, (_, index) => (
                    <option key={index + 1} value={index + 1}>
                      {index + 1}
                    </option>
                  ))}
                </Select>
              </FormControl>

          <Button
              colorScheme={'green'}
              bg={'steelblue'}
              rounded={'full'}
              px={6}
              fontSize='15px'
              padding='20px'
              type='submit'
              _hover={{
                bg: 'green.500',
              }}>
              Save Journal Entry
            </Button>
        </VStack>
    </form>
    <Flex direction='row' align='center' >
      <Box paddingTop='100px' width='450px' marginLeft='50px'>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        style={{ position: "absolute", zIndex: -1 }}
      >
        {/* Steel Blue Circles */}
        <circle cx="20%" cy="30%" r="150" fill="steelblue" opacity='40%'/>
        <circle cx="80%" cy="70%" r="100" fill="steelblue" opacity='40%'/>
      </svg>
       
      </Box>
          <VStack align="start" spacing="4">
          {journals ? (
          journals.map((journal) => (
            <Box key={journal._id} width="400px" p="4" borderWidth="1px" borderRadius="lg" boxShadow="md">
              <Text fontSize="xl" fontWeight="bold">{journal.title}</Text>
              <Text color="gray.600">{journal.caption}</Text>
              <Text>Mood: {journal.mood}</Text>
              <Divider my="2" />
              <Stack direction="row" justify="space-between">
                <Text>Intensity: {journal.intensity}</Text>
                <Text color="gray.500">Created At: {new Date(journal.createdAt).toLocaleString()}</Text>
              </Stack>
            </Box>
          ))
        ) : (
          <Text>No journals found.</Text>
        )}
      </VStack>
    </Flex>
    </>
  );
};

export default Journal