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
  SimpleGrid
} from "@chakra-ui/react";

const Journal= () => {
  const [mood, setMood] = useState("");
  const [journalEntry, setJournalEntry] = useState("");
  const [gratitude, setGratitude] = useState("");
  const navbarHeight = useNavbarHeight()
  const handleSaveJournalEntry = () => {
    // Handle saving the journal entry to your data storage
    console.log("Mood:", mood);
    console.log("Journal Entry:", journalEntry);
    console.log("Gratitude:", gratitude);
  };

  return (
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
        {/* <circle cx="20%" cy="30%" r="150" fill="steelblue" opacity='40%'/>
        <circle cx="80%" cy="70%" r="100" fill="steelblue" opacity='40%'/> */}
      </svg>
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
            <FormLabel>Journal Entry:</FormLabel>
            <Textarea
              placeholder="Write your thoughts here..."
              value={journalEntry}
              onChange={(e) => setJournalEntry(e.target.value)}
              size="lg"
              resize="vertical"
              focusBorderColor="green.500"
            />
          </FormControl>

          <FormControl width="100%">
            <FormLabel>Gratitude:</FormLabel>
            <Input
              placeholder="What are you grateful for today?"
              value={gratitude}
              onChange={(e) => setGratitude(e.target.value)}
              size="lg"
              focusBorderColor="green.500"
            />
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
      </Box>
      <Center width="100%" mt={8}>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
              {/* {journalPosts.map((post, index) => (
                <JournalPost key={index} {...post} />
              ))} */}
              <Box p={4} borderWidth="1px" borderRadius="md" boxShadow="md">
                <Text>Date: 2023-10-20</Text>
                <Text>Mood Here</Text>
                <Text>Placeholder journal entry text...</Text>
              </Box>
              <Box p={4} borderWidth="1px" borderRadius="md" boxShadow="md">
                <Text>Date: 2023-10-20</Text>
                <Text>Mood Here</Text>
                <Text>Placeholder journal entry text...</Text>
              </Box>
              <Box p={4} borderWidth="1px" borderRadius="md" boxShadow="md">
                <Text>Date: 2023-10-20</Text>
                <Text>Mood Here</Text>
                <Text>Placeholder journal entry text...</Text>
              </Box>
            </SimpleGrid>
          </Center>
    </Flex>
  );
};

export default Journal